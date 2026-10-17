import {ListFilter, Plus} from 'lucide-react';
import Card from '../../../../shared/ui/components/Card';
import Button from '../../../../shared/ui/components/Button.jsx';
import QuestionsToolbar from './QuestionsToolbar.jsx';
import QuestionsTable from './QuestionsTable.jsx';
import { useContext } from 'react';
import { MainContext } from '../../../../app/context/MainContext.jsx';

const QuestionsSection = () => {

  const {setIsModalOpen, totalQuestions} = useContext(MainContext)

  return (
    <section className="mt-7">

      <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-lg font-bold tracking-tight text-zinc-900">
            Your Questions
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Manage and review your interview practice list.
          </p>
        </div>
        <span onClick={()=>{setIsModalOpen(true)}}>
          <Button><Plus size={16} /> Add Question</Button>
        </span>
      </div>
      <Card className="overflow-hidden">
        <div className="flex items-center justify-between px-5 pb-1 pt-5">
          <div className="flex items-center gap-2">
            <ListFilter size={16} className="text-orange-500" />
            <h3 className="text-sm font-semibold text-zinc-800">
              All Questions
            </h3>
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-semibold text-zinc-600">
              {totalQuestions.length}
            </span>
          </div>
          <span className="text-xs text-zinc-400">Last updated today</span>
        </div>
        <QuestionsToolbar />
        <QuestionsTable />
      </Card>
    </section>
  );
};

export default QuestionsSection;