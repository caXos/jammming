"use client";
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-base-100">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <Image
          src="/Disque_Vinyl.svg"
          alt="Vinyl Disc"
          width={100}
          height={100}
        />
        <span className="text-primary">Jammming</span>
      </div>
      <Button color="primary" action={() => console.log("eizem")}>
        Primary
      </Button>
    </main>
  );
}
