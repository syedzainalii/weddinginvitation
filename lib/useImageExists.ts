"use client";

import { useEffect, useState } from "react";

// Returns true if the image loads, false if it is missing, null while checking.
export function useImageExists(src: string) {
  const [exists, setExists] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.onload = () => !cancelled && setExists(true);
    img.onerror = () => !cancelled && setExists(false);
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  return exists;
}

// Same idea for any file (for example audio): checks with a HEAD request.
export function useFileExists(src: string) {
  const [exists, setExists] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(src, { method: "HEAD" })
      .then((r) => {
        if (!cancelled) setExists(r.ok);
      })
      .catch(() => {
        if (!cancelled) setExists(false);
      });
    return () => {
      cancelled = true;
    };
  }, [src]);

  return exists;
}
