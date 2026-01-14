import { useEffect, useState } from 'react';
import { useProgressStore } from '@/stores/progressStore';
import Dashboard from '@/pages/Dashboard';
import QuizPage from '@/pages/QuizPage';
import QuestionBankPage from '@/pages/QuestionBankPage';
import { Toaster } from '@/components/ui/toaster';

type Page = 'dashboard' | 'quiz' | 'question-bank';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const initializeProgress = useProgressStore(state => state.initializeProgress);

  useEffect(() => {
    initializeProgress();
  }, [initializeProgress]);

  const handleStartQuiz = (topicId: string) => {
    setSelectedTopicId(topicId);
    setCurrentPage('quiz');
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
    setSelectedTopicId(null);
  };

  const handleViewQuestionBank = () => {
    setCurrentPage('question-bank');
  };

  const handleBackFromQuestionBank = () => {
    setCurrentPage('dashboard');
  };

  return (
    <>
      {currentPage === 'dashboard' && (
        <Dashboard onStartQuiz={handleStartQuiz} onViewQuestionBank={handleViewQuestionBank} />
      )}
      {currentPage === 'quiz' && selectedTopicId && (
        <QuizPage topicId={selectedTopicId} onBack={handleBackToDashboard} />
      )}
      {currentPage === 'question-bank' && (
        <QuestionBankPage onBack={handleBackFromQuestionBank} />
      )}
      <Toaster />
    </>
  );
}

export default App;