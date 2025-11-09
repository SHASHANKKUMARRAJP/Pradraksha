import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const buttonVariants = {
  default: 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600',
  secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 dark:bg-secondary-600 dark:hover:bg-secondary-700',
  accent: 'bg-accent-500 text-white hover:bg-accent-600 dark:bg-accent-600 dark:hover:bg-accent-700',
  gradient: 'bg-gradient-to-r from-secondary-500 to-accent-500 text-white hover:from-secondary-600 hover:to-accent-600',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20',
  ghost: 'text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/20',
  link: 'text-primary-600 underline-offset-4 hover:underline dark:text-primary-400',
  destructive: 'bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700',
};

const buttonSizes = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 py-2',
  lg: 'h-11 px-6 text-lg',
  xl: 'h-12 px-8 text-xl',
  icon: 'h-10 w-10',
};

export const Button = React.forwardRef(({
  className,
  variant = 'default',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  asChild = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  animate = true,
  ...props
}, ref) => {
  const buttonClasses = cn(
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500',
    'disabled:pointer-events-none disabled:opacity-50',
    buttonVariants[variant],
    buttonSizes[size],
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {loading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}
      {!loading && icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {!loading && icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  if (animate) {
    return (
      <motion.button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <button
      ref={ref}
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
