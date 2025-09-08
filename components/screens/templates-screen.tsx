"use client";

import { MasonryLayout } from '@/components/ui/masonry-layout';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const items = Array.from({ length: 15 }).map((_, i) => {
    const height = [300, 400, 350, 450, 500][i % 5];
    return {
        id: `item-${i}`,
        title: `Template ${i + 1}`,
        category: `Category ${String.fromCharCode(65 + (i % 5))}`,
        height: height,
        viewCount: `${(Math.random() * 5).toFixed(1)}M`,
        hookType: ['Question', 'Story', 'Bold Statement'][i % 3],
        videoPacing: ['Fast', 'Medium', 'Slow'][i % 3],
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    };
});

interface CardProps {
    id: string;
    title: string;
    category: string;
    height: number;
    open: () => void;
}

function Card({ id, title, category, height, open }: CardProps) {
    return (
        <div onClick={open} className="cursor-pointer">
            <motion.div
                className="bg-zinc-800 rounded-lg flex flex-col overflow-hidden"
                layoutId={`card-container-${id}`}
            >
                <motion.div
                    className="bg-red-500"
                    style={{ height: height - 70 }} // 70 for title container
                    layoutId={`card-image-container-${id}`}
                />
                <motion.div
                    className="p-4 bg-zinc-800"
                    layoutId={`title-container-${id}`}
                    layout="position"
                >
                    <p className="text-sm text-zinc-400">{category}</p>
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                </motion.div>
            </motion.div>
        </div>
    );
}

function Item({ id, close }: { id: string; close: () => void }) {
    const item = items.find((item) => item.id === id)!;
    const { category, title, content, viewCount, hookType, videoPacing } = item;

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/80 z-40"
                onClick={close}
            />
            <div className="fixed inset-0 z-50 p-8 flex items-center justify-center" onClick={close}>
                <div className="w-full max-w-6xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
                    <div className="grid grid-cols-5 gap-8 h-full">
                        <div className="col-span-3 h-full">
                            <motion.div
                                className="bg-zinc-800 rounded-lg flex flex-col overflow-hidden h-full"
                                layoutId={`card-container-${id}`}
                            >
                                <motion.div
                                    className="bg-red-500 flex-1"
                                    layoutId={`card-image-container-${id}`}
                                />
                                <motion.div
                                    className="p-4 bg-zinc-800"
                                    layoutId={`title-container-${id}`}
                                    layout="position"
                                >
                                    <p className="text-sm text-zinc-400">{category}</p>
                                    <h3 className="text-lg font-bold text-white">{title}</h3>
                                </motion.div>
                                <motion.div
                                    className="p-4 text-zinc-300"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { delay: 0.2 } }}
                                    exit={{ opacity: 0 }}
                                >
                                    {content}
                                </motion.div>
                            </motion.div>
                        </div>
                        <motion.div
                            className="col-span-2 bg-zinc-900/80 rounded-lg p-6 flex flex-col gap-4"
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
        {items.map((card) => (
          <Card key={card.id} {...card} open={() => open(card.id)} />
        ))}
      </MasonryLayout>
      <AnimatePresence>
        {openId && <Item close={close} id={openId} key="item" />}
      </AnimatePresence>
    </div>
  );
}