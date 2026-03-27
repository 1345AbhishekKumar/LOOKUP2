import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function Container({
  as: Component = 'div',
  size = 'xl',
  className,
  children,
  ...props
}: ContainerProps) {
  const containerSize = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    full: 'max-w-full',
  };

  return (
    <Component
      className={cn(
        'w-full mx-auto px-4 sm:px-6 md:px-8',
        containerSize[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}