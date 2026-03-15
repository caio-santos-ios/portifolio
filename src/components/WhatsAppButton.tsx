"use client";

import { useState, useEffect } from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  tooltipTitle?: string;
  tooltipText?: string;
  position?: "bottom-right" | "bottom-left";
  showNotificationBadge?: boolean;
  autoShowTooltip?: boolean;
  autoShowDelay?: number;
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Olá! Gostaria de falar sobre um projeto.",
  tooltipTitle = "Fale conosco!",
  tooltipText = "Estamos online agora. Resposta em minutos.",
  position = "bottom-right",
  showNotificationBadge = true,
  autoShowTooltip = true,
  autoShowDelay = 2000,
}: WhatsAppButtonProps) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [badgeVisible, setBadgeVisible] = useState(false);

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const isLeft = position === "bottom-left";

  useEffect(() => {
    if (autoShowTooltip) {
      const timer = setTimeout(() => setTooltipVisible(true), autoShowDelay);
      return () => clearTimeout(timer);
    }
  }, [autoShowTooltip, autoShowDelay]);

  useEffect(() => {
    if (showNotificationBadge) {
      const timer = setTimeout(() => setBadgeVisible(true), 400);
      return () => clearTimeout(timer);
    }
  }, [showNotificationBadge]);

  const handleButtonClick = () => {
    setTooltipVisible((v) => !v);
  };

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0.35); }
          60%  { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0); }
        }
        @keyframes wa-badge-in {
          from { transform: scale(0); }
          to   { transform: scale(1); }
        }
        @keyframes wa-tooltip-in {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .wa-btn {
          animation: wa-pulse 2.5s infinite;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .wa-btn:hover {
          transform: scale(1.1) !important;
          box-shadow: 0 6px 28px rgba(37,211,102,0.55) !important;
          animation: none !important;
        }
        .wa-btn:active {
          transform: scale(0.95) !important;
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          bottom: "28px",
          ...(isLeft ? { left: "28px" } : { right: "28px" }),
          display: "flex",
          flexDirection: "column",
          alignItems: isLeft ? "flex-start" : "flex-end",
          gap: "10px",
          zIndex: 9999,
          fontFamily:
            "'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {/* Tooltip */}
        {tooltipVisible && (
          <div
            style={{
              background: "#fff",
              borderRadius: "14px",
              padding: "12px 16px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
              fontSize: "13.5px",
              color: "#222",
              maxWidth: "210px",
              lineHeight: 1.55,
              animation: "wa-tooltip-in 0.25s ease forwards",
              position: "relative",
              cursor: "default",
              userSelect: "none",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setTooltipVisible(false)}
              aria-label="Fechar"
              style={{
                position: "absolute",
                top: "8px",
                right: "10px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#aaa",
                fontSize: "14px",
                lineHeight: 1,
                padding: 0,
              }}
            >
              ✕
            </button>

            <strong
              style={{
                display: "block",
                fontWeight: 600,
                fontSize: "14px",
                marginBottom: "3px",
                color: "#111",
                paddingRight: "16px",
              }}
            >
              {tooltipTitle}
            </strong>
            <span style={{ color: "#555" }}>{tooltipText}</span>

            {/* Arrow */}
            <span
              style={{
                position: "absolute",
                bottom: "-7px",
                ...(isLeft ? { left: "22px" } : { right: "22px" }),
                width: 0,
                height: 0,
                borderLeft: "7px solid transparent",
                borderRight: "7px solid transparent",
                borderTop: "7px solid #fff",
              }}
            />
          </div>
        )}

        {/* Button */}
        <div style={{ position: "relative", display: "inline-flex" }}>
          {/* Notification badge */}
          {badgeVisible && showNotificationBadge && (
            <span
              style={{
                position: "absolute",
                top: "-3px",
                right: "-3px",
                width: "18px",
                height: "18px",
                background: "#ff4444",
                borderRadius: "50%",
                border: "2.5px solid #fff",
                fontSize: "10px",
                fontWeight: 600,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
                zIndex: 1,
                animation: "wa-badge-in 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards",
              }}
            >
              1
            </span>
          )}

          {/* Toggle tooltip on click; open WhatsApp on direct visit */}
          <button
            className="wa-btn"
            onClick={handleButtonClick}
            aria-label="Abrir chat no WhatsApp"
            title="WhatsApp"
            style={{
              width: "58px",
              height: "58px",
              borderRadius: "50%",
              background: "#25D366",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              outline: "none",
            }}
          >
            <WhatsAppIcon />
          </button>
        </div>

        {/* Open WhatsApp CTA (visible when tooltip is open) */}
        {tooltipVisible && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              background: "#25D366",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 600,
              padding: "9px 18px",
              borderRadius: "30px",
              textDecoration: "none",
              textAlign: "center",
              boxShadow: "0 2px 12px rgba(37,211,102,0.35)",
              animation: "wa-tooltip-in 0.2s ease forwards",
              whiteSpace: "nowrap",
            }}
          >
            Iniciar conversa →
          </a>
        )}
      </div>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      aria-hidden="true"
    >
      <path
        d="M16 4C9.372 4 4 9.372 4 16c0 2.312.632 4.476 1.732 6.328L4.5 27.5l5.34-1.396A11.92 11.92 0 0016 28c6.628 0 12-5.372 12-12S22.628 4 16 4z"
        fill="white"
        fillOpacity={0.15}
      />
      <path
        d="M16 5.5C10.201 5.5 5.5 10.201 5.5 16c0 2.15.598 4.162 1.636 5.874L5.5 26.5l4.78-1.253A10.43 10.43 0 0016 26.5c5.799 0 10.5-4.701 10.5-10.5S21.799 5.5 16 5.5zM13.244 10.8c.3.008.636.02.956.74.38.86.72 2.196.78 2.356.06.16.1.34-.008.548-.108.2-.16.328-.32.504-.16.176-.336.392-.48.528-.16.144-.328.3-.14.588.188.288.836 1.38 1.796 2.236 1.232 1.1 2.272 1.44 2.56 1.6.288.16.456.136.624-.08.168-.216.716-.836.908-1.124.192-.288.384-.24.648-.144.264.096 1.668.788 1.956.932.288.144.48.216.548.336.072.12.072.692-.164 1.36-.236.668-1.388 1.28-1.908 1.324-.488.04-.944.196-3.2-.668-2.712-1.036-4.42-3.82-4.556-3.996-.136-.176-1.108-1.476-1.108-2.812 0-1.336.7-1.992.952-2.264.252-.272.548-.34.732-.34z"
        fill="white"
      />
    </svg>
  );
}