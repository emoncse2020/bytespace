import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SearchHero from "@/components/sections/SearchHero";
import SearchResults from "@/components/sections/SearchResults";

export const metadata: Metadata = {
  title: "Find Your Next Course — ByteSpace",
  description:
    "Browse courses across design, development, marketing and more on ByteSpace.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;

  return (
    <>
      <Header active="Courses" />
      <main>
        <SearchHero initialQuery={q} />
        <SearchResults query={q} />
      </main>
      <Footer />
    </>
  );
}
