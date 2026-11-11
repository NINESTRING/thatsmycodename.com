import { getDictionary } from "@/i18n/dictionaries";

export default async function HomePage() {
  const dict = await getDictionary();

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {dict.home.heading}
      </h1>
      <p className="max-w-md text-lg text-muted-foreground">{dict.home.body}</p>
    </main>
  );
}
