"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Star } from "lucide-react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

/* -- types ----------------------------------------------------- */

export interface PreviewTab {
  id: string;
  /** Text label shown in the switcher rail. */
  label: string;
  /** Panel shown when this tab is active. All panels should share one size. */
  media: React.ReactNode;
}

export interface HeroRating {
  source: string;
  score: string;
  /** Defaults to a filled star. */
  icon?: React.ReactNode;
}

export interface HeroLogo {
  name: string;
  /** Optional custom mark; falls back to the name as a text wordmark. */
  logo?: React.ReactNode;
}

export interface HeroAvatar {
  initials?: string;
  src?: string;
}

export interface Cta {
  label: string;
  href?: string;
}

export interface PreviewSwitchHeroProps {
  /** Small pill above the title, e.g. `{ tag: "NEW", label: "…" }`. */
  badge?: { tag?: string; label: React.ReactNode };
  title: React.ReactNode;
  description?: React.ReactNode;
  ratings?: HeroRating[];
  /**
   * Show the email-capture field above the CTAs. When `false`, the CTAs render
   * on their own as plain actions (no form/input). Default `true`.
   */
  showEmail?: boolean;
  /** Label above the email field. */
  emailLabel?: React.ReactNode;
  emailPlaceholder?: string;
  /** Called with the email on submit. */
  onSubmit?: (email: string) => void;
  /** Submits the form when no `href`; otherwise renders as a link. */
  primaryCta?: Cta;
  secondaryCta?: Cta;
  avatars?: HeroAvatar[];
  socialProof?: React.ReactNode;
  /** Text tabs that switch the preview. */
  tabs: PreviewTab[];
  /** Logo strip rendered full-width below the split. */
  logos?: HeroLogo[];
  /**
   * Scroll-track height when the hero is pinned (md+ / motion on). Taller =
   * more scroll per tab. Default `"340vh"`.
   */
  scrollLength?: string;
  className?: string;
}

/* -- helpers --------------------------------------------------- */

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

/* -- pieces ---------------------------------------------------- */

/** Soft ambient green glow on a white canvas. Blurred blobs instead of a
 *  mask-image gradient: no hard edges, no banding, scales cleanly at every
 *  viewport width since each blob is sized in vw/vh, not fixed px. */
function AmbientGlow() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[55%] h-[55vh] min-h-[260px] w-[120vw] -translate-x-1/2 rounded-full bg-emerald-100/60 blur-[90px] sm:blur-[110px]" />
      <div className="absolute -right-1/4 top-0 h-[40vh] min-h-[200px] w-[60vw] rounded-full bg-emerald-50/70 blur-[80px] sm:blur-[100px]" />
    </div>
  );
}

function TabRail({
  tabs,
  active,
  onSelect,
}: {
  tabs: PreviewTab[];
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Preview switcher"
      className="flex shrink-0 gap-1.5 overflow-x-auto [scrollbar-width:none] sm:gap-2 md:flex-col md:overflow-visible [&::-webkit-scrollbar]:hidden"
    >
      {tabs.map((t, i) => {
        const isActive = i === active;
        return (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(i)}
            className={cn(
              "whitespace-nowrap rounded-lg px-3 py-2 text-left text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-4 sm:py-2.5 sm:text-sm",
              isActive
                ? "bg-[#15803d]/10 font-semibold text-[#15803d] shadow-sm ring-1 ring-[#15803d]/20"
                : "font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground",
            )}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

function PreviewStack({
  tabs,
  active,
}: {
  tabs: PreviewTab[];
  active: number;
}) {
  return (
    <div className="relative w-full min-w-0 md:flex-1">
      {tabs.map((t, i) => {
        const isActive = i === active;
        return (
          <div
            key={t.id}
            role="tabpanel"
            aria-hidden={!isActive}
            className={cn(
              "transition-opacity duration-500",
              isActive
                ? "relative opacity-100"
                : "pointer-events-none absolute inset-0 opacity-0",
            )}
          >
            {t.media}
          </div>
        );
      })}
    </div>
  );
}

function CtaButton({
  cta,
  variant,
  type,
}: {
  cta: Cta;
  variant: "primary" | "secondary";
  type?: "submit" | "button";
}) {
  const className = cn(
    "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer sm:px-6",
    variant === "primary"
      ? "bg-[#15803d] text-white shadow-md shadow-green-700/10 hover:bg-[#166534]"
      : "bg-white border border-gray-300 text-gray-800 hover:border-[#15803d] hover:text-[#15803d]",
  );
  const body = (
    <>
      {cta.label}
      {variant === "primary" && <ArrowUpRight className="size-4 shrink-0" />}
    </>
  );
  if (cta.href) {
    return (
      <Link href={cta.href} className={className}>
        {body}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={className}>
      {body}
    </button>
  );
}

/* ── component ───────────────────────────────────────────────── */

export function PreviewSwitchHero({
  badge,
  title,
  description,
  ratings,
  showEmail = true,
  emailLabel = "Enter email address",
  emailPlaceholder = "you@example.com",
  onSubmit,
  primaryCta,
  secondaryCta,
  avatars,
  socialProof,
  tabs,
  logos,
  scrollLength = "340vh",
  className,
}: PreviewSwitchHeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = React.useRef<HTMLElement>(null);
  const emailId = React.useId();
  const [active, setActive] = React.useState(0);

  // Scroll-driven only where it makes sense: md+ viewports with motion. On
  // small screens / reduced-motion the tabs are click-driven and the section
  // is a normal (un-pinned) hero. Starts off so SSR + first paint match.
  const [scrollDriven, setScrollDriven] = React.useState(false);
  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion) {
      setScrollDriven(false);
      return;
    }
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setScrollDriven(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [prefersReducedMotion]);

  // Map scroll progress through the pinned track to the active tab index.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (!scrollDriven) return;
    const n = tabs.length;
    const i = Math.min(n - 1, Math.max(0, Math.floor(p * n - 1e-6)));
    setActive((prev) => (prev === i ? prev : i));
  });

  const handleSelect = (i: number) => {
    const el = sectionRef.current;
    if (scrollDriven && el) {
      // Scroll to the middle of this tab's slice of the track.
      const top = window.scrollY + el.getBoundingClientRect().top;
      const range = el.offsetHeight - window.innerHeight;
      const target = top + ((i + 0.5) / tabs.length) * range;
      window.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
    } else {
      setActive(i);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    onSubmit?.(String(data.get("email") ?? ""));
  };

  return (
    // overflow-hidden lives here (not just on the scroll-driven sticky
    // wrapper) so the ambient glow can never push a horizontal scrollbar on
    // phones/tablets, where scrollDriven is false.
    <section
      ref={sectionRef}
      aria-label="Hero"
      className={cn("relative w-full overflow-hidden bg-white", className)}
      style={scrollDriven ? { height: scrollLength } : undefined}
    >
      <AmbientGlow />

      <div
        className={cn(
          // Pin to *exactly* one viewport tall so the sticky region releases in
          // lock-step with the tab counter. (min-h-screen lets a taller hero
          // grow past the viewport, which makes sticky unstick early and the
          // preview scroll up before the last tab.)
          scrollDriven && "sticky top-0 flex h-screen flex-col overflow-hidden",
        )}
      >
        {/* Spacer for a fixed navbar, if present in the page */}
        <div className="h-16 w-full shrink-0 sm:h-20 md:h-24" />

        <div
          className={cn(
            "mx-auto flex w-full max-w-7xl flex-col justify-center px-5 pb-8 pt-2 sm:px-6 sm:pb-10 md:pt-4 lg:pb-14",
            // Grow to fill the space above the docked logo strip and center the
            // split within it; min-h-0 lets it shrink so overflow is clipped
            // rather than pushing the logos off-screen.
            scrollDriven && "min-h-0 flex-1",
          )}
        >
          <div className="flex flex-col-reverse justify-center gap-7 sm:gap-8 md:flex-row md:items-start md:gap-6 lg:gap-10 xl:gap-[72px]">
            {/* -- left: text-tab rail + switchable preview ------- */}
            <div
              className={cn(
                "flex min-w-0 flex-col gap-4 sm:gap-5 md:w-[360px] md:shrink-0 md:flex-row md:gap-4 lg:w-[480px] lg:gap-6",
                // When a badge sits above the title, drop the rail + preview by
                // the badge's footprint (md+) so their tops line up with the
                // title rather than the badge.
                badge && "md:mt-11",
              )}
            >
              <TabRail tabs={tabs} active={active} onSelect={handleSelect} />
              <PreviewStack tabs={tabs} active={active} />
            </div>

            {/* -- right: content (centered on mobile, left on md+) -- */}
            <div className="flex min-w-0 flex-col items-center text-center md:max-w-[496px] md:flex-1 md:items-start md:text-left">
              {badge && (
                <div className="mb-4 flex w-fit max-w-full items-center gap-2 rounded-lg bg-green-50/80 border border-green-100 py-1 pl-1.5 pr-2.5">
                  {badge.tag && (
                    <span className="inline-flex h-5 shrink-0 items-center rounded bg-[#15803d] px-2 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm">
                      {badge.tag}
                    </span>
                  )}
                  <span className="truncate text-sm font-medium text-green-800 sm:text-sm">
                    {badge.label}
                  </span>
                </div>
              )}

              <h1 className="mb-4 text-balance text-[28px] font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl sm:leading-tight md:text-[44px] lg:mb-5 lg:text-5xl xl:text-[56px] xl:leading-[1.05]">
                {title}
              </h1>

              {description && (
                <p className="text-balance text-[15px] text-gray-600 sm:text-base lg:text-lg">
                  {description}
                </p>
              )}

              {ratings && ratings.length > 0 && (
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:justify-start lg:mt-8">
                  {ratings.map((r, i) => (
                    <div
                      key={`${r.source}-${i}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gray-150 bg-green-50/20 py-1 pl-2 pr-3"
                    >
                      {r.icon ?? (
                        <Star className="size-3.5 fill-amber-400 text-amber-400" />
                      )}
                      <span className="text-sm font-semibold text-gray-800">
                        {r.score}
                      </span>
                      <span className="text-sm text-gray-500">{r.source}</span>
                    </div>
                  ))}
                </div>
              )}

              {showEmail ? (
                <form onSubmit={handleSubmit} className="mt-6 w-full lg:mt-8">
                  <div className="mx-auto flex w-full max-w-[420px] flex-col gap-2 md:mx-0">
                    <label
                      htmlFor={emailId}
                      className="text-sm text-muted-foreground"
                    >
                      {emailLabel}
                    </label>
                    <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 shadow-sm transition focus-within:border-foreground focus-within:ring-2 focus-within:ring-ring">
                      <Mail className="size-5 shrink-0 text-muted-foreground" />
                      <input
                        id={emailId}
                        name="email"
                        type="email"
                        placeholder={emailPlaceholder}
                        className="h-10 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                      />
                    </div>

                    {(primaryCta || secondaryCta) && (
                      <div className="mt-2 flex flex-wrap justify-center gap-3 md:justify-start">
                        {primaryCta && (
                          <CtaButton
                            cta={primaryCta}
                            variant="primary"
                            type="submit"
                          />
                        )}
                        {secondaryCta && (
                          <CtaButton cta={secondaryCta} variant="secondary" />
                        )}
                      </div>
                    )}
                  </div>
                </form>
              ) : (
                (primaryCta || secondaryCta) && (
                  <div className="mt-6 flex w-full flex-wrap justify-center gap-3 md:justify-start lg:mt-8">
                    {primaryCta && (
                      <CtaButton
                        cta={primaryCta}
                        variant="primary"
                        type="button"
                      />
                    )}
                    {secondaryCta && (
                      <CtaButton cta={secondaryCta} variant="secondary" />
                    )}
                  </div>
                )
              )}

              {(avatars?.length || socialProof) && (
                <div className="mt-6 flex flex-col items-center gap-y-2 md:flex-row md:gap-y-3">
                  {avatars && avatars.length > 0 && (
                    <div className="flex items-center">
                      {avatars.map((a, i) => (
                        <span
                          key={i}
                          className={cn(
                            "flex size-7 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-green-50 text-[10px] font-semibold text-[#15803d]",
                            i > 0 && "-ml-2",
                          )}
                        >
                          {a.src ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={a.src}
                              alt=""
                              className="size-full object-cover"
                            />
                          ) : (
                            a.initials
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                  {socialProof && (
                    <span className="text-center text-sm font-medium text-gray-500 md:ml-3 md:text-left">
                      {socialProof}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* -- logo strip --------------------------------------- */}
        {logos && logos.length > 0 && (
          <div className="border-y border-gray-150 bg-white">
            <div className="mx-auto max-w-7xl lg:px-7">
              <div className="flex items-center overflow-x-auto [scrollbar-width:none] lg:overflow-visible [&::-webkit-scrollbar]:hidden">
                {logos.map((l, i) => (
                  <div
                    key={`${l.name}-${i}`}
                    className="flex shrink-0 items-center lg:w-full lg:shrink"
                  >
                    <div className="flex w-full items-center justify-center px-5 py-4 sm:px-6 sm:py-5 lg:px-0 lg:py-7">
                      {l.logo ?? (
                        <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-gray-500 sm:text-base">
                          {l.name}
                        </span>
                      )}
                    </div>
                    {i < logos.length - 1 && (
                      <div aria-hidden className="h-9 w-px shrink-0 bg-gray-150" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PreviewSwitchHero;