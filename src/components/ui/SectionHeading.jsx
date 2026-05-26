export function SectionHeading({ label, title, className = "", id }) {
  return (
    <div className={`mb-10 md:mb-14 ${className}`}>
      {label && (
        <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
          {label}
        </p>
      )}
      <h2
        id={id}
        className="text-3xl font-bold text-text md:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
    </div>
  );
}
