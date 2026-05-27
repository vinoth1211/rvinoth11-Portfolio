function getSiteOrigin() {
  if (process.env.SITE_URL) {
    return process.env.SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:5173";
}

export default async function handler(req, res) {
  const code = req.query?.code;
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!code || !clientId || !clientSecret) {
    res.status(400).send("Missing OAuth configuration or authorization code.");
    return;
  }

  const redirectUri = `${getSiteOrigin()}/api/callback`;

  try {
    const tokenResponse = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
          redirect_uri: redirectUri,
        }),
      }
    );

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      res.status(400).send(tokenData.error_description || tokenData.error);
      return;
    }

    const content = {
      token: tokenData.access_token,
      provider: "github",
    };

    const message = `authorization:github:success:${JSON.stringify(content)}`;

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(`<!DOCTYPE html><html><body><script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(${JSON.stringify(message)}, e.origin);
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script></body></html>`);
  } catch {
    res.status(500).send("OAuth token exchange failed.");
  }
}
