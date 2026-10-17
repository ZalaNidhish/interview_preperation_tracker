import {ArrowUpRight, Target} from 'lucide-react';
import Card from '../../../../shared/ui/components/Card';
import { useContext } from 'react';
import { MainContext } from '../../../../app/context/MainContext';

const ProgressCard = () => {

  const {progress} = useContext(MainContext)

  return (
    <Card className="mt-5 p-5 sm:p-6 relative overflow-hidden">

      <div className='bg-orange-500/20 top-0 left-0 h-full absolute' style={{ width: `${progress.toFixed(2)}%` }}>
      </div>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
              <Target size={17} />
            </div>
            <h2 className="font-semibold text-zinc-900">
              Overall Preparation Progress
            </h2>
          </div>
          <p className="mt-2 text-sm text-zinc-500">
            You're building great momentum. Keep it up!
          </p>
        </div>
        <div className="flex items-center gap-2 self-start rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-semibold text-emerald-700 sm:self-center">
          <ArrowUpRight size={14} /> {progress.toFixed(2)}% complete
        </div>
      </div>
    </Card>
  );
};

export default ProgressCard;