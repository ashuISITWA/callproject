"use client";

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class MetaMaskErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Check if this is a MetaMask-related error
    const isMetaMaskError = 
      error.message?.includes('MetaMask') ||
      error.message?.includes('ethereum') ||
      error.message?.includes('wallet') ||
      error.stack?.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn');

    if (isMetaMaskError) {
      console.warn('MetaMask error caught by boundary:', error);
      return { hasError: true, error };
    }

    // Re-throw non-MetaMask errors
    throw error;
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('MetaMask Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                MetaMask Connection Issue
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  There was an issue with MetaMask. This is likely a browser extension conflict.
                  You can safely ignore this error or disable MetaMask for this site.
                </p>
                <div className="mt-2">
                  <button
                    onClick={() => this.setState({ hasError: false })}
                    className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm hover:bg-yellow-200"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default MetaMaskErrorBoundary;
