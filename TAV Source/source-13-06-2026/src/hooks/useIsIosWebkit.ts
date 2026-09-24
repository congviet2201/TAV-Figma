import { useEffect, useState } from 'react';

export function useIsIosWebkit() {
  const [isIosWebkit, setIsIosWebkit] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !navigator) return;

    const ua = navigator.userAgent;

    const isStandardIos = /iPad|iPhone|iPod/.test(ua);
    const isMacIntelWithTouch =
      navigator.platform === 'MacIntel' &&
      navigator.maxTouchPoints > 1;
    const isWebKitEngine = /AppleWebKit/.test(ua) && !/Chrome/.test(ua);

    const detectionResult = (isStandardIos || isMacIntelWithTouch) && isWebKitEngine;

    setIsIosWebkit(detectionResult);
  }, []);

  return isIosWebkit;
}
