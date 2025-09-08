import { StatsRevenueCard } from "@/components/ui/statsRevenueCard";
import { StatsCreatorCard, StatsNumberCard } from "@/components/ui/statsCards";

export default function CreatorsPage() {
  return (
    <div className="flex w-full h-full  flex-col gap-3">
      <h1 className="text-2xl font-bold">Creators Page</h1>
      <p>This is a placeholder for the Creators page.</p>
      <StatsCreatorCard/>
      <StatsRevenueCard/>
      <StatsNumberCard/>
    </div>
  );
}
