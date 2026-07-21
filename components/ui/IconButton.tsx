import * as React from 'react';
import { Button, ButtonProps } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

export interface IconButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon'> {
  icon: React.ReactNode;
  'aria-label': string; // Accessibility requirement
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, icon, size = 'icon', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size={size}
        className={cn('rounded-full', className)} // Usually rounded full for icon buttons
        {...props}
      >
        {icon}
      </Button>
    );
  }
);
IconButton.displayName = 'IconButton';
