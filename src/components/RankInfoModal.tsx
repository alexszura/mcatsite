import { RANKS } from '@/constants/ranks';
import RankBadge from './RankBadge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Target } from 'lucide-react';

interface RankInfoModalProps {
  open: boolean;
  onClose: () => void;
}

export default function RankInfoModal({ open, onClose }: RankInfoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            Ranking System
          </DialogTitle>
          <DialogDescription>
            Progress through ranks by scoring 70% or higher on quizzes. Your overall rank is the average of all your topic ranks.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {RANKS.map((rank, index) => (
            <div
              key={rank.tier}
              className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
            >
              <RankBadge rank={rank} size="small" showGlow={rank.tier === 'master'} />
              <div className="flex-1">
                <h3 className="font-semibold text-lg" style={{ color: rank.color }}>
                  {rank.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {index === 0 
                    ? 'Starting rank for all new topics'
                    : index === RANKS.length - 1
                    ? 'Maximum rank - you have mastered this topic!'
                    : `Score 70%+ to advance from ${RANKS[index - 1].name}`
                  }
                </p>
              </div>
              {index !== RANKS.length - 1 && (
                <div className="text-sm font-medium text-muted-foreground">
                  {rank.minScore}%+
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            Pro Tips
          </h4>
          <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
            <li>You need 7 out of 10 correct to rank up</li>
            <li>You can retake quizzes unlimited times</li>
            <li>Your best score is saved for each topic</li>
            <li>Overall rank = average of all topic ranks</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}