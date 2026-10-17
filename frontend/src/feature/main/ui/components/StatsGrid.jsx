import { BookOpen, CheckCircle2, Code2, FolderGit2, MessageSquareText } from "lucide-react";
import StatCard from "./StatCard.jsx";
import { useContext } from "react";
import { MainContext } from "../../../../app/context/MainContext.jsx";

const StatsGrid = () => {
  const { totalQuestions, completedQuestions, progress, dsa, tech, github } =
    useContext(MainContext);

  const stats = [
    {
      label: "Total Questions",
      value: totalQuestions.length,
      note: "Questions in your list",
      icon: BookOpen,
      accent: "orange",
    },
    {
      label: "Completed",
      value: completedQuestions.length,
      note: progress.toFixed(2) + " % of all questions",
      icon: CheckCircle2,
      accent: "green",
    },

    {
      label: "DSA Problems",
      value: dsa.length,
      note: "Coding practice questions",
      icon: Code2,
      accent: "blue",
    },
    {
      label: "Technical Questions",
      value: tech.length,
      note: "Technical & behavioral",
      icon: MessageSquareText,
      accent: "purple",
    },
    {
      label: "Git & GitHub",
      value: github.length,
      note: "Version Control",
      icon: FolderGit2,
      accent: "cyan",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
};

export default StatsGrid;
