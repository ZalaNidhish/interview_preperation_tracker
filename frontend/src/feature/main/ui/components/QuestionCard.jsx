import React, { useContext } from "react";
import { MainContext } from "../../../../app/context/MainContext";
import { X } from "lucide-react";

export const QuestionCard = () => {

    const {question, setIsQuestionCardOpen} = useContext(MainContext)

  const { title, category, difficulty, status, link, notes } = question;

  // Dynamic styles for the difficulty tags to match dashboard vibes
  const difficultyStyles = {
    Easy: "bg-green-50 text-green-700 border-green-200",
    Medium: "bg-amber-50 text-amber-700 border-amber-200",
    Hard: "bg-rose-50 text-rose-700 border-rose-200",
  };

  // Dynamic styles for status badges
  const statusStyles = {
    Completed: "bg-emerald-500 text-white",
    "In Progress": "bg-blue-500 text-white",
    "Not Started": "bg-gray-400 text-white",
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between max-w-md w-full">
      {/* Top Section: Header & Status Badge */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {title}
          </h3>
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ${statusStyles[status] || "bg-gray-500 text-white"}`}
          >
            {status}
          </span>
          <button
          className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-100"
          aria-label="Close"
          onClick={()=>setIsQuestionCardOpen(false)}
        >
          <X size={18} />
        </button>
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Category Tag */}
          <span className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md">
            {category}
          </span>
          {/* Difficulty Tag */}
          <span
            className={`text-xs font-medium px-2.5 py-1 border rounded-md ${difficultyStyles[difficulty] || "bg-gray-50 text-gray-600"}`}
          >
            {difficulty}
          </span>
        </div>

        {/* Notes Block */}
        {notes && (
          <div className="bg-gray-50 rounded-lg p-3 mb-4 border border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
              Notes
            </p>
            <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed whitespace-pre-line">
              {notes}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Section: Footer Actions */}
      <div className="flex items-center justify-between">
        {/* Practice Link */}
        {link ? (
          <a
            href={link.startsWith("http") ? link : `https://${link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-orange-600 hover:text-orange-700 hover:underline flex items-center gap-1"
          >
            Solve Problem
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        ) : (
          <span className="text-xs text-gray-400 italic">No link provided</span>
        )}

      </div>
    </div>
  );
};
