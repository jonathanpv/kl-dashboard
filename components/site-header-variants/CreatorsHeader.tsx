import { CreatorsIconDark } from '../icons/CreatorsIcon';
import { Input } from '../ui/input';

export function CreatorsHeader() {
  return (
    <header className="flex h-12 items-center gap-4 self-stretch px-4">
      <div className="flex items-center gap-2">
        <CreatorsIconDark />
        <h1 className="font-russo-one text-2xl text-foreground">CREATORS</h1>
      </div>
      <div className="flex-1" />
      <Input placeholder="Search creators..." className="w-64" />
    </header>
  );
}
