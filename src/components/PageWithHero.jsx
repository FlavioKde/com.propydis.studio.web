export default function PageWithHero({ title, subtitle, children }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-gray-600 mb-6">{subtitle}</p>
          )}
        </div>
      </section>

      {/* Contenido que le pases desde la página */}
      <section className="py-12 container mx-auto px-4">
        {children}
      </section>
    </>
  );
}