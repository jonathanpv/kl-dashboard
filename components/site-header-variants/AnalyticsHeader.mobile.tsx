import { AnalyticsIconDark } from '../icons/AnalyticsIcon';
import { Button } from '../ui/button';

export function AnalyticsHeaderMobile() {
  return (
    <header className="flex h-12 items-center gap-2 self-stretch px-4">
      <div className="flex flex-1 items-center gap-2">
        <AnalyticsIconDark />
        <h1 className="font-russo-one text-lg text-foreground">ANALYTICS</h1>
      </div>
      <Button variant="outline" size="sm">Export</Button>
    </header>
  );
}
