'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type PropsWithChildren, useRef } from 'react';

import cx from '@/utils/cx';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Viewport line the progress tip follows; nodes light up as they cross it.
const SCROLL_MARK = '60%';

interface ExpTimelineProps extends PropsWithChildren {
  className?: string;
}

// Draws a progress line down the experience rail as the page scrolls
// and activates each role once the line reaches its logo.
export const ExpTimeline = ({ children, className }: ExpTimelineProps) => {
  const listRef = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      const list = listRef.current;
      const rail = list?.querySelector<HTMLElement>('[data-exp-rail]');
      const progress = list?.querySelector<HTMLElement>('[data-exp-progress]');
      const nodes = gsap.utils.toArray<HTMLElement>('[data-exp-node]', list);
      if (!list || !rail || !progress || !nodes.length) return;

      // The rail runs between the first and last logo centers, which
      // depend on text wrapping, so it is measured on every refresh.
      const placeRail = () => {
        const listBox = list.getBoundingClientRect();
        const center = (el: HTMLElement) => {
          const box = el.getBoundingClientRect();
          return {
            x: box.left + box.width / 2 - listBox.left,
            y: box.top + box.height / 2 - listBox.top,
          };
        };
        const first = center(nodes[0]);
        const last = center(nodes[nodes.length - 1]);
        gsap.set(rail, {
          left: first.x,
          top: first.y,
          height: Math.max(last.y - first.y, 0),
        });
      };
      placeRail();
      ScrollTrigger.addEventListener('refreshInit', placeRail);

      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          progress,
          { height: '0%' },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: rail,
              start: `top ${SCROLL_MARK}`,
              end: `bottom ${SCROLL_MARK}`,
              scrub: 0.5,
            },
          },
        );

        nodes.forEach((node) => {
          const item = node.closest<HTMLElement>('[data-exp-item]');
          const glow = item?.querySelector('[data-exp-glow]');
          const content = item?.querySelector('[data-exp-content]');
          // Fade the logo, not the node, so its backing keeps hiding the rail.
          const logo = node.lastElementChild;
          gsap
            .timeline({
              scrollTrigger: {
                trigger: node,
                start: `center ${SCROLL_MARK}`,
                toggleActions: 'play none none reverse',
              },
            })
            .from(node, { scale: 0.8, duration: 0.45, ease: 'back.out(2.2)' })
            .from(logo || [], { opacity: 0.45, duration: 0.45 }, 0)
            .from(glow || [], { opacity: 0, scale: 0.6, duration: 0.45 }, 0)
            .from(
              content || [],
              { opacity: 0.35, x: 12, duration: 0.5, ease: 'power3.out' },
              0,
            );
        });
      });
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(progress, { height: '100%' });
      });

      return () => {
        ScrollTrigger.removeEventListener('refreshInit', placeRail);
      };
    },
    { scope: listRef },
  );

  return (
    <ol ref={listRef} className={cx('relative', className)}>
      <span
        data-exp-rail
        aria-hidden={'true'}
        className={'absolute w-0.5 -translate-x-1/2 rounded-full bg-divider'}
      >
        <span
          data-exp-progress
          className={cx(
            'absolute inset-x-0 top-0 rounded-full',
            'bg-gradient-to-b from-transparent to-accent',
          )}
        >
          <span
            className={cx(
              'absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rounded-full',
              'bg-accent shadow-[0_0_12px_3px_var(--color-accent)]',
            )}
          />
        </span>
      </span>
      {children}
    </ol>
  );
};
