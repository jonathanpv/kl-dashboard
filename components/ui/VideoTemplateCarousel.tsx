'use client';

import React, { useRef } from 'react';
import { ContentTemplateCardVariant5 } from "@/components/ui/ContentTemplateCards";

const videoTemplates = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
];

export function VideoTemplateCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full">
      <style jsx>{`
        .video-carousel-scroll-container {
          display: flex;
          overflow-x: auto;
          overflow-y: visible;
          gap: 16px;
          padding: 24px;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
          scroll-padding-left: calc(210px * 0.7);
          overscroll-behavior-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .video-carousel-scroll-container::-webkit-scrollbar { 
          display: none; 
        }
        .video-carousel-card {
          flex: 0 0 210px;
          height: 400px;
          scroll-snap-align: start;
        }
      `}</style>

      {/* Section Header */}
      <div className="flex flex-col items-start mb-4">
        <h2 className="text-2xl font-bold tracking-tighter">
          Video Templates
        </h2>
      </div>

      {/* Video Carousel */}
      <div className="relative w-full">
        <div 
          ref={scrollContainerRef}
          className="video-carousel-scroll-container"
          aria-label="Video template carousel" 
          role="region"
        >
          {videoTemplates.map((template) => (
            <div key={template.id} className="video-carousel-card" tabIndex={0}>
                <ContentTemplateCardVariant5 id={template.id} open={() => {}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}