import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const ContentTemplateCardVariant5 = ({ open, id, videoSrc, title, thumbnailSrc }: { open: () => void; id: string, videoSrc: string, title: string, thumbnailSrc: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);

  const handleMouseEnter = async () => {
    setLoadVideo(true);
    if (videoRef.current) {
      try {
        await videoRef.current.play();
      } catch (error) {
        console.log("play interrupted");
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div onClick={open} className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.div
        className="flex w-[210px] h-[400px] flex-col items-center gap-[6px] aspect-[21/40] rounded-[13px] bg-background"
        layoutId={`card-container-${id}`}
      >
        {/* MainContent */}
        <motion.div
          className="relative flex h-[366px] flex-col justify-center items-center shrink-0 self-stretch rounded-[12px] bg-background overflow-hidden"
          layoutId={`card-image-container-${id}`}
        >
          {loadVideo ? (
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              loop
              playsInline
              autoPlay
              className="w-full h-full object-cover"
            />
          ) : (
            <img src={thumbnailSrc} className="w-full h-full object-cover" />
          )}
          {/* Time */}
          <div className="absolute left-[10px] bottom-[8.5px] flex h-[22px] items-center justify-center rounded-[6px] bg-black/40 p-[2px]">
            <span className="text-white text-center font-geist text-[12px] font-normal leading-[1.09] tracking-[-0.026px]">
              00:12
            </span>
          </div>
          {/* ViewCounter */}
          <div className="absolute right-[8px] bottom-[8.5px] flex h-[22px] items-center justify-center rounded-[6px] bg-black/40 p-[2px] gap-1">
            {/* 20-heart */}
            <div className="w-[20px] h-[20px] flex items-center justify-center">
              <Heart className="w-[14px] h-[12.59px] shrink-0 stroke-white" />
            </div>
            <span className="text-white text-center font-geist text-[12px] font-normal leading-[1.09] tracking-[-0.026px]">
              12.5K
            </span>
          </div>
        </motion.div>
        {/* TitleVideoContainer */}
        <motion.div
          className="flex flex-col justify-center items-center self-stretch px-[2px] py-[1px]"
          layoutId={`title-container-${id}`}
          layout="position"
        >
          <span className="text-foreground text-center font-geist text-[14px] font-semibold leading-[1.09] tracking-[-0.026px]">
            {title}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};
