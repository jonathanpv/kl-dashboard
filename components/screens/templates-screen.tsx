'use client';

import { MasonryLayout } from '@/components/ui/masonry-layout';
import { AnimatePresence, motion, LayoutGroup } from 'motion/react';
import { useState, useRef } from 'react';
import { ContentTemplateCardVariant5 } from '@/components/ui/ContentTemplateCards';
import { Heart, ArrowLeft, Download, Share2, ChevronDown } from 'lucide-react';
import { StatsRevenueCard } from '@/components/ui/statsRevenueCard';
import { StatsCreatorCard, StatsNumberCard, StatsDifficultyCard, StatsPaceCard } from "@/components/ui/statsCards";
import { useEffect } from 'react';

interface ItemData {
    id: string;
    title: string;
    category: string;
    height: number;
    viewCount: string;
    hookType: string;
    videoPacing: 'Fast' | 'Medium' | 'Slow';
    content: string;
    type: 'standard' | 'variant5';
    difficulty: 'Easy' | 'Medium' | 'Hard';
    videoSrc: string;
    thumbnailSrc: string;
}

const videoSources = [
    '/vid1.mp4',
    '/vid2.mp4',
    '/vid3.mp4',
    '/vid4.mp4',
    '/vid5.mp4',
    '/vid6.mp4',
    '/vid7.mp4',
    '/vid8.mp4',
    '/vid9.mp4',
    '/vid10.mp4',
    '/vid11.mp4',
];

const items: ItemData[] = Array.from({ length: 15 }).map((_, i) => {
    const height = [300, 400, 350, 450, 500][i % 5];
    const videoSrc = videoSources[i % videoSources.length];
    return {
        id: `item-${i}`,
        title: `Template ${i + 1}`,
        category: `Category ${String.fromCharCode(65 + (i % 5))}`,
        height: height,
        viewCount: `${(Math.random() * 5).toFixed(1)}M`,
        hookType: ['Question', 'Story', 'Bold Statement'][i % 3],
        videoPacing: ['Fast', 'Medium', 'Slow'][i % 3] as 'Fast' | 'Medium' | 'Slow',
        difficulty: ['Easy', 'Medium', 'Hard'][i % 3] as 'Easy' | 'Medium' | 'Hard',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        type: 'standard',
        videoSrc: videoSrc,
        thumbnailSrc: videoSrc.replace('.mp4', '.png'),
    };
});


function SimilarCard({ title, category, viewCount, videoSrc, thumbnailSrc }: {title: string, category: string, viewCount: string, videoSrc: string, thumbnailSrc: string}) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [loadVideo, setLoadVideo] = useState(false);

    const handleMouseEnter = async () => {
        setLoadVideo(true);
        if (videoRef.current) {
            try {
                await videoRef.current.play();
            } catch (_error) {
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
        <div className="bg-background flex flex-col overflow-hidden rounded-xl group cursor-pointer w-full max-w-[375px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="rounded-xl relative w-full aspect-[2/3] overflow-hidden">
                {loadVideo ? (
                    <video
                        ref={videoRef}
                        src={videoSrc}
                        muted
                        loop
                        playsInline
                        autoPlay
                        controls={false}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <img src={thumbnailSrc} className="w-full h-full object-cover" />
                )}
                <div className="absolute bottom-1 right-1 text-xs bg-black/50 text-white px-1 py-0.5 rounded">
                    {viewCount}
                </div>
                <div className="absolute bottom-1 left-1 text-xs bg-black/50 text-white px-1 py-0.5 rounded">
                    00:15
                </div>
            </div>
            <div className="min-h-[40px] bg-background rounded-b-xl px-4 py-2 flex flex-col items-start justify-center">
                <h5 className="text-sm font-bold text-foreground truncate">{title}</h5>
                <p className="text-xs font-medium text-foreground truncate">{category}</p>
            </div>
        </div>
    );
}

function Item({ id, close }: { id: string; close: () => void }) {
    const item = items.find((item) => item.id === id)!;
    const { category, title, content, viewCount, hookType, videoPacing, difficulty, videoSrc, thumbnailSrc } = item;
    const [playVideo, setPlayVideo] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (playVideo && video) {
            video.muted = false;
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(_error => {
                    console.error("Autoplay prevented: ", _error);
                });
            }
        }
    }, [playVideo]);

    const similarItems = items.filter(i => i.id !== id).slice(0, 6);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-background/95 z-40"
                onClick={close}
            />
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-0 lg:pt-12 lg:items-center" onClick={close}>
                <div className="w-full max-w-[646px] lg:max-w-7xl h-auto lg:h-full lg:max-h-[900px]" onClick={(e) => e.stopPropagation()}>
                    <div className="sticky top-0 z-10 flex flex-row bg-background lg:hidden mt-2 mx-2">
                        <button 
                            onClick={close}
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-100 [&_svg]:shrink-0 select-none border border-border-l2 text-fg-primary hover:bg-button-ghost-hover disabled:hover:bg-transparent rounded-full overflow-hidden h-10 w-10 p-2"
                            aria-label="Back"
                        >
                            <ArrowLeft />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8 h-full px-3 lg:px-0">
                        <div className="lg:col-span-3 flex flex-col gap-4 lg:gap-8 h-auto lg:h-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 lg:pr-4">
                            <div className="w-full max-w-[338px] mx-auto lg:mx-0 lg:w-full lg:max-w-none">
                                <div className="relative mx-auto overflow-hidden rounded-2xl w-full aspect-[2/3] lg:aspect-auto lg:overflow-visible lg:rounded-none lg:h-auto">
                                    <motion.div
                                        layoutId={`card-container-${id}`}
                                        className="rounded-2xl flex flex-col gap-6 w-full bg-background lg:bg-card lg:p-6 lg:flex-row"
                                        onLayoutAnimationComplete={() => setPlayVideo(true)}
                                    >
                                        <div className="flex flex-col items-center lg:items-start">
                                            <motion.div
                                                layoutId={`card-image-container-${id}`}
                                                className="relative flex aspect-[2/3] lg:aspect-auto lg:h-[366px] lg:w-[210px] justify-center items-center shrink-0 rounded-[12px] overflow-hidden w-full"
                                            >
                                                {playVideo ? (
                                                    <video
                                                        ref={videoRef}
                                                        src={videoSrc}
                                                        muted={false}
                                                        loop
                                                        playsInline
                                                        controls={false}
                                                        autoPlay
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <img src={thumbnailSrc} className="w-full h-full object-cover" />
                                                )}
                                                <div className="absolute left-2.5 lg:left-[10px] bottom-2 lg:bottom-[8.5px] flex h-[22px] items-center justify-center rounded-[6px] bg-black/40 p-[2px]">
                                                    <span className="text-white text-center font-geist text-[12px] font-normal leading-[1.09] tracking-[-0.026px]">
                                                    00:12
                                                    </span>
                                                </div>
                                                <div className="absolute right-2 lg:right-[8px] bottom-2 lg:bottom-[8.5px] flex h-[22px] items-center justify-center rounded-[6px] bg-black/40 p-[2px] gap-1">
                                                    <div className="w-5 lg:w-[20px] h-5 lg:h-[20px] flex items-center justify-center">
                                                        <Heart className="w-[14px] h-[12.59px] shrink-0 stroke-white" />
                                                    </div>
                                                    <span className="text-white text-center font-geist text-[12px] font-normal leading-[1.09] tracking-[-0.026px]">
                                                    12.5K
                                                    </span>
                                                </div>
                                            </motion.div>
                                            <motion.div
                                                layoutId={`title-container-${id}`}
                                                layout="position"
                                                className="pt-2 flex flex-col items-center lg:items-start"
                                            >
                                                <span className="text-foreground text-center lg:text-left font-geist text-[14px] font-semibold leading-[1.09] tracking-[-0.026px]">
                                                    {title}
                                                </span>
                                                <p className="text-sm text-foreground">{category}</p>
                                            </motion.div>
                                        </div>
                                        <motion.div
                                            className="hidden lg:flex text-zinc-300 flex-col"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1, transition: { delay: 0.3 } }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <h3 className="text-xl font-bold text-foreground mb-4">Details</h3>
                                            <p className="text-foreground">{content}</p>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="flex justify-between w-full max-w-[338px] mx-auto lg:hidden">
                                <div className="flex gap-2">
                                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-100 [&_svg]:shrink-0 select-none border border-border-l2 text-fg-primary hover:bg-button-ghost-hover disabled:hover:bg-transparent rounded-full overflow-hidden h-10 w-10 p-2">
                                        <Heart />
                                    </button>
                                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-100 [&_svg]:shrink-0 select-none border border-border-l2 text-fg-primary hover:bg-button-ghost-hover disabled:hover:bg-transparent rounded-full overflow-hidden h-10 w-10 p-2">
                                        <Download />
                                    </button>
                                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-100 [&_svg]:shrink-0 select-none border border-border-l2 text-fg-primary hover:bg-button-ghost-hover disabled:hover:bg-transparent rounded-full overflow-hidden h-10 w-10 p-2">
                                        <Share2 />
                                    </button>
                                </div>
                                <div className="flex">
                                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-100 [&_svg]:shrink-0 select-none border text-fg-primary hover:bg-button-ghost-hover disabled:hover:bg-transparent h-10 px-4 py-2 rounded-full rounded-e-none border-r border-border-l2 pe-2">
                                        Use template
                                    </button>
                                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-100 [&_svg]:shrink-0 select-none border border-border-l2 text-fg-primary hover:bg-button-ghost-hover disabled:hover:bg-transparent h-10 px-4 py-2 rounded-full group rounded-s-none border-s-0 ps-2 pe-3">
                                        <ChevronDown />
                                    </button>
                                </div>
                            </div>
                            <motion.div
                                className="border border-border-l2 bg-surface-l1 px-4 py-2 rounded-full lg:hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.3 } }}
                                exit={{ opacity: 0 }}
                            >
                                {content}
                            </motion.div>
                            <motion.div
                                className="flex flex-col gap-4 lg:rounded-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.3 } }}
                                exit={{ opacity: 0 }}
                            >
                                <h4 className="text-xl font-bold text-foreground mb-4">Similar templates</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {similarItems.map(similarItem => (
                                        <SimilarCard key={similarItem.id} {...similarItem} />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start h-auto lg:h-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
                            exit={{ opacity: 0, x: 100 }}
                        >
                            <StatsCreatorCard className="sm:col-span-2" />
                            <StatsNumberCard views={viewCount} />
                            <StatsPaceCard pace={videoPacing} />
                            <StatsDifficultyCard title={difficulty} subtitle="Difficulty" />
                            <StatsDifficultyCard title={hookType} subtitle="Hook Type" />
                            <StatsRevenueCard className="sm:col-span-2" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function TemplatesScreen() {
  const [openId, setOpenId] = useState<string | null>(null);
  const close = () => setOpenId(null);
  const open = (id: string) => setOpenId(id);

  return (
    <LayoutGroup>
        <div className="flex-1 h-full py-6 px-3">
          <div className="mx-auto w-full max-w-[351px] sm:max-w-none">
            <MasonryLayout>
              {items.map((card) => {
                return <ContentTemplateCardVariant5 key={card.id} {...card} open={() => open(card.id)} />;
              })}
            </MasonryLayout>
          </div>
          <AnimatePresence>
            {openId && <Item close={close} id={openId} key={openId} />}
          </AnimatePresence>
        </div>
    </LayoutGroup>
  );
}