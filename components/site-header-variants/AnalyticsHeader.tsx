import { AnalyticsIconDark } from '../icons/AnalyticsIcon';
import { Button } from '../ui/button';

export function AnalyticsHeader() {
  return (
    <header className="flex h-12 items-center gap-4 self-stretch px-4">
      <div className="flex flex-1 items-center gap-2">
        <AnalyticsIconDark />
        <h1 className="font-russo-one text-2xl text-foreground">ANALYTICS</h1>
      </div>
      <Button variant="outline">Export Data</Button>
    </header>
  );
}
