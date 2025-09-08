import { SmileIconTongueDark } from "./icons/SmileIconTongueDark";
import { PlusIconDark } from "./icons/PlusIcon";
export function SiteHeader() {
  return (
    <header className="flex h-12 items-center gap-2 self-stretch px-4">
      <div className="flex flex-1 items-center gap-2">
        <SmileIconTongueDark width={24} height={24}/>
        <h1 className="font-russo-one w-[302px] text-center text-2xl font-normal leading-[18px] tracking-[-0.026px] text-foreground">
          VIRAL FORMAT LIBRARY
        </h1>
      </div>
      <button className="radial-shine-background flex items-center justify-center gap-2.5 rounded-[27px] border border-black px-5 py-[14px]">
        <PlusIconDark className="text-black"/>
        <span className="font-geist text-center text-[15px] font-semibold leading-[1.09] tracking-[0.15px] text-black">
          Add New Viral Format
        </span>
      </button>
    </header>
  );
}
