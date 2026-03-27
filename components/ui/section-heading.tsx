import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12',
        centered && 'text-center',
        className
      )}
    >
      <h2 className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance',
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl',
          centered && 'mx-auto',
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}