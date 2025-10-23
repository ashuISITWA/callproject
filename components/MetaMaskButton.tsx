"use client";

import React from "react";
import { useMetaMask } from "@/lib/hooks/useMetaMask";

interface MetaMaskButtonProps {
  className?: string;
  onConnect?: (account: string) => void;
  onError?: (error: string) => void;
}

export default function MetaMaskButton({
  className = "",
  onConnect,
  onError,
}: MetaMaskButtonProps) {
  const {
    isInstalled,
    isConnected,
    account,
    error,
    isLoading,
    connect,
    disconnect,
    clearError,
  } = useMetaMask();

  React.useEffect(() => {
    if (error && onError) {
      onError(error);
    }
  }, [error, onError]);

  React.useEffect(() => {
    if (isConnected && account && onConnect) {
      onConnect(account);
    }
  }, [isConnected, account, onConnect]);

  const handleClick = async () => {
    if (isConnected) {
      disconnect();
    } else {
      clearError();
      await connect();
    }
  };

  if (!isInstalled) {
    return (
      <div
        className={`p-4 bg-gray-100 border border-gray-300 rounded-md ${className}`}
      >
        <p className="text-gray-600 text-sm">
          MetaMask is not installed. This site doesn&apos;t require MetaMask to
          function.
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <button
        onClick={handleClick}
        disabled={isLoading}
        className={`
          px-4 py-2 rounded-md font-medium transition-colors
          ${
            isConnected
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }
          ${isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
      >
        {isLoading
          ? "Connecting..."
          : isConnected
          ? "Disconnect MetaMask"
          : "Connect MetaMask"}
      </button>

      {isConnected && account && (
        <div className="text-sm text-gray-600">
          Connected: {account.slice(0, 6)}...{account.slice(-4)}
        </div>
      )}

      {error && (
        <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
          {error}
          <button onClick={clearError} className="ml-2 text-red-800 underline">
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
}
