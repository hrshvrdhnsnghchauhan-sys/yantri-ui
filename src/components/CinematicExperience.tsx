"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function CinematicExperience() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Focus the iframe so interactions work immediately
    if (iframeRef.current) {
      iframeRef.current.focus();
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'NAVIGATE' && event.data?.path) {
        router.push(event.data.path);
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [router]);

  return (
    <iframe 
      ref={iframeRef}
      src="/superdesign.html" 
      className="fixed inset-0 w-full h-full border-none z-[9999]" 
      title="Yantri OS Cinematic Experience"
    />
  );
}
