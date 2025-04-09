import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-center p-8">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </header>
  );
}