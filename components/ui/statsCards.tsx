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
  return (
    <div>statsCards</div>
  )
}

