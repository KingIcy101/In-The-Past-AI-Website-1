"use client";

import { useEffect, useRef, useState } from "react";
import Dialog from "@/components/ui/Dialog";

interface CalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CAL_URL = "https://cal.com/randy-mendez/ai-receptionist-discovery";

// The embed + its fallback live in an inner component that only mounts while the
// modal is open, so each open starts fresh (failed=false) with no
// setState-in-effect reset and no render-time ref access — clean under the
// React Compiler lint. Validation amendment 3: a visible fallback (direct
// booking link + email) always works even when the iframe doesn't.
function CalEmbed() {
  const [failed, setFailed] = useState(false);
  const loadedRef = useRef(false);

  useEffect(() => {
    // Fallback appears only from this async timer or the iframe onError —
    // never a synchronous setState in the effect body.
    const t = setTimeout(() => {
      if (!loadedRef.current) setFailed(true);
    }, 6000);
    return () => clearTimeout(t);
  }, []);

  if (failed) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="max-w-sm text-[var(--color-ink-secondary)]">
          The calendar didn&rsquo;t load. You can still book in one click:
        </p>
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center rounded-[var(--radius-pill)] bg-[var(--color-amber)] px-6 font-semibold text-white transition-colors hover:bg-[var(--color-amber-deep)]"
        >
          Open the booking page
        </a>
        <a
          href="mailto:hello@inthepast.ai?subject=Discovery%20call"
          className="text-sm font-medium text-[var(--color-amber-deep)] underline underline-offset-4"
        >
          Or email hello@inthepast.ai
        </a>
      </div>
    );
  }

  return (
    <iframe
      src={`${CAL_URL}?embed=true`}
      title="Book a discovery call with In The Past AI"
      className="h-full w-full border-0"
      loading="eager"
      onLoad={() => {
        loadedRef.current = true;
      }}
      onError={() => setFailed(true)}
    />
  );
}

export default function CalModal({ isOpen, onClose }: CalModalProps) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Book a discovery call" labelId="booking-title">
      <div className="relative h-[min(72vh,620px)]">{isOpen ? <CalEmbed /> : null}</div>
    </Dialog>
  );
}
