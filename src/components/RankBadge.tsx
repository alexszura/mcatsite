import { Rank } from '@/types';

interface RankBadgeProps {
  rank: Rank;
  size?: 'small' | 'medium' | 'large';
  showGlow?: boolean;
}

export default function RankBadge({ rank, size = 'medium', showGlow = false }: RankBadgeProps) {
  const sizeClasses = {
    small: 'w-12 h-12 text-2xl',
    medium: 'w-16 h-16 text-3xl',
    large: 'w-24 h-24 text-5xl'
  };

  const glowClass = showGlow && rank.tier === 'master' ? 'animate-rank-glow' : '';

  return (
    <div 
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center border-4 ${glowClass}`}
      style={{ 
        backgroundColor: `${rank.color}20`,
        borderColor: rank.color
      }}
    >
      <span>{rank.icon}</span>
    </div>
  );
}