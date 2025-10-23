// MetaMask utility functions for handling wallet connections
export interface MetaMaskError {
  code: number;
  message: string;
  data?: any;
}

export interface MetaMaskProvider {
  isMetaMask?: boolean;
  request: (args: { method: string; params?: any[] }) => Promise<any>;
  on: (event: string, handler: (...args: any[]) => void) => void;
  removeListener: (event: string, handler: (...args: any[]) => void) => void;
}

declare global {
  interface Window {
    ethereum?: MetaMaskProvider;
  }
}

export const isMetaMaskInstalled = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.ethereum !== 'undefined' && 
         window.ethereum.isMetaMask === true;
};

export const getMetaMaskProvider = (): MetaMaskProvider | null => {
  if (typeof window === 'undefined') return null;
  return window.ethereum || null;
};

export const connectToMetaMask = async (): Promise<string[]> => {
  if (!isMetaMaskInstalled()) {
    throw new Error('MetaMask is not installed. Please install MetaMask to continue.');
  }

  try {
    const provider = getMetaMaskProvider();
    if (!provider) {
      throw new Error('MetaMask provider not found');
    }

    const accounts = await provider.request({
      method: 'eth_requestAccounts',
    });

    return accounts;
  } catch (error: any) {
    // Handle specific MetaMask errors
    if (error.code === 4001) {
      throw new Error('User rejected the connection request');
    } else if (error.code === -32002) {
      throw new Error('Connection request already pending. Please check MetaMask.');
    } else {
      throw new Error(`Failed to connect to MetaMask: ${error.message}`);
    }
  }
};

export const handleMetaMaskError = (error: any): string => {
  if (error.code === 4001) {
    return 'User rejected the connection request';
  } else if (error.code === -32002) {
    return 'Connection request already pending. Please check MetaMask.';
  } else if (error.code === 4902) {
    return 'MetaMask is not connected to the correct network';
  } else if (error.message?.includes('User denied')) {
    return 'User denied the transaction';
  } else {
    return `MetaMask error: ${error.message || 'Unknown error occurred'}`;
  }
};

// Safe wrapper to prevent MetaMask injection errors
export const safeMetaMaskCheck = (): boolean => {
  try {
    return isMetaMaskInstalled();
  } catch (error) {
    console.warn('MetaMask check failed:', error);
    return false;
  }
};