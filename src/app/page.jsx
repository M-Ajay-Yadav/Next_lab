// import Image from "next/image";

import LearnClientComponent from "@/components/LearnClientComponent";
import LearnCSSModule from "@/components/LearnCSSModule";
import LearnDataFetching from "@/components/LearnDataFetching";
import LearnLink from "@/components/LearnLink";
import LearnServerComponent from "@/components/LearnServerComponent";
import LearnUseGlobalCss from "@/components/LearnUseGlobalCss";
import LearnUseImage from "@/components/LearnUseImage";
import LearnUseRouter from "@/components/LearnUseRouter";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <h1>Hello Nextjs </h1> */}
        {/* <LearnLink /> */}
        {/* <LearnUseRouter /> */}
        {/* <LearnServerComponent /> */}
        {/* <LearnClientComponent /> */}
        {/* <LearnUseGlobalCss /> */}
        {/* <LearnCSSModule /> */}
        {/* <LearnUseImage /> */}
        <LearnDataFetching />
      </main>
    </div>
  );
}
