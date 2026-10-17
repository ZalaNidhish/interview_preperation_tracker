import {useContext, useEffect, useState} from 'react';
import {SlidersHorizontal, ChevronDown} from 'lucide-react';
import { MainContext } from '../../../../app/context/MainContext';

const QuestionsToolbar = () => {

  const {otherFilters, setOtherFilters, setFilter} = useContext(MainContext)
  const [category, setCategory] = useState('all')
  const [status, setStatus] = useState('all')
  const [difficulty, setDifficulty] = useState('all')

  useEffect(()=>{
    setOtherFilters([category, difficulty, status])
  }, [category, status, difficulty])

  return (
    <div className="flex flex-col gap-3 border-b border-zinc-100 p-3 sm:p-4 lg:flex-row lg:items-center lg:justify-between lg:px-5">
      <div className="relative w-full lg:max-w-xs">
        <input
          aria-label="Search questions"
          onChange={e => {
            setFilter(e.target.value);
          }}
          placeholder="Search questions..."
          className="h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm outline-none placeholder:text-zinc-400 focus:border-orange-300"
        />
      </div>

      <div className="flex w-full items-center gap-2 lg:w-auto lg:justify-end">
        <span className="mr-1 hidden items-center gap-1 text-xs font-medium text-zinc-500 md:flex">
          <SlidersHorizontal size={14} /> Filters
        </span>

        <select onChange={(e)=>setCategory(e.target.value)} className="inline-flex h-9 w-full items-center justify-between gap-2 rounded-lg border border-zinc-200 bg-white px-2.5 text-xs font-medium text-zinc-600 transition-colors hover:border-orange-300 hover:bg-orange-50/30 sm:min-w-32 sm:px-3">
          <ChevronDown
              size={13}
              className={`shrink-0 text-zinc-400 transition-transform`}
          />
          <option value="all">All Category</option>
          <option value="DSA">DSA</option>
          <option value="Tech">Tech</option>
          <option value="Git">Github</option>
      </select>

       <select onChange={(e)=>setDifficulty(e.target.value)} className="inline-flex h-9 w-full items-center justify-between gap-2 rounded-lg border border-zinc-200 bg-white px-2.5 text-xs font-medium text-zinc-600 transition-colors hover:border-orange-300 hover:bg-orange-50/30 sm:min-w-32 sm:px-3">
          <ChevronDown
              size={13}
              className={`shrink-0 text-zinc-400 transition-transform`}
          />
          <option value="all">All Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
      </select>

      <select onChange={(e)=>setStatus(e.target.value)} className="inline-flex h-9 w-full items-center justify-between gap-2 rounded-lg border border-zinc-200 bg-white px-2.5 text-xs font-medium text-zinc-600 transition-colors hover:border-orange-300 hover:bg-orange-50/30 sm:min-w-32 sm:px-3">
        <ChevronDown
            size={13}
            className={`shrink-0 text-zinc-400 transition-transform`}
        />
        <option value="all">All Statuses</option>
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
        
      </div>
    </div>
  );
};

export default QuestionsToolbar;