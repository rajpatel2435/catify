import CatsInfo from "@/components/CatsInfo";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* seo tags for on page  */}
      <header>
        <title>CatiFy: Find your Kitty</title>
        <meta name="description" content="Find you kitt and play around with it until you find your kitty " />

      </header>
      <Navbar />
      <CatsInfo />
    </div>
  );
}
