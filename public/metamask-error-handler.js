// MetaMask error handling script
// This script runs before React hydration to catch MetaMask injection errors

(function() {
  'use strict';

  // Store original console.error to prevent MetaMask errors from cluttering console
  const originalConsoleError = console.error;
  
  console.error = function(...args) {
    const message = args.join(' ');
    
    // Filter out MetaMask injection errors
    if (
      message.includes('MetaMask') ||
      message.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn') ||
      message.includes('Failed to connect to MetaMask') ||
      message.includes('ethereum') && message.includes('undefined')
    ) {
      // Log to a separate debug log instead of console.error
      if (window.debugMetaMask) {
        console.warn('[MetaMask Debug]:', ...args);
      }
      return;
    }
    
    // Call original console.error for non-MetaMask errors
    originalConsoleError.apply(console, args);
  };

  // Handle unhandled promise rejections from MetaMask
  window.addEventListener('unhandledrejection', function(event) {
    const reason = event.reason;
    
    if (
      reason && 
      typeof reason === 'object' &&
      (
        reason.message?.includes('MetaMask') ||
        reason.message?.includes('ethereum') ||
        reason.stack?.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn')
      )
    ) {
      // Prevent MetaMask errors from showing as unhandled rejections
      event.preventDefault();
      
      if (window.debugMetaMask) {
        console.warn('[MetaMask Unhandled Rejection]:', reason);
      }
    }
  });

  // Handle global errors from MetaMask
  window.addEventListener('error', function(event) {
    const error = event.error;
    
    if (
      error &&
      (
        error.message?.includes('MetaMask') ||
        error.message?.includes('ethereum') ||
        error.stack?.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn')
      )
    ) {
      // Prevent MetaMask errors from showing as global errors
      event.preventDefault();
      
      if (window.debugMetaMask) {
        console.warn('[MetaMask Global Error]:', error);
      }
    }
  });

  // Safe check for MetaMask availability
  window.safeMetaMaskCheck = function() {
    try {
      return typeof window !== 'undefined' && 
             typeof window.ethereum !== 'undefined' && 
             window.ethereum.isMetaMask;
    } catch (error) {
      return false;
    }
  };

  // Enable debug mode if needed
  window.debugMetaMask = false;
  
  // Add debug toggle
  window.toggleMetaMaskDebug = function() {
    window.debugMetaMask = !window.debugMetaMask;
    console.log('MetaMask debug mode:', window.debugMetaMask ? 'enabled' : 'disabled');
  };

})();
