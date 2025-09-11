import { FlaskIconDark } from '../icons/FlaskIcon';
import { Button } from '../ui/button';
import { PlusIconDark } from '../icons/PlusIcon';

export function ExperimentsHeaderMobile() {
  return (
    <header className="flex h-12 items-center gap-2 self-stretch px-4">
      <div className="flex flex-1 items-center gap-2">
        <FlaskIconDark />
        <h1 className="font-russo-one text-lg text-foreground">EXPERIMENTS</h1>
      </div>
      <Button size="icon">
        <PlusIconDark className="h-4 w-4" />
      </Button>
    </header>
  );
}
