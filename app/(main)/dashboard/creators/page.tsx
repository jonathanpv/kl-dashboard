import { StatsRevenueCard } from "@/components/ui/statsRevenueCard";
import { StatsCreatorCard, StatsNumberCard, StatsDifficultyCard, StatsPaceCard } from "@/components/ui/statsCards";
import { VideoTemplateCarousel } from "@/components/ui/VideoTemplateCarousel";

export default function CreatorsPage() {
  return (
    <div className="grid w-full grid-cols-1 lg:grid-cols-5 gap-6 py-2">
      {/* Left Side */}
      <div className="lg:col-span-3">
        <div className="sticky top-6 flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight">Creators Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            An overview of your creator statistics and performance.
          </p>
          <VideoTemplateCarousel/>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
        <StatsNumberCard />
        <StatsDifficultyCard />
        <StatsPaceCard />
        <StatsCreatorCard className="sm:col-span-2" />
        <StatsRevenueCard className="sm:col-span-2" />
      </div>
    </div>
  );
}