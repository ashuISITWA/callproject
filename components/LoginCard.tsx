'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Eye, EyeOff, Github, Lock, Mail } from 'lucide-react';
import Link from 'next/link';

interface LoginCardProps {
  className?: string;
}

export default function LoginCard({ className }: LoginCardProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const t = useTranslations('auth');
  const locale = useLocale();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle your auth logic here
  };

  return (
    <div className="w-full flex items-center justify-center py-20">
      <Card
        className={cn(
          'w-full max-w-[400px] p-0',
          'bg-white dark:bg-zinc-900',
          'border border-zinc-100/30 dark:border-zinc-800',
          'rounded-2xl',
          className
        )}
      >
        {/* Header */}
        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
          <div className="space-y-2 text-center">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              {t('loginTitle')}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('subTitleLogin')}</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Email */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center">
              <Mail className="w-4 h-4 text-zinc-500" />
            </div>
            <input
              type="email"
              name="email"
              placeholder={t('email')}
              autoComplete="email"
              required
              className="w-full h-10 pl-10 pr-3 bg-zinc-50 dark:bg-zinc-800/50 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/20 border border-zinc-200 dark:border-zinc-800 transition-all"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center">
              <Lock className="w-4 h-4 text-zinc-500" />
            </div>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              placeholder={t('password')}
              autoComplete="current-password"
              required
              className="w-full h-10 pl-10 pr-10 bg-zinc-50 dark:bg-zinc-800/50 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/20 border border-zinc-200 dark:border-zinc-800 transition-all"
            />
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="absolute inset-y-0 right-3 flex items-center"
            >
              {isPasswordVisible ? (
                <EyeOff className="w-4 h-4 text-zinc-500" />
              ) : (
                <Eye className="w-4 h-4 text-zinc-500" />
              )}
            </button>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full h-10 rounded-lg text-sm font-medium transition-all bg-black hover:bg-slate-700 text-white"
          >
            {t('loginBtn')}
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-200 dark:border-zinc-800" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white dark:bg-zinc-900 px-2 text-xs text-zinc-500 dark:text-zinc-400">
                {t('or') || 'OR'}
              </span>
            </div>
          </div>

          {/* Social login */}
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="h-10 rounded-lg text-sm font-medium">
              {/* Google Icon */}
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              {t('socialGoogle') || 'Google'}
            </Button>
            <Button variant="outline" className="h-10 rounded-lg text-sm font-medium">
              <Github className="mr-2 h-5 w-5 text-zinc-700 dark:text-zinc-300" />
              {t('socialGithub') || 'GitHub'}
            </Button>
          </div>
        </form>

        {/* Footer */}
        <div className="p-6 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            {t('noAccount')}{' '}
            <Link
              href={`/${locale}/signup`}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
            >
              {t('signupLink')}
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
