import { Frame } from "@/components/frame";
import Homepage from "@/components/homepage";
import Navbar from "@/components/navbar";
import Wireframe from "@/components/teste";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-5">
        <Frame>
          <Homepage />
        </Frame>

        <Wireframe />
      </main>
    </>
  );
}
