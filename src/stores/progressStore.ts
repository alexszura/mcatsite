import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProgress, RankTier } from '@/types';
import { TOPICS } from '@/constants/topics';
import { RANKS, getNextRank } from '@/constants/ranks';

interface ProgressStore {
  progress: Record<string, UserProgress>;
  initializeProgress: () => void;
  updateProgress: (topicId: string, score: number) => RankTier | null;
  getTopicProgress: (topicId: string) => UserProgress;
  getOverallRank: () => RankTier;
  resetProgress: () => void;
}

const getDefaultProgress = (topicId: string): UserProgress => ({
  topicId,
  currentRank: 'unranked',
  bestScore: 0,
  attempts: 0
});

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      progress: {},

      initializeProgress: () => {
        const currentProgress = get().progress;
        const newProgress = { ...currentProgress };
        
        TOPICS.forEach(topic => {
          // Initialize progress for each subtopic
          topic.subtopics.forEach(subtopic => {
            if (!newProgress[subtopic.id]) {
              newProgress[subtopic.id] = getDefaultProgress(subtopic.id);
            }
          });
        });
        
        set({ progress: newProgress });
      },

      updateProgress: (topicId: string, score: number) => {
        const currentProgress = get().progress[topicId] || getDefaultProgress(topicId);
        const percentage = score;
        
        // Update best score
        const newBestScore = Math.max(currentProgress.bestScore, percentage);
        
        // Determine if rank up
        let newRank = currentProgress.currentRank;
        let rankedUp = false;
        
        if (percentage >= 70) {
          const nextRank = getNextRank(currentProgress.currentRank);
          if (nextRank) {
            newRank = nextRank.tier;
            rankedUp = true;
          }
        }
        
        const updatedProgress: UserProgress = {
          ...currentProgress,
          currentRank: newRank,
          bestScore: newBestScore,
          attempts: currentProgress.attempts + 1,
          lastAttempt: new Date()
        };
        
        set(state => ({
          progress: {
            ...state.progress,
            [topicId]: updatedProgress
          }
        }));
        
        return rankedUp ? newRank : null;
      },

      getTopicProgress: (topicId: string) => {
        return get().progress[topicId] || getDefaultProgress(topicId);
      },

      getOverallRank: () => {
        const allProgress = Object.values(get().progress);
        if (allProgress.length === 0) return 'unranked';
        
        // Calculate average rank index
        const rankIndices = allProgress.map(p => {
          return RANKS.findIndex(r => r.tier === p.currentRank);
        });
        
        const avgIndex = Math.floor(
          rankIndices.reduce((sum, idx) => sum + idx, 0) / rankIndices.length
        );
        
        return RANKS[avgIndex].tier;
      },

      resetProgress: () => {
        set({ progress: {} });
        get().initializeProgress();
      }
    }),
    {
      name: 'mcat-progress-storage'
    }
  )
);