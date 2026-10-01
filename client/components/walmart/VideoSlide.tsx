import { useEffect, useRef, useState } from "react";

function formatTime(seconds: number) {
  const total = Math.floor(seconds) || 0;
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function MoreVideosPill() {
  return (
    <div className="flex items-center rounded-[625px] border border-[#E3E4E5] bg-white px-2 py-1">
      <span className="text-[12px] font-bold leading-4 text-[#2E2F32]">More videos</span>
    </div>
  );
}

function CircleButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-6 w-6 items-center justify-center rounded-full border border-[#E3E4E5] bg-white/80 active:scale-95"
    >
      {children}
    </button>
  );
}

function PauseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4.25 3.49976V12.4998H5.75V3.49976H4.25Z" fill="#2E2F32" />
      <path d="M10.25 3.49976V12.4998H11.75V3.49976H10.25Z" fill="#2E2F32" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M5 3.5L12.5 8L5 12.5V3.5Z" fill="#2E2F32" />
    </svg>
  );
}

function CCOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M11.8323 11.8772L14.1855 13.7779L14.8139 13L1.81388 2.5L1.18555 3.27794L2.77678 4.56316C1.70535 5.28082 1 6.5025 1 7.88892C1 10.0981 2.79086 11.8889 5 11.8889C6.11915 11.8889 7.13169 11.4286 7.85712 10.6884L7.14288 9.98846C6.59779 10.5447 5.83954 10.8889 5 10.8889C3.34315 10.8889 2 9.54577 2 7.88892C2 6.73563 2.65077 5.73434 3.60514 5.23223L8.3053 9.02851C8.76792 10.5878 10.1556 11.7494 11.8323 11.8772Z" fill="#2E2F32" />
      <path d="M12.1406 4.88892C10.7169 4.88892 9.52485 5.88065 9.21755 7.21097L8.37671 6.53183C8.93248 4.99066 10.4079 3.88892 12.1406 3.88892C13.2598 3.88892 14.2723 4.34918 14.9977 5.08947L14.2835 5.78937C13.7384 5.23312 12.9802 4.88892 12.1406 4.88892Z" fill="#2E2F32" />
    </svg>
  );
}

function CCOnIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 3.5C1.44772 3.5 1 3.94772 1 4.5V11.5C1 12.0523 1.44772 12.5 2 12.5H14C14.5523 12.5 15 12.0523 15 11.5V4.5C15 3.94772 14.5523 3.5 14 3.5H2ZM6.5 7.1C6.27 6.55 5.78 6.2 5.1 6.2C4.16 6.2 3.5 6.93 3.5 8C3.5 9.07 4.16 9.8 5.1 9.8C5.78 9.8 6.27 9.45 6.5 8.9L7.4 9.35C6.98 10.18 6.13 10.7 5.1 10.7C3.6 10.7 2.5 9.55 2.5 8C2.5 6.45 3.6 5.3 5.1 5.3C6.13 5.3 6.98 5.82 7.4 6.65L6.5 7.1ZM11.5 7.1C11.27 6.55 10.78 6.2 10.1 6.2C9.16 6.2 8.5 6.93 8.5 8C8.5 9.07 9.16 9.8 10.1 9.8C10.78 9.8 11.27 9.45 11.5 8.9L12.4 9.35C11.98 10.18 11.13 10.7 10.1 10.7C8.6 10.7 7.5 9.55 7.5 8C7.5 6.45 8.6 5.3 10.1 5.3C11.13 5.3 11.98 5.82 12.4 6.65L11.5 7.1Z" fill="#2E2F32" />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M14.7945 13.1211L1.99918 2.77794L1.18539 3.38903L3.1783 5H1.99918C1.44735 5 1 5.44772 1 6V10C1 10.5523 1.44735 11 1.99918 11H3.83101L7.69449 13.9C7.84588 14.0136 8.04842 14.0319 8.21767 13.9472C8.38692 13.8625 8.49384 13.6894 8.49384 13.5V9.29685L14.1747 13.889L14.7945 13.1211ZM4.16406 6L4.29437 5.90219L7.49466 8.48916V12.5L4.16406 10H1.99918V6H4.16406Z" fill="#2E2F32" />
      <path d="M5.13105 4.02417L5.93286 4.67231L7.49466 3.5V5.9348L8.49384 6.7425V2.5C8.49384 2.31062 8.38692 2.13749 8.21767 2.05279C8.04842 1.96809 7.84588 1.98637 7.69449 2.1L5.13105 4.02417Z" fill="#2E2F32" />
    </svg>
  );
}

function UnmutedIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8.49384 2.5C8.49384 2.31062 8.38692 2.13749 8.21767 2.05279C8.04842 1.96809 7.84588 1.98637 7.69449 2.1L3.83101 5H1.99918C1.44735 5 1 5.44772 1 6V10C1 10.5523 1.44735 11 1.99918 11H3.83101L7.69449 13.9C7.84588 14.0136 8.04842 14.0319 8.21767 13.9472C8.38692 13.8625 8.49384 13.6894 8.49384 13.5V2.5Z" fill="#2E2F32" />
      <path d="M10.5 5.5C11.0784 6.16667 11.4 7.05 11.4 8C11.4 8.95 11.0784 9.83333 10.5 10.5" stroke="#2E2F32" strokeLinecap="round" />
      <path d="M12.5 3.8C13.6 4.9 14.3 6.4 14.3 8C14.3 9.6 13.6 11.1 12.5 12.2" stroke="#2E2F32" strokeLinecap="round" />
    </svg>
  );
}

export default function VideoSlide({
  src,
  poster,
  handle,
  isActive,
  fill,
}: {
  src: string;
  poster: string;
  variant: "product" | "social";
  handle?: string;
  isActive: boolean;
  fill?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);
  const [captions, setCaptions] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;
    if (isActive && !paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
      if (!isActive) video.currentTime = 0;
    }
  }, [isActive, paused, src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onLoadedMetadata = () => setDuration(video.duration || 0);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    if (video.readyState >= 1) setDuration(video.duration || 0);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, [src]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setMuted(next);
  };

  return (
    <div className={`relative h-full w-full overflow-hidden ${fill ? "bg-white" : "bg-[#2E2F32]"}`}>
      {src && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted={muted}
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 h-full w-full ${fill ? "object-cover" : "object-contain"}`}
        />
      )}
      {!src && poster && (
        <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
      )}

      <div className="absolute right-3 top-3">
        <MoreVideosPill />
      </div>

      {paused && (
        <button
          type="button"
          aria-label="Play video"
          onClick={togglePlay}
          className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 5.14v14l11-7-11-7z" fill="white" />
          </svg>
        </button>
      )}

      <div className="absolute bottom-0 left-0 right-0">
        <div
          className={`flex w-full items-center gap-2 px-4 py-3 ${
            fill ? "" : "bg-gradient-to-t from-black/60 to-transparent"
          }`}
        >
          {fill ? (
            <>
              <div className="flex-1" />
              <CircleButton label={paused ? "Play" : "Pause"} onClick={togglePlay}>
                {paused ? <PlayIcon /> : <PauseIcon />}
              </CircleButton>
            </>
          ) : (
            <>
              {handle ? (
                <span className="flex-1 truncate text-[12px] leading-4 text-white">{handle}</span>
              ) : (
                <div className="flex-1" />
              )}
              <span className="text-[12px] leading-4 text-white">{formatTime(Math.max(0, duration - currentTime))}</span>
              <CircleButton label={paused ? "Play" : "Pause"} onClick={togglePlay}>
                {paused ? <PlayIcon /> : <PauseIcon />}
              </CircleButton>
              <CircleButton label={captions ? "Hide captions" : "Show captions"} onClick={() => setCaptions((v) => !v)}>
                {captions ? <CCOnIcon /> : <CCOffIcon />}
              </CircleButton>
              <CircleButton label={muted ? "Unmute" : "Mute"} onClick={toggleMute}>
                {muted ? <MutedIcon /> : <UnmutedIcon />}
              </CircleButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
