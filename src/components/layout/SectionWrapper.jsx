export default function SectionWrapper({
  children,
  className = "",
  bg = "bg-cloud",
  id,
}) {
  return (
    <section
      id={id}
      className={`${bg} py-24 md:py-32 lg:py-40 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {children}
      </div>
    </section>
  );
}
