const DashboardHeader = () => {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-[27px]">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Track your interview preparation progress in one place.
        </p>
      </div>
    </div>
  );
};

export default DashboardHeader;
