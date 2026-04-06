export default function Section({ title, children, id }) {
  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {title && (
          <div className="mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              <span className="text-[var(--accent)]">&gt;</span> {title}
            </h2>
            <div className="h-[1px] w-24 bg-[var(--accent)]" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
