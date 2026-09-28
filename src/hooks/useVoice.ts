"use client";

import { useState, useCallback, useRef, useEffect } from "react";

export type VoiceState = "IDLE" | "LISTENING" | "PROCESSING" | "SPEAKING" | "ERROR";

export function useVoice() {
  const [state, setState] = useState<VoiceState>("IDLE");
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = true;
      }
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  const startListening = useCallback(() => {
    if (!recognitionRef.current) {
      setState("ERROR");
      setResponse("Speech recognition not supported in this browser.");
      return;
    }

    try {
      setTranscript("");
      setResponse("");
      setState("LISTENING");
      
      recognitionRef.current.onresult = (event: any) => {
        let interim = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            setTranscript(event.results[i][0].transcript);
          } else {
            interim += event.results[i][0].transcript;
            setTranscript(interim);
          }
        }
      };

      recognitionRef.current.onend = () => {
        if (state === "LISTENING") {
          processTranscript(transcript);
        }
      };

      recognitionRef.current.start();
    } catch (e) {
      setState("ERROR");
    }
  }, [transcript, state]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setState("IDLE");
  }, []);

  const processTranscript = useCallback(async (text: string) => {
    if (!text.trim()) {
      setState("IDLE");
      return;
    }

    setState("PROCESSING");
    
    // Simulate API call to backend AI
    setTimeout(() => {
      const reply = `I received your command: "${text}". I have scheduled that for you.`;
      setResponse(reply);
      speak(reply);
    }, 1500);
  }, []);

  const speak = useCallback((text: string) => {
    if (!synthRef.current) {
      setState("IDLE");
      return;
    }

    setState("SPEAKING");
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.onend = () => {
      setState("IDLE");
    };
    
    synthRef.current.speak(utterance);
  }, []);

  return {
    state,
    transcript,
    response,
    startListening,
    stopListening
  };
}
