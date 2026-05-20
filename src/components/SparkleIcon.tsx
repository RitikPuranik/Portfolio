import { memo } from 'react';

interface SparkleIconProps {
  size?: number;
  className?: string;
  fill?: string;
}

const SparkleIcon = memo(function SparkleIcon({ size = 24, className = '', fill = '#F5B818' }: SparkleIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 0L13.8 10.2L24 12L13.8 13.8L12 24L10.2 13.8L0 12L10.2 10.2L12 0Z"
        fill={fill}
      />
    </svg>
  );
});

export default SparkleIcon;
