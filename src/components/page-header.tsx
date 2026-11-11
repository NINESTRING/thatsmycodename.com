/** Title block shared by the top-level section pages. */
export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <header className="container-page pt-16 pb-10 sm:pt-24 sm:pb-14">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {description}
        </p>
      )}
    </header>
  );
}
