import { SmileIconTongueDark } from "../icons/SmileIconTongueDark";
import { PlusIconDark } from "../icons/PlusIcon";

export function LibraryHeaderMobile() {
  return (
    <header className="flex h-12 items-center gap-2 self-stretch px-4">
      <div className="flex flex-1 items-center gap-2">
        <SmileIconTongueDark width={24} height={24}/>
        <h1 className="font-russo-one text-lg font-normal text-foreground">
          VIRAL FORMATS
        </h1>
      </div>
      <button className="radial-shine-background flex items-center justify-center rounded-full border border-black p-2">
        <PlusIconDark className="text-black h-5 w-5"/>
      </button>
    </header>
  );
}
