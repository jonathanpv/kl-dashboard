import { ClippedAreaChart } from "@/components/ui/clipped-area-chart";
import { StatsCreatorCard } from "@/components/ui/statsCards";

export default function CreatorsPage() {
  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold">Creators Page</h1>
      <p>This is a placeholder for the Creators page.</p>
      <StatsCreatorCard/>
      <ClippedAreaChart/>
    </div>
  );
}
