export function ContentError({ message }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-text">
      <h1 className="text-xl font-bold">Could not load content</h1>
      <p className="max-w-md text-sm text-text-muted">{message}</p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-text"
      >
        Retry
      </button>
    </div>
  );
}
