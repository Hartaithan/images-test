import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center align-center p-24 ${inter.className}`}
    >
      <h2 className="mb-3 text-2xl font-semibold">Hello World!</h2>
    </main>
  );
}
