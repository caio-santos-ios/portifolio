"use client";

import { useEffect } from "react";

export type ToastType = 'sucesso' | 'erro' | null;

export const Toast = ({ type, onClose }: { type: ToastType; onClose: () => void }) => {
    useEffect(() => {
        if (!type) return;
        const timer = setTimeout(onClose, 4000);
        return () => clearTimeout(timer);
    }, [type, onClose]);

    if (!type) return null;

    const isSuccess = type === 'sucesso';

    return (
        <>
        <style>{`
            @keyframes slideIn {
            from { transform: translateX(110%); opacity: 0; }
            to   { transform: translateX(0);    opacity: 1; }
            }
            @keyframes shrink {
            from { width: 100%; }
            to   { width: 0%; }
            }
            .toast-wrapper {
            position: fixed;
            bottom: 28px;
            right: 28px;
            z-index: 9999;
            min-width: 300px;
            max-width: 360px;
            background: #0f0f0f;
            border: 1px solid ${isSuccess ? '#22c55e' : '#ef4444'};
            border-radius: 12px;
            padding: 16px 18px 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.45);
            animation: slideIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            font-family: inherit;
            }
            .toast-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 4px;
            }
            .toast-title {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            font-weight: 600;
            color: ${isSuccess ? '#22c55e' : '#ef4444'};
            letter-spacing: 0.02em;
            }
            .toast-icon {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: ${isSuccess ? '#22c55e22' : '#ef444422'};
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            }
            .toast-close {
            background: none;
            border: none;
            color: #555;
            cursor: pointer;
            font-size: 16px;
            line-height: 1;
            padding: 0;
            transition: color 0.2s;
            }
            .toast-close:hover { color: #aaa; }
            .toast-message {
            font-size: 13px;
            color: #aaa;
            line-height: 1.5;
            margin-bottom: 12px;
            }
            .toast-bar {
            height: 2px;
            background: ${isSuccess ? '#22c55e' : '#ef4444'};
            border-radius: 2px;
            animation: shrink 4s linear forwards;
            opacity: 0.6;
            }
        `}</style>
        <div className="toast-wrapper" role="alert">
            <div className="toast-header">
            <span className="toast-title">
                <span className="toast-icon">{isSuccess ? '✓' : '✕'}</span>
                {isSuccess ? 'Mensagem enviada!' : 'Erro ao enviar'}
            </span>
            <button className="toast-close" onClick={onClose} aria-label="Fechar">×</button>
            </div>
            <p className="toast-message">
            {isSuccess
                ? 'Recebi sua mensagem. Em breve entrarei em contato!'
                : 'Algo deu errado. Tente novamente ou me chame por e-mail.'}
            </p>
            <div className="toast-bar" />
        </div>
        </>
    );
}