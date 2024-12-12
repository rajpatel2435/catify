import CatsInfo from "@/components/CatsInfo";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
    <Navbar />
    <CatsInfo />
    </div>
  );
}
