export default function Textarea({ label, id, error, ...props }) {
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
      <textarea
        id={id}
        className={`w-full px-4 py-3 bg-[var(--panel)] border ${error ? "border-[var(--danger)]" : "border-[var(--border)]"} text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-smooth resize-none`}
        style={{ borderRadius: "6px", fontFamily: "Inter, sans-serif" }}
        rows={5}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-[var(--danger)]">{error}</p>}
    </div>
  );
}
