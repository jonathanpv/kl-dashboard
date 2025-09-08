import { TrendingDown } from 'lucide-react';
import React from 'react'

export const StatsCreatorCard = () => {
  const borderStyle = {
    background: "var(--stats-card-border)",
  };

  const contentStyle = {
    background: "var(--stats-card-bg)",
  };

  return (
    <div
      className="w-[450px] h-[252px] rounded-[12px] p-px"
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
                Moana John
              </div>
              <div className="flex justify-center items-center gap-2 rounded-full bg-secondary px-4 py-2">
                <div className="text-secondary-foreground text-center font-manrope text-xs font-bold leading-4 tracking-[0.96px] uppercase">
                  PROFILE
                </div>
              </div>
            </div>
            <div className="self-stretch text-muted-foreground font-inter text-sm font-medium leading-4">
              moana_j @mail.com
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border opacity-30" />

        {/* More Info */}
        <div className="flex items-center gap-2.5 self-stretch">
          <div className="flex w-[143.852px] flex-col items-start gap-1">
            <div className="text-foreground font-geist text-lg font-medium leading-6">
              12 sep 2002
            </div>
            <div className="text-muted-foreground font-inter text-sm font-medium leading-4">
              Join date
            </div>
          </div>
          <div className="flex w-[143.852px] flex-col items-start gap-1">
            <div className="text-foreground font-geist text-lg font-medium leading-6">
              42 projects
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

export const StatsNumberCard = () => {
  const borderStyle = {
    background: "var(--stats-card-border)",
  };

  const contentStyle = {
    background: "var(--stats-card-bg)",
  };

  return (
    <div
      className="w-[206px] rounded-[20px] p-px"
      style={borderStyle}
    >
      <div
        className="w-full h-full rounded-[19px] p-4 flex flex-col gap-[10px]"
        style={contentStyle}
      >
        {/* Top Row */}
        <div className="flex justify-between items-center self-stretch">
          <div className="text-foreground font-geist text-[29px] font-black leading-normal tracking-[-0.58px]">
            72K
          </div>
          <div className="flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2">
            <TrendingDown className="!h-4 !w-4 text-background" />
            <div className="text-background text-center font-geist text-[10px] font-black uppercase leading-4 tracking-[0.8px]">
              90%
            </div>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="h-[47px] self-stretch bg-[#FF3C3C]" />

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

