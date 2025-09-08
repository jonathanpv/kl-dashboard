'use client';

import { MasonryLayout } from '@/components/ui/masonry-layout';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { ContentTemplateCardVariant5 } from '@/components/ui/ContentTemplateCards';
import { Heart } from 'lucide-react';

interface ItemData {
    id: string;
    title: string;
    category: string;
    height: number;
    viewCount: string;
    hookType: string;
    videoPacing: string;
    content: string;
    type: 'standard' | 'variant5';
}

const items: ItemData[] = Array.from({ length: 15 }).map((_, i) => {
    const height = [300, 400, 350, 450, 500][i % 5];
    return {
        id: `item-${i}`,
        title: `Template ${i + 1}`,
        category: `Category ${String.fromCharCode(65 + (i % 5))}`,
        height: height,
        viewCount: `${(Math.random() * 5).toFixed(1)}M`,
        hookType: ['Question', 'Story', 'Bold Statement'][i % 3],
        videoPacing: ['Fast', 'Medium', 'Slow'][i % 3],
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        type: 'standard'
    };
});

interface CardProps {
    id: string;
    title: string;
    category: string;
    height: number;
    open: () => void;
    viewCount: string;
}


function SimilarCard({ title, category, viewCount }: {title: string, category: string, viewCount: string}) {
    return (
        <div className=" bg-background flex flex-col overflow-flip rounded-xl group cursor-pointer w-[206px] h-[400px]">
            <div className="rounded-xl relative h-[360px] w-[206px]">
                <div className="rounded-xl bg-blue-500 h-full w-full"></div> {/* Placeholder for image */}
                <div className="absolute bottom-1 right-1 text-xs bg-black/50 text-white px-1 py-0.5 rounded">
                    {viewCount}
                </div>
                <div className="absolute bottom-1 left-1 text-xs bg-black/50 text-white px-1 py-0.5 rounded">
                    00:15
                </div>
            </div>
            <div className="h-[40px] bg-background rounded-b-xl pl-6 flex flex-col items-start justify-center">
                <h5 className="text-sm font-bold text-foreground truncate">{title}</h5>
                <p className="text-xs font-medium text-foreground truncate">{category}</p>
            </div>
        </div>
    );
}

function Item({ id, close }: { id: string; close: () => void }) {
    const item = items.find((item) => item.id === id)!;
    const { category, title, content, viewCount, hookType, videoPacing } = item;

    const similarItems = items.filter(i => i.id !== id).slice(0, 6);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed  inset-0 bg-background/80 z-40"
                onClick={close}
            />
            <div className="fixed inset-0 z-50 px-8 flex items-center justify-center" onClick={close}>
                <div className="w-full max-w-6xl h-full max-h-[900px]  " onClick={(e) => e.stopPropagation()}>
                    <div className="grid grid-cols-5 gap-8 h-full">
                        <div className="col-span-3 h-full overflow-y-auto flex flex-col gap-8 pr-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800">
                            {/* The expanding container */}
                            <motion.div
                                    layoutId={`card-container-${id}`}
                                    className="bg-card rounded-2xl p-6 flex gap-6 w-full"
                                >
                                <div className="flex flex-col">
                                    {/* The "maincontent" that keeps its size */}
                                    <motion.div
                                        layoutId={`card-image-container-${id}`}
                                        className="relative flex h-[366px] w-[210px] flex-col justify-center items-center shrink-0 rounded-[12px] bg-[#B5BEFF]"
                                    >
                                        {/* Replicating content from the card for smooth transition */}
                                        <div className="absolute left-[10px] bottom-[8.5px] flex h-[22px] items-center justify-center rounded-[6px] bg-black/40 p-[2px]">
                                            <span className="text-white text-center font-geist text-[12px] font-normal leading-[1.09] tracking-[-0.026px]">
                                            00:12
                                            </span>
                                        </div>
                                        <div className="absolute right-[8px] bottom-[8.5px] flex h-[22px] items-center justify-center rounded-[6px] bg-black/40 p-[2px] gap-1">
                                            <div className="w-[20px] h-[20px] flex items-center justify-center">
                                                <Heart className="w-[14px] h-[12.59px] shrink-0 stroke-white" />
                                            </div>
                                            <span className="text-white text-center font-geist text-[12px] font-normal leading-[1.09] tracking-[-0.026px]">
                                            12.5K
                                            </span>
                                        </div>
                                    </motion.div>
                                    {/* The title part */}
                                    <motion.div
                                        layoutId={`title-container-${id}`}
                                        layout="position"
                                        className="pt-2"
                                    >
                                        <span className="text-foreground text-center font-geist text-[14px] font-semibold leading-[1.09] tracking-[-0.026px]">
                                            {title}
                                        </span>
                                        <p className="text-sm text-foreground">{category}</p>
                                    </motion.div>
                                </div>

                                {/* Additional content shown on expand */}
                                <motion.div
                                    className="text-zinc-300"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { delay: 0.3 } }}
                                    exit={{ opacity: 0 }}
                                >
                                    <h3 className="text-xl font-bold text-foreground mb-4">Details</h3>
                                    <p className="text-foreground">{content}</p>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="rounded-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.3 } }}
                                exit={{ opacity: 0 }}
                            >
                                <h4 className="text-xl font-bold text-foreground mb-4">Similar templates</h4>
                                <div className="grid grid-cols-3 gap-4">
                                    {similarItems.map(similarItem => (
                                        <SimilarCard key={similarItem.id} {...similarItem} />
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            className="col-span-2 bg-zinc-900/80 rounded-lg p-6 flex flex-col gap-4 h-fit"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
                            exit={{ opacity: 0, x: 100 }}
                        >
                            <h4 className="text-xl font-bold text-white">More Info</h4>
                            <div className="bg-zinc-800 p-4 rounded-lg">
                                <p className="text-sm text-zinc-400">View Count</p>
                                <p className="text-2xl font-bold text-white">{viewCount}</p>
                            </div>
                            <div className="bg-zinc-800 p-4 rounded-lg">
                                <p className="text-sm text-zinc-400">Hook Type</p>
                                <p className="text-2xl font-bold text-white">{hookType}</p>
                            </div>
                            <div className="bg-zinc-800 p-4 rounded-lg">
                                <p className="text-sm text-zinc-400">Video Pacing</p>
                                <p className="text-2xl font-bold text-white">{videoPacing}</p>
                            </div>
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
    <div className="flex-1 h-full p-8">
      <MasonryLayout>
        {items.map((card) => {
          return <ContentTemplateCardVariant5 key={card.id} {...card} open={() => open(card.id)} />;
        })}
      </MasonryLayout>
      <AnimatePresence>
        {openId && <Item close={close} id={openId} key="item" />}
      </AnimatePresence>
    </div>
  );
}