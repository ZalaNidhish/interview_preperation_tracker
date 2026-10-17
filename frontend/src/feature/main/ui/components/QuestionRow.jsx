import {MoreHorizontal, Pencil, Trash2, ExternalLink} from 'lucide-react';
import Badge from '../../../../shared/ui/components/Badge';
import { useQuestion } from '../../hooks/questionsHook';
import { useContext } from 'react';
import { MainContext } from '../../../../app/context/MainContext';

const QuestionRow = ({question, index}) => {
  
  const {deleteQuestion} = useQuestion()
  const {setIsQuestionCardOpen, isQuestionCardOpen, setQuestion, isModelOpen, setIsModalOpen} = useContext(MainContext)

  return (
    <tr className="group border-b border-zinc-100 last:border-0 hover:bg-zinc-50/70">
      <td className="w-12 px-5 py-4 text-xs text-zinc-400">
        {String (index + 1).padStart (2, '0')}
      </td>
      <td className="min-w-[230px] px-3 py-4">
        <div className="font-semibold text-zinc-800">{question.title}</div>
        <div className="mt-1 flex items-center gap-1 text-xs text-zinc-400">
          {question.source}<ExternalLink size={11} />
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-600">
        {question.category}
      </td>
      <td className="px-3 py-4"><Badge>{question.difficulty}</Badge></td>
      <td className="px-3 py-4"><Badge>{question.status}</Badge></td>
      <td className="px-4 py-4">
        <div className="flex items-center justify-end gap-1 opacity-70 transition-opacity group-hover:opacity-100">
          <button
            onClick={()=>{
              setIsModalOpen(true)
              setQuestion(question)
            }}
            className="rounded-md p-1.5 text-zinc-500 hover:bg-orange-50 hover:text-orange-600"
            aria-label="Edit question"
          >
            <Pencil size={15} />
          </button>
          <button
            onClick={()=>{deleteQuestion(question.id)}}
            className="rounded-md p-1.5 text-zinc-500 hover:bg-rose-50 hover:text-rose-600"
            aria-label="Delete question"
          >
            <Trash2 size={15} />
          </button>
          <button
            onClick={()=>{
              setQuestion(question)
              setIsQuestionCardOpen(true)
            }}
            className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-100"
            aria-label="More options"
          >
            <MoreHorizontal size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default QuestionRow;