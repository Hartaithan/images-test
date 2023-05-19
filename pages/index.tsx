/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

interface IExample {
  id?: number;
  value: string;
}

const examples: IExample[] = [
  {
    id: 1,
    value:
      "https://image.api.playstation.com/trophy/np/NPWR02322_00_00273877B6E6490ED245096C071F4DD7514629BDB1/6496A452C06F1E1DF7C7A8C3ED50391DE82C604C.PNG",
  },
  {
    id: 2,
    value:
      "https://image.api.playstation.com/trophy/np/NPWR07834_00_0002D204CF6BB4EE124D69C6E59285FD6276C204A2/10E63046CAFB68AC1A02DC25C0785332BAABB491.PNG",
  },
  {
    id: 3,
    value:
      "https://image.api.playstation.com/trophy/np/NPWR17767_00_0057C86A539632CCD552D7FA47055BD35A0F982F2A/8550C4F380A9E045969601769AC11A26FD624C56.PNG",
  },
  {
    id: 4,
    value:
      "https://image.api.playstation.com/trophy/np/NPWR03572_00_0094EDFB1FF4F36F96AF5887255AD4C94B98253D18/3A1FA97C9A14F971DC3B5A7C10F4E0149D44529F.PNG",
  },
  {
    id: 5,
    value:
      "https://image.api.playstation.com/trophy/np/NPWR13872_00_00BE2C548A4C58B53BB438538BF2552A5EC3CB2454/9411A02B801534FF93B46D29DF61282875512079.PNG",
  },
  {
    id: 6,
    value:
      "https://image.api.playstation.com/trophy/np/NPWR00350_00_003E7951836589EE9C1263078439CA7C0502044199/EDED87AC75C3379249C3C86EB475578D832F5942.PNG",
  },
  {
    id: 7,
    value:
      "https://psnobj.prod.dl.playstation.net/psnobj/NPWR20188_00/035a02db-e64f-4572-8653-4a3db37fe2f6.png",
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
      <div className="flex flex-wrap gap-2">
        {examples.map((ex) => {
          return (
            <div
              className="flex flex-col mb-7 p-2 border-2 rounded-lg"
              key={ex.id}
            >
              <img
                className="mb-2 aspect-video object-contain"
                width={100}
                src={ex.value}
                alt={"unoptimized image " + ex.id}
              />
              <button
                className="bg-white text-black"
                onClick={() => setExample(ex)}
              >
                set
              </button>
            </div>
          );
        })}
      </div>
      <input
        className="w-10/12 text-black"
        value={example.value}
        onChange={(e) =>
          setExample((prev) => ({ ...prev, value: e.target.value }))
        }
      />
      <div
        className="flex justify-center align-center mt-5"
        style={{
          width: 200,
          height: 200,
        }}
      >
        <Image
          className="w-auto object-contain"
          width={200}
          height={200}
          src={example.value}
          alt="test image"
        />
      </div>
    </main>
  );
}
