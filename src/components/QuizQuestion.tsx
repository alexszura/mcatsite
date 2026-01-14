import { Question } from '@/types';
import { Button } from './ui/button';
import { HelpCircle } from 'lucide-react';

interface QuizQuestionProps {
  question: Question;
  selectedAnswer?: number;
  onSelectAnswer: (answerIndex: number) => void;
  questionNumber: number;
}

export default function QuizQuestion({ 
  question, 
  selectedAnswer, 
  onSelectAnswer,
  questionNumber 
}: QuizQuestionProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-8 shadow-lg animate-slide-up">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4 text-muted-foreground">
          <HelpCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Question {questionNumber}</span>
        </div>
        <h2 className="text-2xl font-semibold leading-relaxed">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const label = String.fromCharCode(65 + index); // A, B, C, D

          return (
            <Button
              key={index}
              variant={isSelected ? 'default' : 'outline'}
              className={`w-full justify-start text-left h-auto py-4 px-5 font-normal text-base ${
                isSelected ? 'border-primary ring-2 ring-primary/20' : 'hover:border-primary/50'
              }`}
              onClick={() => onSelectAnswer(index)}
            >
              <span className="flex items-start gap-4 w-full">
                <span 
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                    isSelected 
                      ? 'bg-primary-foreground text-primary' 
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {label}
                </span>
                <span className="flex-1 pt-1">{option}</span>
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}