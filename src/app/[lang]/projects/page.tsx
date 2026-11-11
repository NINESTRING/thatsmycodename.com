import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.nav.projects };
}

export default async function Page() {
  const dict = await getDictionary();
  return <PageHeader title={dict.nav.projects} description={dict.comingSoon} />;
}
