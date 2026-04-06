export default function Tag({ children }) {
  return (
    <span
      className="inline-block px-3 py-1 text-sm bg-[var(--panel)] border border-[var(--border)] text-[var(--muted)] transition-smooth hover:border-[var(--accent)] hover:text-[var(--accent)]"
      style={{ borderRadius: "4px" }}
    >
      {children}
    </span>
  );
}
