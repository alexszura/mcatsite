import { useState, useEffect } from 'react';
import { TOPICS } from '@/constants/topics';
import { Question, Subtopic } from '@/types';
import { useProgressStore } from '@/stores/progressStore';
import { RANKS } from '@/constants/ranks';
import QuizResults from '@/components/QuizResults';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

interface QuizPageProps {
  topicId: string;
  useAI: boolean;
  onBack: () => void;
}

// A mock function to simulate AI question generation
async function generateAIQuestions(topicName: string): Promise<Question[]> {
  console.log(`Generating AI questions for topic: ${topicName}`);
  // In a real app, you would make an API call to your AI service here.
  // For now, we'll return a sample set of AI-generated questions.
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 'ai-1',
          question: `This is an AI-generated question about ${topicName}. What is the capital of France?`,
          options: ['Paris', 'London', 'Berlin', 'Madrid'],
          correctAnswer: 0,
          explanation: 'Paris is the capital of France.',
        },
        {
          id: 'ai-2',
          question: `Another AI question for ${topicName}. What is 2 + 2?`,
          options: ['3', '4', '5', '6'],
          correctAnswer: 1,
          explanation: '2 + 2 equals 4.',
        },
      ]);
    }, 1000);
  });
}

export default function QuizPage({ topicId, useAI, onBack }: QuizPageProps) {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Find the subtopic (topicId is actually a subtopic id now)
  let subtopic: Subtopic | undefined;
  let parentTopic = TOPICS.find(t => t.subtopics.some(st => st.id === topicId));
  
  if (parentTopic) {
    subtopic = parentTopic.subtopics.find(st => st.id === topicId);
  }

  const getTopicProgress = useProgressStore(state => state.getTopicProgress);
  const updateProgress = useProgressStore(state => state.updateProgress);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (!subtopic) {
      onBack();
      return;
    }

    const fetchQuestions = async () => {
      setIsLoading(true);
      if (useAI) {
        const aiQuestions = await generateAIQuestions(subtopic.name);
        setQuizQuestions(aiQuestions);
      } else {
        // Get current rank for this topic
        const progress = getTopicProgress(topicId);
        const currentRankIndex = RANKS.findIndex(r => r.tier === progress.currentRank);
        
        // Start with subtopic questions
        let allQuestions = [...subtopic.questions];
        
        // As rank increases, include questions from other chapters
        if (currentRankIndex >= 2 && parentTopic) { // Silver and above
          const otherSubtopics = parentTopic.subtopics.filter(st => st.id !== topicId);
          otherSubtopics.forEach(st => {
            allQuestions = allQuestions.concat(st.questions);
          });
        }
        
        if (currentRankIndex >= 4 && parentTopic) { // Platinum and above - add related subjects
          const relatedSubjects = TOPICS.filter(t => 
            t.id !== parentTopic.id && t.category === parentTopic.category
          );
          relatedSubjects.forEach(subject => {
            subject.subtopics.forEach(st => {
              allQuestions = allQuestions.concat(st.questions);
            });
          });
        }
        
        if (currentRankIndex >= 6) { // Master - all questions in category
          TOPICS.filter(t => t.category === parentTopic?.category).forEach(subject => {
            subject.subtopics.forEach(st => {
              allQuestions = allQuestions.concat(st.questions);
            });
          });
        }
        
        // Shuffle and take 10 questions
        const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
        setQuizQuestions(shuffled.slice(0, 10));
      }
      setIsLoading(false);
    };

    fetchQuestions();
  }, [topicId, useAI, subtopic, parentTopic, getTopicProgress, onBack]);

  if (isLoading) {
    return <div>Loading questions...</div>; // Or a spinner component
  }

  if (!subtopic || !parentTopic) return null;

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleSelectAnswer = (answerIndex: number) => {
    if (!showFeedback) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer !== null) {
      setAnswers(prev => ({ ...prev, [currentQuestion.id]: selectedAnswer }));
      setShowFeedback(true);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // Calculate score
      const correctCount = quizQuestions.filter(
        q => answers[q.id] === q.correctAnswer
      ).length;
      const percentage = Math.round((correctCount / quizQuestions.length) * 100);
      
      // Update progress
      updateProgress(topicId, percentage);
      setShowResults(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setAnswers({});
    setShowResults(false);
    // Note: re-fetching questions might be desired on retry
  };

  if (showResults) {
    const correctCount = quizQuestions.filter(
      q => answers[q.id] === q.correctAnswer
    ).length;
    
    return (
      <QuizResults
        topicId={topicId}
        topicName={parentTopic.name}
        questions={quizQuestions}
        answers={answers}
        score={correctCount}
        total={quizQuestions.length}
        onRetry={handleRetry}
        onBack={onBack}
      />
    );
  }
  
  if (quizQuestions.length === 0) {
    return <div>No questions available for this topic.</div>; // Handle case where no questions are loaded
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{subtopic.name}</span>
              <span className="text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Question */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-lg animate-slide-up">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4 text-muted-foreground">
              <HelpCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Question {currentQuestionIndex + 1}</span>
            </div>
            <h2 className="text-2xl font-semibold leading-relaxed">
              {currentQuestion.question}
            </h2>
          </div>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === currentQuestion.correctAnswer;
              const label = String.fromCharCode(65 + index); // A, B, C, D

              let buttonClass = 'w-full justify-start text-left h-auto py-4 px-5 font-normal text-base';
              let variant: "default" | "outline" = "outline";
              
              if (showFeedback) {
                if (isCorrectAnswer) {
                  buttonClass += ' bg-green-500/20 border-green-500 hover:bg-green-500/20';
                } else if (isSelected) {
                  buttonClass += ' bg-red-500/20 border-red-500 hover:bg-red-500/20';
                }
              } else if (isSelected) {
                variant = "default";
                buttonClass += ' border-primary ring-2 ring-primary/20';
              } else {
                buttonClass += ' hover:border-primary/50';
              }

              return (
                <Button
                  key={index}
                  variant={variant}
                  className={buttonClass}
                  onClick={() => handleSelectAnswer(index)}
                  disabled={showFeedback}
                >
                  <span className="flex items-start gap-4 w-full">
                    <span 
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                        showFeedback && isCorrectAnswer
                          ? 'bg-green-500 text-white'
                          : showFeedback && isSelected
                          ? 'bg-red-500 text-white'
                          : isSelected 
                          ? 'bg-primary-foreground text-primary' 
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {label}
                    </span>
                    <span className="flex-1 pt-1">{option}</span>
                    {showFeedback && isCorrectAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    )}
                    {showFeedback && isSelected && !isCorrectAnswer && (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                  </span>
                </Button>
              );
            })}
          </div>

          {/* Feedback Section */}
          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg border animate-slide-up ${
              isCorrect 
                ? 'bg-green-500/10 border-green-500/30' 
                : 'bg-red-500/10 border-red-500/30'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-green-500">Correct!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="font-semibold text-red-500">Incorrect</span>
                  </>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-8">
          {!showFeedback ? (
            <Button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="w-full"
              size="lg"
            >
              Submit Answer
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="w-full"
              size="lg"
            >
              {currentQuestionIndex === quizQuestions.length - 1 ? 'View Results' : 'Next Question'}
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}
