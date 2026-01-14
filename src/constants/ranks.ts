import { Rank } from '@/types';

export const RANKS: Rank[] = [
  {
    tier: 'unranked',
    name: 'Unranked',
    minScore: 0,
    color: '#94a3b8',
    icon: '🎯'
  },
  {
    tier: 'bronze',
    name: 'Bronze',
    minScore: 70,
    color: '#cd7f32',
    icon: '🥉'
  },
  {
    tier: 'silver',
    name: 'Silver',
    minScore: 70,
    color: '#c0c0c0',
    icon: '🥈'
  },
  {
    tier: 'gold',
    name: 'Gold',
    minScore: 70,
    color: '#ffd700',
    icon: '🥇'
  },
  {
    tier: 'platinum',
    name: 'Platinum',
    minScore: 70,
    color: '#00d4ff',
    icon: '💎'
  },
  {
    tier: 'diamond',
    name: 'Diamond',
    minScore: 70,
    color: '#b9f2ff',
    icon: '💠'
  },
  {
    tier: 'master',
    name: 'Master',
    minScore: 70,
    color: '#a855f7',
    icon: '👑'
  }
];

export const PASS_THRESHOLD = 70; // 7 out of 10

export const getRankByTier = (tier: string) => RANKS.find(r => r.tier === tier) || RANKS[0];

export const getNextRank = (currentTier: string) => {
  const currentIndex = RANKS.findIndex(r => r.tier === currentTier);
  return currentIndex < RANKS.length - 1 ? RANKS[currentIndex + 1] : null;
};