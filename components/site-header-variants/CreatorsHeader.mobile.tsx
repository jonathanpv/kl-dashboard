import { CreatorsIconDark } from '../icons/CreatorsIcon';

export function CreatorsHeaderMobile() {
  return (
    <header className="flex h-12 items-center gap-2 self-stretch px-4">
      <div className="flex items-center gap-2">
        <CreatorsIconDark />
        <h1 className="font-russo-one text-lg text-foreground">CREATORS</h1>
      </div>
      <div className="flex-1" />
    </header>
  );
}
