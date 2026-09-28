"use client";

import { useEffect, useRef, useState } from "react";

export function useAudioVisualizer(active: boolean) {
  const [dataArray, setDataArray] = useState<Uint8Array | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (sourceRef.current) {
        sourceRef.current.mediaStream.getTracks().forEach(track => track.stop());
        sourceRef.current.disconnect();
      }
      if (audioContextRef.current) audioContextRef.current.close();
      setDataArray(null);
      return;
    }

    const startAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        audioContextRef.current = ctx;

        const analyser = ctx.createAnalyser();
        analyser.fftSize = 64;
        analyser.smoothingTimeConstant = 0.8;
        analyserRef.current = analyser;

        const source = ctx.createMediaStreamSource(stream);
        source.connect(analyser);
        sourceRef.current = source;

        const bufferLength = analyser.frequencyBinCount;
        const data = new Uint8Array(bufferLength);

        const update = () => {
          if (!analyserRef.current) return;
          analyserRef.current.getByteFrequencyData(data);
          setDataArray(new Uint8Array(data));
          animationRef.current = requestAnimationFrame(update);
        };
        update();
      } catch (err) {
        console.error("Audio visualization error:", err);
      }
    };

    startAudio();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (sourceRef.current) {
        sourceRef.current.mediaStream.getTracks().forEach(track => track.stop());
      }
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close();
      }
    };
  }, [active]);

  return dataArray;
}
