"use client";

import { Flex, Scroller, SmartImage, SmartLink } from "@/once-ui/components";
import { useEffect, useState, useRef } from "react";

interface Image {
  src: string;
  alt: string;
}

interface ClickableCarouselProps extends React.ComponentProps<typeof Flex> {
  images: Image[];
  href: string;
  indicator?: "line" | "thumbnail";
  aspectRatio?: string;
  sizes?: string;
}

const ClickableCarousel: React.FC<ClickableCarouselProps> = ({
  images = [],
  href,
  indicator = "line",
  aspectRatio = "16 / 9",
  sizes,
  ...rest
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const nextImageRef = useRef<HTMLImageElement | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const preloadNextImage = (nextIndex: number) => {
    if (nextIndex >= 0 && nextIndex < images.length) {
      nextImageRef.current = new Image();
      nextImageRef.current.src = images[nextIndex].src;
    }
  };

  const handleControlClick = (nextIndex: number, event?: React.MouseEvent) => {
    // Prevenir navegación cuando se hace clic en controles
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    if (nextIndex !== activeIndex && !transitionTimeoutRef.current && images.length > 1) {
      preloadNextImage(nextIndex);
      setActiveIndex(nextIndex);
    }
  };

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  if (images.length === 0) {
    return null;
  }

  return (
    <Flex fillWidth gap="12" direction="column" {...rest}>
      <SmartLink 
        href={href}
        style={{ 
          textDecoration: 'none', 
          display: 'block',
          width: '100%',
        }}
      >
        <Flex
          fillWidth
          aspectRatio={aspectRatio}
          style={{ cursor: 'pointer' }}
        >
          <SmartImage
            sizes={sizes}
            priority
            radius="l"
            border="neutral-alpha-weak"
            alt={images[activeIndex]?.alt}
            aspectRatio={aspectRatio}
            src={images[activeIndex]?.src}
            style={{
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.01)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </Flex>
      </SmartLink>
      {images.length > 1 && (
        <>
          {indicator === "line" ? (
            <Flex gap="4" paddingX="s" fillWidth horizontal="center">
              {images.map((_, index) => (
                <Flex
                  key={index}
                  onClick={(e) => handleControlClick(index, e)}
                  style={{
                    background:
                      activeIndex === index
                        ? "var(--neutral-on-background-strong)"
                        : "var(--neutral-alpha-medium)",
                    transition: "background 0.3s ease",
                  }}
                  cursor="interactive"
                  fillWidth
                  radius="full"
                  height="2"
                ></Flex>
              ))}
            </Flex>
          ) : (
            <Scroller 
              fillWidth 
              gap="4" 
              onItemClick={handleControlClick}
            >
              {images.map((image, index) => (
                <Flex
                  key={index}
                  onClick={(e) => handleControlClick(index, e)}
                  style={{
                    border: activeIndex === index ? "2px solid var(--brand-solid-strong)" : "none",
                    borderRadius: "var(--radius-m-nest-4)",
                    transition: "border 0.3s ease",
                  }}
                  cursor="interactive"
                  padding="4"
                  width="80"
                  height="80"
                >
                  <SmartImage
                    alt={image.alt}
                    aspectRatio="1 / 1"
                    sizes="120px"
                    src={image.src}
                    cursor="interactive"
                    radius="m"
                    transition="macro-medium"
                  />
                </Flex>
              ))}
            </Scroller>
          )}
        </>
      )}
    </Flex>
  );
};

ClickableCarousel.displayName = "ClickableCarousel";
export { ClickableCarousel };
