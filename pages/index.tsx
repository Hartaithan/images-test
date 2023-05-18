import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const defaultUrl =
  "https://image.api.playstation.com/trophy/np/NPWR02322_00_00273877B6E6490ED245096C071F4DD7514629BDB1/6496A452C06F1E1DF7C7A8C3ED50391DE82C604C.PNG";

export default function Home() {
  const [url, setUrl] = useState<string>(defaultUrl);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center align-center p-24 ${inter.className}`}
    >
      <Head>
        <title>images-test</title>
        <meta name="description" content="images test app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="mb-3 text-2xl font-semibold">Hello World!</h2>
      <input
        className="border-none bg-stone-950 w-10/12"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Image width={320} height={320} src={url} alt="test image" />
    </main>
  );
}
