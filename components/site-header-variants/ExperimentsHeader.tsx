import { FlaskIconDark } from '../icons/FlaskIcon';
import { Button } from '../ui/button';

export function ExperimentsHeader() {
  return (
    <header className="flex h-12 items-center gap-4 self-stretch px-4">
      <div className="flex flex-1 items-center gap-2">
        <FlaskIconDark />
        <h1 className="font-russo-one text-2xl text-foreground">EXPERIMENTS</h1>
      </div>
      <Button>New Experiment</Button>
    </header>
  );
}
