import Image from "next/image";

export default function Icon_Vinyl() {
  return (
    <Image
      src="/Disque_Vinyl.svg"
      alt="Vinyl Disc Icon"
      width={24}
      height={24}
      className="animate-spin"
    />
  );
}
