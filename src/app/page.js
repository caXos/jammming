import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-base-100">
      <Button color="primary">Meu botão</Button>
    </main>
  );
}
