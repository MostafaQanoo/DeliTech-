export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="border-b border-line bg-[linear-gradient(#ffffff,#f6f7f8)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <p className="rise-in text-sm font-medium text-brand">{kicker}</p>
        <h1 className="rise-in display-xl mt-3 max-w-4xl text-ink">{title}</h1>
        <p className="rise-in-late mt-5 max-w-2xl text-lg leading-8 text-slate">{lede}</p>
      </div>
    </section>
  );
}
