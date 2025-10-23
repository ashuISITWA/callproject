"use client";

import { useState, useEffect, useCallback } from 'react';
import { 
  isMetaMaskInstalled, 
  connectToMetaMask, 
  handleMetaMaskError,
  safeMetaMaskCheck,
  type MetaMaskProvider 
} from '@/lib/metamask';

export interface UseMetaMaskReturn {
  isInstalled: boolean;
  isConnected: boolean;
  account: string | null;
  error: string | null;
  isLoading: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  clearError: () => void;
}

export const useMetaMask = (): UseMetaMaskReturn => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Check if MetaMask is installed on mount
  useEffect(() => {
    const checkMetaMask = () => {
      try {
        const installed = safeMetaMaskCheck();
        setIsInstalled(installed);
        
        if (installed) {
          // Check if already connected
          const provider = window.ethereum as MetaMaskProvider;
          if (provider) {
            provider.request({ method: 'eth_accounts' })
              .then((accounts: string[]) => {
                if (accounts.length > 0) {
                  setIsConnected(true);
                  setAccount(accounts[0]);
                }
              })
              .catch((err) => {
                console.warn('Failed to check MetaMask accounts:', err);
              });
          }
        }
      } catch (err) {
        console.warn('MetaMask check failed:', err);
        setIsInstalled(false);
      }
    };

    checkMetaMask();

    // Listen for account changes
    if (typeof window !== 'undefined' && window.ethereum) {
      const provider = window.ethereum as MetaMaskProvider;
      
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          setIsConnected(true);
          setAccount(accounts[0]);
          setError(null);
        } else {
          setIsConnected(false);
          setAccount(null);
        }
      };

      const handleDisconnect = () => {
        setIsConnected(false);
        setAccount(null);
      };

      provider.on('accountsChanged', handleAccountsChanged);
      provider.on('disconnect', handleDisconnect);

      return () => {
        provider.removeListener('accountsChanged', handleAccountsChanged);
        provider.removeListener('disconnect', handleDisconnect);
      };
    }
  }, []);

  const connect = useCallback(async () => {
    if (!isInstalled) {
      setError('MetaMask is not installed. Please install MetaMask to continue.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const accounts = await connectToMetaMask();
      if (accounts.length > 0) {
        setIsConnected(true);
        setAccount(accounts[0]);
      }
    } catch (err: any) {
      const errorMessage = handleMetaMaskError(err);
      setError(errorMessage);
      console.error('MetaMask connection error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [isInstalled]);

  const disconnect = useCallback(() => {
    setIsConnected(false);
    setAccount(null);
    setError(null);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    isInstalled,
    isConnected,
    account,
    error,
    isLoading,
    connect,
    disconnect,
    clearError,
  };
};
