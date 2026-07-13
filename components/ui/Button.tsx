import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] font-semibold text-[0.95rem] min-h-[44px] px-6 transition-[background,border-color,box-shadow,transform] duration-150 active:translate-y-px disabled:opacity-50 disabled:pointer-events-none";

// Amber stays the shared brand thread for the primary CTA across every surface;
// secondary is a hairline ghost that adopts the pod accent on pod pages.
const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-amber)] text-white hover:bg-[var(--color-amber-deep)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]",
  secondary:
    "bg-transparent text-[var(--color-ink)] border border-[var(--color-hairline)] hover:border-[var(--pod-accent-deep)] hover:bg-[var(--pod-accent-tint)]",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: { variant?: Variant; children: ReactNode } & ComponentProps<"button">) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  href,
  ...rest
}: { variant?: Variant; children: ReactNode; href: string } & Omit<ComponentProps<typeof Link>, "href">) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
