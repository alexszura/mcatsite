import { Question, RankTier } from '@/types';
import { useProgressStore } from '@/stores/progressStore';
import { RANKS, getRankByTier } from '@/constants/ranks';
import RankBadge from './RankBadge';
import Footer from './Footer';
import { Button } from './ui/button';
import { ArrowLeft, RefreshCw, Trophy, CheckCircle2, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

interface QuizResultsProps {
  topicId: string;
  topicName: string;
  questions: Question[];
  answers: Record<string, number>;
  score: number;
  total: number;
  onRetry: () => void;
  onBack: () => void;
}

export default function QuizResults({
  topicId,
  topicName,
  questions,
  answers,
  score,
  total,
  onRetry,
  onBack
}: QuizResultsProps) {
  const { toast } = useToast();
  const getTopicProgress = useProgressStore(state => state.getTopicProgress);
  const progress = getTopicProgress(topicId);
  
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 70;
  const currentRank = getRankByTier(progress.currentRank);

  useEffect(() => {
    if (passed && progress.currentRank !== 'master') {
      toast({
        title: '🎉 Rank Up!',
        description: `Congratulations! You are now ${currentRank.name}!`,
        duration: 5000
      });
    }
  }, [passed, currentRank.name, progress.currentRank, toast]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Results Summary */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-lg mb-8 text-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{topicName}</h2>
            <p className="text-muted-foreground">Quiz Complete!</p>
          </div>

          <div className="flex justify-center mb-6">
            <RankBadge 
              rank={currentRank} 
              size="large" 
              showGlow={passed && currentRank.tier === 'master'} 
            />
          </div>

          <div className="mb-6">
            <div className="text-5xl font-bold mb-2" style={{ color: currentRank.color }}>
              {percentage}%
            </div>
            <p className="text-xl text-muted-foreground">
              {score} out of {total} correct
            </p>
          </div>

          {passed ? (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-green-500">
                  {currentRank.tier === 'master' ? 'Master Rank Maintained!' : 'Rank Up!'}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {currentRank.tier === 'master' 
                  ? "You're at the highest rank. Keep practicing to maintain mastery!"
                  : `You've advanced to ${currentRank.name} rank!`
                }
              </p>
            </div>
          ) : (
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg mb-6">
              <p className="font-semibold text-yellow-500 mb-1">Keep Trying!</p>
              <p className="text-sm text-muted-foreground">
                You need 70% or higher to rank up. Review the answers below and try again!
              </p>
            </div>
          )}

          <div className="flex gap-4 justify-center">
            <Button onClick={onRetry} className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Retry Quiz
            </Button>
            <Button variant="outline" onClick={onBack}>
              Back to Dashboard
            </Button>
          </div>
        </div>

        {/* Answer Review */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Answer Review</h3>
          
          {questions.map((question, index) => {
            const userAnswer = answers[question.id];
            const isCorrect = userAnswer === question.correctAnswer;
            const label = String.fromCharCode(65 + question.correctAnswer);

            return (
              <div 
                key={question.id}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-2">Question {index + 1}</p>
                    <p className="font-semibold text-lg mb-4">{question.question}</p>
                    
                    <div className="space-y-2 mb-4">
                      {question.options.map((option, optIndex) => {
                        const isUserAnswer = userAnswer === optIndex;
                        const isCorrectAnswer = question.correctAnswer === optIndex;
                        
                        return (
                          <div
                            key={optIndex}
                            className={`p-3 rounded-lg border ${
                              isCorrectAnswer
                                ? 'bg-green-500/10 border-green-500/30'
                                : isUserAnswer
                                ? 'bg-red-500/10 border-red-500/30'
                                : 'bg-muted/30 border-border'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-muted-foreground">
                                {String.fromCharCode(65 + optIndex)}.
                              </span>
                              <span className={isCorrectAnswer ? 'font-medium' : ''}>
                                {option}
                              </span>
                              {isCorrectAnswer && (
                                <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />
                              )}
                              {isUserAnswer && !isCorrectAnswer && (
                                <XCircle className="w-4 h-4 text-red-500 ml-auto" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm font-medium mb-1 text-primary">
                        Explanation (Correct: {label})
                      </p>
                      <p className="text-sm text-muted-foreground">{question.explanation}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
