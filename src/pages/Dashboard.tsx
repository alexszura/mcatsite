import { useState } from 'react';
import { useProgressStore } from '@/stores/progressStore';
import { TOPICS } from '@/constants/topics';
import { RANKS } from '@/constants/ranks';
import RankBadge from '@/components/RankBadge';
import RankInfoModal from '@/components/RankInfoModal';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Trophy, Info, BookOpen } from 'lucide-react';

interface DashboardProps {
  onStartQuiz: (topicId: string) => void;
  onViewQuestionBank: () => void;
}

export default function Dashboard({ onStartQuiz, onViewQuestionBank }: DashboardProps) {
  const [showRankInfo, setShowRankInfo] = useState(false);
  const { progress, getOverallRank } = useProgressStore();
  
  const overallRank = getOverallRank();
  const overallRankData = RANKS.find(r => r.tier === overallRank) || RANKS[0];

  const totalAttempts = Object.values(progress).reduce((sum, p) => sum + p.attempts, 0);
  const avgScore = Object.values(progress).length > 0
    ? Math.round(Object.values(progress).reduce((sum, p) => sum + p.bestScore, 0) / Object.values(progress).length)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold">MCAT Rank Quest</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onViewQuestionBank}
                className="gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Question Bank
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowRankInfo(true)}
                className="gap-2"
              >
                <Info className="w-4 h-4" />
                Rank Info
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Overall Rank Section */}
        <section className="mb-12">
          <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <p className="text-muted-foreground text-sm font-medium mb-3">YOUR OVERALL RANK</p>
              <div className="flex justify-center mb-4">
                <RankBadge rank={overallRankData} size="large" showGlow />
              </div>
              <h2 className="text-4xl font-bold mb-2" style={{ color: overallRankData.color }}>
                {overallRankData.name}
              </h2>
              <p className="text-muted-foreground">
                Complete more topics to increase your rank
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto">
              <div className="bg-secondary/50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{totalAttempts}</p>
                <p className="text-sm text-muted-foreground">Total Attempts</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{avgScore}%</p>
                <p className="text-sm text-muted-foreground">Average Score</p>
              </div>
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Study Subjects</h3>
          <div className="space-y-6">
            {TOPICS.map(topic => (
              <div key={topic.id} className="bg-card border border-border rounded-xl p-6">
                <div className="mb-4">
                  <h4 className="text-xl font-bold mb-1">{topic.name}</h4>
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                </div>
                
                <div className="space-y-3">
                  {topic.subtopics.map(subtopic => (
                    <div
                      key={subtopic.id}
                      onClick={() => onStartQuiz(subtopic.id)}
                      className="bg-secondary/50 hover:bg-secondary/80 border border-border/50 hover:border-primary/50 rounded-lg p-4 cursor-pointer transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                            Chapter {subtopic.chapterNumber}
                          </p>
                          <p className="font-medium">{subtopic.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">{subtopic.questions.length} questions</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-primary group-hover:scale-110 transition-transform">
                            →
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <RankInfoModal open={showRankInfo} onClose={() => setShowRankInfo(false)} />
    </div>
  );
}