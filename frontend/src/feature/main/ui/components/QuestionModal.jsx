import {X, Plus, ChevronDown} from 'lucide-react';
import Button from '../../../../shared/ui/components/Button';
import { useQuestion } from '../../hooks/questionsHook';
import { useContext } from 'react';
import { MainContext } from '../../../../app/context/MainContext';

const Field = ({label, children}) => (
  <label className="block">
    <span className="mb-1.5 block text-sm font-medium text-zinc-700">
      {label}
    </span>
    {children}
  </label>
);
const inputClass =
  'h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-700 outline-none placeholder:text-zinc-400 focus:border-orange-300';

const QuestionModal = () => {

  const {register, handleSubmit, errors, addQuestion, editQuestion} = useQuestion()

  const {setIsModalOpen, question} = useContext(MainContext)

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
            <Plus size={19} />
          </div>
          <h2 className="mt-4 text-xl font-bold text-zinc-900">{question ? "Edit Question" : "Add Question"}</h2>
          <p className="mt-1 text-sm text-zinc-500">
            {question ? "Edit a question in your preperation list" : "Add a new question to your preparation list."}
          </p>
        </div>
        <button
          className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-100"
          aria-label="Close"
          onClick={()=>setIsModalOpen(false)}
        >
          <X size={18} />
        </button>
      </div>
      <form onSubmit={question ? handleSubmit(editQuestion) : handleSubmit(addQuestion)} className="mt-6 space-y-4">
        <Field label="Question title">
          <input 
          {...register('title', {
            required: 'Question Title is required'
          })}
          defaultValue={question ? question.title : ''}
          className={inputClass} placeholder="e.g. Two Sum" />
          {errors.title && <p className='text-red-600'>{errors.title.message}</p>}

        </Field>
        <Field label="Question link (optional)">
          <input
            {...register('link')}
            className={inputClass}
            defaultValue={question ? question.link : ''}
            placeholder="https://leetcode.com/..."
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Category">
            <div className="relative">
              <select
                {...register('category', {
                  required: 'Question category is required'
                })}
                defaultValue={question ? question.category : ''}
                className={`${inputClass} appearance-none`}
              >
                <option value="" disabled>Select category</option>
                <option value="DSA">DSA Problem</option>
                <option value="Tech">Technical Problem</option>
                <option value="Git">Git & GitHub Problem</option>
              </select>
              <ChevronDown
                size={15}
                className="pointer-events-none absolute right-3 top-3 text-zinc-400"
              />
            {errors.category && <p className='text-red-600'>{errors.category.message}</p>}

            </div>
          </Field>
          <Field label="Difficulty">
            <div className="relative">
              <select
                {...register('difficulty', {
                  required: 'Question difficulty is required'
                })}
                defaultValue={question ? question.difficulty : ''}
                className={`${inputClass} appearance-none`}
              >
                <option value="" disabled>Select difficulty</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
              <ChevronDown
                size={15}
                className="pointer-events-none absolute right-3 top-3 text-zinc-400"
              />
              {errors.difficulty && <p className='text-red-600'>{errors.difficulty.message}</p>}

            </div>
          </Field>
          <Field label="Status">
          <div className="relative">
            <select
              {...register('status', {
                required: 'Question status is required'
              })}
              defaultValue={question ? question.status : ''}
              className={`${inputClass} appearance-none`}
            >
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
            <ChevronDown
              size={15}
              className="pointer-events-none absolute right-3 top-3 text-zinc-400"
            />
          {errors.status && <p className='text-red-600'>{errors.status.message}</p>}
          </div>
        </Field>
        </div>
        
        <Field label="Notes (optional)">
          <textarea
            {...register('notes')}
            defaultValue={question ? question.notes : ""}
            rows="3"
            className="w-full resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-zinc-400 focus:border-orange-300"
            placeholder="Add notes or things to remember..."
          />
          {errors.notes && <p className='text-red-600'>{errors.notes.message}</p>}
        </Field>
        <div className="mt-6 flex justify-end gap-2 border-t border-zinc-100 pt-5">
          <Button variant="outline" onClick={()=>setIsModalOpen(false)}>Cancel</Button>
          <Button type="submit"><Plus size={15} /> {question ? "Edit Question" : "Add Question"}</Button>
        </div>
      </form>
    </div>
  );
};

export default QuestionModal;