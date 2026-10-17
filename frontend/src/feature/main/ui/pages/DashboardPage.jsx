import AppHeader from '../components/AppHeader.jsx';
import DashboardHeader from '../components/DashboardHeader.jsx';
import StatsGrid from '../components/StatsGrid.jsx';
import ProgressCard from '../components/ProgressCard.jsx';
import QuestionsSection from '../components/QuestionSSection.jsx';
import QuestionModal from '../components/QuestionModal.jsx';
// 1. Ensure useEffect is imported
import { useContext, useState, useEffect } from 'react'; 
import { MainContext } from '../../../../app/context/MainContext.jsx';
import { QuestionCard } from '../components/QuestionCard.jsx';


const DashboardPage = () => {

  const {isModalOpen, setIsModalOpen, isQuestionCardOpen, setIsQuestionCardOpen} = useContext(MainContext)

  // 2. Lock / Unlock Body Scroll
  useEffect(() => {
    if (isModalOpen || isQuestionCardOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Clean up style if component unmounts unexpectedly
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isQuestionCardOpen]);

  return (
    <div className="min-h-screen bg-zinc-50 relative">
      <AppHeader />

      {/* 3. Changed absolute to fixed so overlays remain pinned over the viewport if the user was scrolled down */}
      {isModalOpen && 
        <div className='bg-neutral-500/80 fixed inset-0 z-999 p-10 overflow-y-auto flex items-center justify-center'>
          <QuestionModal setIsModalOpen={setIsModalOpen}/>
        </div>
      }

      {isQuestionCardOpen && 
        <div className='bg-neutral-500/80 fixed inset-0 z-999 p-10 overflow-y-auto flex items-center justify-center'>
          <QuestionCard setIsQuestionCardOpen={setIsQuestionCardOpen}/>
        </div>
      }

      <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
        <DashboardHeader />
        <StatsGrid />
        <ProgressCard />
        <QuestionsSection setIsModalOpen={setIsModalOpen}/>
        <footer className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-zinc-200 py-5 text-xs text-zinc-400 sm:flex-row">
          <span>© 2026 Interview Tracker</span>
          <span>Small steps every day lead to big results.</span>
        </footer>
      </main>
    </div>
  );
};

export default DashboardPage;
