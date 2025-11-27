
import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle2, XCircle, RefreshCcw, Trophy, BrainCircuit, ArrowRight } from 'lucide-react';

interface QuizModuleProps {
  questions: QuizQuestion[];
  isFinalQuiz?: boolean;
}

const QuizModule: React.FC<QuizModuleProps> = ({ questions, isFinalQuiz = false }) => {
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  // Initialize Quiz: Shuffle and Pick
  useEffect(() => {
    resetQuiz();
  }, [questions]);

  const resetQuiz = () => {
    // Determine how many questions to show
    // If Final Quiz: Pick 20 random. If Section Quiz: Pick 5 random (or all if less than 5).
    const count = isFinalQuiz ? 20 : 5;
    
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setActiveQuestions(shuffled.slice(0, count));
    
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setQuizStarted(false);
  };

  const handleOptionClick = (optionIndex: number) => {
    if (isAnswered) return;
    
    setSelectedOption(optionIndex);
    setIsAnswered(true);
    
    if (optionIndex === activeQuestions[currentIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  if (!quizStarted) {
    return (
      <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8 text-center">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <BrainCircuit className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
          {isFinalQuiz ? 'Final Comprehensive Mock Test' : 'Knowledge Check'}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
          {isFinalQuiz 
            ? `Ready to test your mastery? This quiz consists of 20 random questions from the entire syllabus.` 
            : `Test your understanding of this section with ${Math.min(questions.length, 5)} quick questions.`}
        </p>
        <button
          onClick={() => setQuizStarted(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors flex items-center gap-2 mx-auto"
        >
          Start Quiz <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  if (showScore) {
    const percentage = Math.round((score / activeQuestions.length) * 100);
    let message = '';
    if (percentage >= 80) message = "Excellent! You've mastered this topic.";
    else if (percentage >= 60) message = "Good job! A little more revision will make it perfect.";
    else message = "Keep studying! Review the notes and try again.";

    return (
      <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          {score} / {activeQuestions.length}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mb-6 font-medium">Score: {percentage}%</p>
        <p className="text-slate-700 dark:text-slate-300 mb-8 text-lg">{message}</p>
        <button
          onClick={resetQuiz}
          className="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center gap-2 mx-auto"
        >
          <RefreshCcw className="w-4 h-4" /> Retake Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = activeQuestions[currentIndex];

  return (
    <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
          Question {currentIndex + 1} of {activeQuestions.length}
        </span>
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
          Score: {score}
        </span>
      </div>

      <div className="p-6 md:p-8">
        <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-6 leading-relaxed">
          {currentQuestion.question}
        </h4>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            let buttonStyle = "border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700/50";
            let icon = null;

            if (isAnswered) {
              if (index === currentQuestion.correctAnswer) {
                buttonStyle = "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-300";
                icon = <CheckCircle2 className="w-5 h-5 text-green-500" />;
              } else if (index === selectedOption) {
                buttonStyle = "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-300";
                icon = <XCircle className="w-5 h-5 text-red-500" />;
              } else {
                buttonStyle = "opacity-50 border-slate-200 dark:border-slate-700";
              }
            } else if (selectedOption === index) {
              buttonStyle = "border-blue-500 bg-blue-50 dark:bg-blue-900/20";
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ${buttonStyle}`}
              >
                <span className="font-medium">{option}</span>
                {icon}
              </button>
            );
          })}
        </div>

        {/* Explanation Box */}
        {isAnswered && (
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 animate-in fade-in slide-in-from-top-2">
            <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-1">Explanation:</p>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Next Button */}
        {isAnswered && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center gap-2"
            >
              {currentIndex === activeQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModule;
