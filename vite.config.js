import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function adminDevServer() {
  return {
    name: "admin-dev-server",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0] ?? "";

        if (url === "/admin") {
          res.writeHead(302, { Location: "/admin/" });
          res.end();
          return;
        }

        if (url === "/admin/") {
          req.url = "/admin/index.html";
        }

        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), adminDevServer()],
});
