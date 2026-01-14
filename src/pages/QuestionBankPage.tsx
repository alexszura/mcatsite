import { useState } from 'react';
import { TOPICS } from '@/constants/topics';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, BookOpen } from 'lucide-react';
import { Subtopic } from '@/types';

interface SelectedSubtopic {
  subtopicId: string;
  subtopic: Subtopic;
  topicName: string;
}

export default function QuestionBankPage({ onBack }: { onBack: () => void }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState<SelectedSubtopic | null>(null);

  if (selectedSubtopic) {
    const { subtopic, topicName } = selectedSubtopic;

    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedSubtopic(null)}
            className="mb-6"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Subjects
          </Button>

          <div className="mb-8">
            <p className="text-muted-foreground mb-2">{topicName}</p>
            <h1 className="text-4xl font-bold mb-2">{subtopic.name}</h1>
            <p className="text-muted-foreground text-lg">{subtopic.description}</p>
          </div>

          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Total Questions: <span className="text-primary font-semibold">{subtopic.questions.length}</span>
            </p>
          </div>

          <div className="space-y-4">
            {subtopic.questions.map((question, index) => (
              <Card key={question.id} className="p-6 hover:bg-card/50 transition-colors">
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                    Question {index + 1}
                  </h3>
                  <p className="text-lg font-medium mb-4">{question.question}</p>
                </div>

                <div className="space-y-2 mb-4">
                  {question.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`p-3 rounded-lg border transition-colors ${
                        optionIndex === question.correctAnswer
                          ? 'border-green-500 bg-green-500/10'
                          : 'border-border/50 hover:bg-card/50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-sm font-semibold text-muted-foreground mt-0.5">
                          {String.fromCharCode(65 + optionIndex)}.
                        </span>
                        <span className="text-sm">
                          {option}
                          {optionIndex === question.correctAnswer && (
                            <span className="ml-2 text-green-500 font-semibold">✓ Correct</span>
                          )}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-blue-200 mb-2">Explanation:</p>
                  <p className="text-sm text-muted-foreground">{question.explanation}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Question Bank</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Browse all questions organized by subject and chapter
          </p>
        </div>

        <div className="space-y-8">
          {TOPICS.map((topic) => (
            <div key={topic.id}>
              <h2 className="text-2xl font-bold mb-4 text-primary">{topic.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {topic.subtopics.map((subtopic) => (
                  <Card
                    key={subtopic.id}
                    className="p-6 hover:shadow-lg hover:bg-card/60 cursor-pointer transition-all duration-300 border-border/50 hover:border-primary/50"
                    onClick={() => setSelectedSubtopic({ subtopicId: subtopic.id, subtopic, topicName: topic.name })}
                  >
                    <div className="mb-2">
                      <span className="text-xs text-muted-foreground font-semibold">
                        Chapter {subtopic.chapterNumber}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{subtopic.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{subtopic.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {subtopic.questions.length} questions
                      </span>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        View
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
