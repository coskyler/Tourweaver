import React, { useState } from "react";

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function TourCard({
  id,
  name,
  city,
  description,
  stops,
  type,
  created_at,
}) {
  const [copied, setCopied] = useState(false);

  const handleShareClick = async () => {
    const url = `${window.location.origin}/tours/${id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy tour URL:", err);
    }
  };

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/50 shadow-sm transition hover:shadow-md">
      {/* Left accent */}
      <div className="absolute left-0 top-0 h-full w-1 bg-green-900/80" />

      {/* Make content vertical and stretch full height */}
      <div className="p-5 pl-6 flex flex-col h-full">
        <header className="mb-2 flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <span className="inline-flex items-center rounded-full border border-green-900 bg-green-900/10 px-2.5 py-0.5 text-xs font-medium text-green-900">
            {type}
          </span>
        </header>

        <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-gray-600">
          {/* City */}
          <span className="inline-flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-green-900" fill="none">
              <path d="M12 2C8.7 2 6 4.7 6 8c0 4.2 6 12 6 12s6-7.8 6-12c0-3.3-2.7-6-6-6Z" stroke="currentColor" strokeWidth="1.6"/>
              <circle cx="12" cy="8" r="2.2" fill="currentColor"/>
            </svg>
            {city}
          </span>

          {/* Stops */}
          <span className="inline-flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-green-900" fill="none">
              <path d="M4 19c4-7 8-4 10.5-8S17 6 20 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              <circle cx="4" cy="19" r="1.9" fill="currentColor"/>
              <circle cx="20" cy="5" r="1.9" fill="currentColor"/>
            </svg>
            {stops} {stops === 1 ? "stop" : "stops"}
          </span>

          {/* Created */}
          <span className="inline-flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-green-900" fill="none">
              <path d="M7 3v3M17 3v3M4.5 9h15M6 5h12a1.5 1.5 0 0 1 1.5 1.5V19A2.5 2.5 0 0 1 17 21H7a2.5 2.5 0 0 1-2.5-2V6.5A1.5 1.5 0 0 1 6 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            {formatDate(created_at)}
          </span>
        </div>

        <p className="line-clamp-3 text-sm text-gray-700">{description}</p>

        {/* Push footer to bottom */}
        <footer className="mt-auto pt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={handleShareClick}
            className="cursor-pointer flex flex-col items-start gap-0.5 rounded-md bg-black/5 px-2 py-1 text-xs text-gray-600 hover:bg-black/7"
          >
            <span className="inline-flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <rect x="9" y="9" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <rect x="5" y="5" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              <span>{copied ? "Copied" : "Share"}</span>
            </span>
            <code className="text-[11px] text-gray-500 break-all">{id}</code>
          </button>

          <a
            href={`/tours/${id}`}
            className="inline-flex items-center gap-1 rounded-full bg-green-900 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-green-900/90"
          >
            View
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </footer>
      </div>
    </article>
  );
}
