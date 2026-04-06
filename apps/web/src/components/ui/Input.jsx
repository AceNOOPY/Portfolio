export default function Input({ label, id, error, ...props }) {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium mb-2 text-[var(--text)]"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-4 py-3 bg-[var(--panel)] border ${error ? "border-[var(--danger)]" : "border-[var(--border)]"} text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-smooth`}
        style={{ borderRadius: "6px", fontFamily: "Inter, sans-serif" }}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-[var(--danger)]">{error}</p>}
    </div>
  );
}
