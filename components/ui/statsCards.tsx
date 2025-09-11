"use client"

import { GaugeCircle, TrendingDown } from 'lucide-react';
import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import PaceArc from '../icons/PaceArc';
import { cn } from '@/lib/utils';


export const StatsCreatorCard = ({ className, name = "Moana John", email = "moana_j@mail.com", joinDate = "12 sep 2002", projectsReviewed = "42 projects" }: { className?: string, name?: string, email?: string, joinDate?: string, projectsReviewed?: string }) => {
  const borderStyle = {
    background: "var(--stats-card-border)",
  };

  const contentStyle = {
    background: "var(--stats-card-bg)",
  };

  return (
    <div
      className={cn("w-[330px] md:w-[450px] h-[252px] rounded-[12px] p-px", className)}
      style={borderStyle}
    >
      <div
        className="w-full h-full rounded-[11px] p-5 flex flex-col gap-2.5"
        style={contentStyle}
      >
        <div className="flex items-start gap-2.5 self-stretch">
          {/* Image Placeholder */}
          <div className="w-[90px] h-[90px] rounded-[20px] border border-border bg-background" />

          {/* Name Info */}
          <div className="flex flex-col items-start gap-[9px] flex-1">
            <div className="flex items-center gap-[9px] self-stretch">
              <div className="flex-1 text-foreground font-geist text-2xl font-semibold tracking-[-0.48px]">
                {name}
              </div>
              <div className="flex justify-center items-center gap-2 rounded-full bg-secondary px-4 py-2">
                <div className="text-secondary-foreground text-center font-manrope text-xs font-bold leading-4 tracking-[0.96px] uppercase">
                  PROFILE
                </div>
              </div>
            </div>
            <div className="self-stretch text-muted-foreground font-inter text-sm font-medium leading-4">
              {email}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border opacity-30" />

        {/* More Info */}
        <div className="flex items-center gap-2.5 self-stretch">
          <div className="flex w-[143.852px] flex-col items-start gap-1">
            <div className="text-foreground font-geist text-lg font-medium leading-6">
              {joinDate}
            </div>
            <div className="text-muted-foreground font-inter text-sm font-medium leading-4">
              Join date
            </div>
          </div>
          <div className="flex w-[143.852px] flex-col items-start gap-1">
            <div className="text-foreground font-geist text-lg font-medium leading-6">
              {projectsReviewed}
            </div>
            <div className="text-muted-foreground font-inter text-sm font-medium leading-4">
              Reviewed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const StatsNumberCard = ({ className, views = "72K", change = "90%" }: { className?: string, views?: string, change?: string }) => {
  const borderStyle = {
    background: "var(--stats-card-border)",
  };

  const contentStyle = {
    background: "var(--stats-card-bg)",
  };

  const chartData = React.useMemo(() => {
    const data = [];
    const today = new Date();
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      data.push({
        date: date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        value: Math.floor(Math.random() * 2000) + 500,
      });
    }
    return data;
  }, []);

  const chartConfig = {
    value: {
      label: "Views",
      color: "var(--color-chart-5)",
    },
  } satisfies ChartConfig;

  return (
    <div
      className={cn("w-[206px] rounded-[20px] p-px", className)}
      style={borderStyle}
    >
      <div
        className="w-full h-full rounded-[19px] p-4 flex flex-col gap-[10px]"
        style={contentStyle}
      >
        {/* Top Row */}
        <div className="flex justify-between items-center self-stretch">
          <div className="text-foreground font-geist text-[29px] font-black leading-normal tracking-[-0.58px]">
            {views}
          </div>
          <div className="flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2">
            <TrendingDown className="!h-4 !w-4 text-background" />
            <div className="text-background text-center font-geist text-[10px] font-black uppercase leading-4 tracking-[0.8px]">
              {change}
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-[47px] self-stretch">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <ResponsiveContainer width="100%" height="99%">
              <AreaChart
                data={chartData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-background border rounded-lg p-2 shadow-lg text-sm">
                          <div className="font-bold">
                            {payload[0].payload.date}
                          </div>
                          <div>Views: {payload[0].value}</div>
                        </div>
                      );
                    }
                    return null;
                  }}
                  cursor={true}
                />
                <defs>
                  <linearGradient
                    id="fillGradientStatsCard"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="var(--color-value)"
                      stopOpacity={0.4}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-value)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <Area
                  type="natural"
                  dataKey="value"
                  stroke="var(--color-value)"
                  strokeWidth={2}
                  fill="url(#fillGradientStatsCard)"
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        {/* Title section */}
        <div className="flex flex-col items-start self-stretch gap-1">
          <div className="text-foreground/90 font-geist text-lg font-medium leading-6">
            Views
          </div>
          <div className="text-muted-foreground font-inter text-sm font-normal leading-4">
            Last 30 Days
          </div>
        </div>
      </div>
    </div>
  );
};


export const StatsDifficultyCard = ({
  title = "Easy",
  subtitle = "Difficulty",
  className,
}: {
  title?: string;
  subtitle?: string;
  className?: string;
}) => {
  const borderStyle = {
    background: "var(--stats-card-border)",
  };

  const contentStyle = {
    background: "var(--stats-card-bg)",
  };

  return (
    <div
      className={cn("w-[206px] rounded-[20px] p-px", className)}
      style={borderStyle}
    >
      <div
        className="w-full h-full rounded-[19px] p-4 flex  items-start gap-[10px]"
        style={contentStyle}
      >
        {/* Icon */}
        <GaugeCircle className="h-11 w-11 bg-foreground text-background rounded-md p-2 stroke-[2.9]" />

        {/* Text content */}
        <div className="flex flex-col justify-center items-start gap-[10px]">
          <div className="text-foreground font-geist text-2xl font-semibold tracking-[-0.48px]">
            {title}
          </div>
          <div className="text-muted-foreground font-inter text-sm font-normal leading-4">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export const StatsPaceCard = ({ className, pace = 'Fast' }: { className?: string, pace?: 'Fast' | 'Medium' | 'Slow' }) => {
  const borderStyle = {
    background: "var(--stats-card-border)",
  };

  const contentStyle = {
    background: "var(--stats-card-bg)",
  };

  const paceConfig = {
      Fast: { rating: 3, description: "Very quick hooks.", color: "text-chart-3" },
      Medium: { rating: 2, description: "Moderately paced.", color: "text-chart-2" },
      Slow: { rating: 1, description: "Slower, more deliberate.", color: "text-chart-1" },
  };
  const { rating, description, color } = paceConfig[pace];

  return (
    <div
      className={cn("w-[206px] rounded-[20px] p-px", className)}
      style={borderStyle}
    >
      <div
        className="w-full h-full rounded-[19px] flex flex-col justify-center items-center gap-[10px] p-4"
        style={contentStyle}
      >
        <div className="relative flex flex-col justify-center items-center w-[160px] h-[100px]">
          <div className=" w-full h-full">
            <PaceArc
              rating={rating}
              className={color}
              transition={{ type: "spring", stiffness: 50, damping: 10 }}
            />
          </div>
          <div className={`absolute bottom-[0.338px] ${color} text-center font-geist text-[30px] font-black tracking-[-0.6px]`}>
            {pace}
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-1 self-stretch">
          <div className="self-stretch text-foreground/90 font-geist text-lg font-medium leading-6">
            Video Pacing
          </div>
          <div className="self-stretch text-muted-foreground font-inter text-sm font-normal leading-4">
            {pace}: {description}
          </div>
        </div>
      </div>
    </div>
  );
};