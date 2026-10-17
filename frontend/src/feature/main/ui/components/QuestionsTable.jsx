import { ChevronLeft, ChevronRight } from "lucide-react";
import QuestionRow from "./QuestionRow.jsx";
import { useContext } from "react";
import { MainContext } from "../../../../app/context/MainContext.jsx";

const QuestionsTable = () => {
  const {targetQuestions} = useContext(MainContext)
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-zinc-100 bg-zinc-50/70 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
              <th className="w-12 px-5 py-3.5">#</th>
              <th className="px-3 py-3.5">Question</th>
              <th className="px-3 py-3.5">Category</th>
              <th className="px-3 py-3.5">Difficulty</th>
              <th className="px-3 py-3.5">Status</th>
              <th className="px-4 py-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {targetQuestions.map((question, index) => (
              <QuestionRow
                key={question.id}
                question={question}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-3 border-t border-zinc-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-500">
          Showing <span className="font-semibold text-zinc-700">1–5</span> of{" "}
          <span className="font-semibold text-zinc-700">5</span> questions
        </p>
        <div className="flex items-center gap-1">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 text-zinc-400"
            aria-label="Previous page"
          >
            <ChevronLeft size={15} />
          </button>
          <button className="h-8 w-8 rounded-md bg-orange-500 text-xs font-semibold text-white">
            1
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 text-zinc-400"
            aria-label="Next page"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </>
  );
};

export default QuestionsTable;
