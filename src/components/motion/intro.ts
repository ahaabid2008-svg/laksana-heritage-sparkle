import { useEffect, useState } from "react";

const KEY = "laksana-intro-seen";
const EVENT = "laksana:intro-done";

export const hasSeenIntro = () => {
  try {
    return sessionStorage.getItem(KEY) === "1";
  } catch {
    return true;
  }
};

export const markIntroDone = () => {
  try {
    sessionStorage.setItem(KEY, "1");
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new Event(EVENT));
};

/** True once the intro loader has finished (immediately on repeat visits). */
export const useIntroDone = () => {
  const [done, setDone] = useState(hasSeenIntro);
  useEffect(() => {
    if (done) return;
    const on = () => setDone(true);
    window.addEventListener(EVENT, on);
    return () => window.removeEventListener(EVENT, on);
  }, [done]);
  return done;
};

export const luxe = [0.22, 1, 0.36, 1] as const;
export const curtain = [0.76, 0, 0.24, 1] as const;
