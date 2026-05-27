export function PageLoader() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg text-text"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      <p className="text-sm text-text-muted">Loading portfolio…</p>
    </div>
  );
}
