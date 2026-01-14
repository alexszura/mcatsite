import { Topic, UserProgress } from '@/types';
import { RANKS, getNextRank } from '@/constants/ranks';
import RankBadge from './RankBadge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Play, Trophy } from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
  progress?: UserProgress;
  onStartQuiz: () => void;
}

export default function TopicCard({ topic, progress, onStartQuiz }: TopicCardProps) {
  const currentRank = RANKS.find(r => r.tier === (progress?.currentRank || 'unranked')) || RANKS[0];
  const nextRank = getNextRank(currentRank.tier);
  const bestScore = progress?.bestScore || 0;

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-lg font-semibold">{topic.name}</h4>
            <Trophy className="w-4 h-4 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground mb-2">{topic.category}</p>
          <p className="text-sm text-muted-foreground/80">{topic.description}</p>
        </div>
        <div className="ml-4">
          <RankBadge rank={currentRank} size="medium" />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium" style={{ color: currentRank.color }}>
              {currentRank.name}
            </span>
            {nextRank ? (
              <span className="text-muted-foreground">
                Next: {nextRank.name}
              </span>
            ) : (
              <span className="text-primary font-semibold">MAX RANK! 🎉</span>
            )}
          </div>
          <Progress value={bestScore} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>Best: {bestScore}%</span>
            <span>{progress?.attempts || 0} attempts</span>
          </div>
        </div>

        <Button onClick={onStartQuiz} className="w-full gap-2">
          <Play className="w-4 h-4" />
          {progress?.attempts ? 'Practice Again' : 'Start Quiz'}
        </Button>
      </div>
    </div>
  );
}