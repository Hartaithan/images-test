import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

interface IExample {
  id?: number;
  value: string;
  description: string;
}

const examples: IExample[] = [
  {
    id: 1,
    value:
      "https://image.api.playstation.com/trophy/np/NPWR02322_00_00273877B6E6490ED245096C071F4DD7514629BDB1/6496A452C06F1E1DF7C7A8C3ED50391DE82C604C.PNG",
    description: "not work",
  },
  {
    id: 2,
    value:
      "https://image.api.playstation.com/trophy/np/NPWR07834_00_0002D204CF6BB4EE124D69C6E59285FD6276C204A2/10E63046CAFB68AC1A02DC25C0785332BAABB491.PNG",
    description: "not work",
  },
];

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [example, setExample] = useState<IExample>(examples[0]);
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
      {examples.map((ex) => {
        return (
          <div
            className="flex flex-col mb-7 p-2 border-2 rounded-lg"
            key={ex.id}
          >
            <p className="text-center text-xs">{ex.value}</p>
            <p className="text-center text-xs">{ex.description}</p>
            <button
              className="bg-white text-black"
              onClick={() => setExample(ex)}
            >
              set
            </button>
          </div>
        );
      })}
      <input
        className="w-10/12 text-black"
        value={example.value}
        onChange={(e) =>
          setExample((prev) => ({ ...prev, value: e.target.value }))
        }
      />
      <Image width={320} height={320} src={example.value} alt="test image" />
    </main>
  );
}
