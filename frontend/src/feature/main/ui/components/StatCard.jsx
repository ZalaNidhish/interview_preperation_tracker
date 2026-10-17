import Card from '../../../../shared/ui/components/Card';


const StatCard = ({label, value, note, icon: Icon, accent = 'orange'}) => {
const colors = {
    orange: 'bg-orange-50 text-orange-600',
    green: 'bg-emerald-50 text-emerald-600',
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-violet-50 text-violet-600',
    cyan: 'bg-cyan-50 text-cyan-600'
  };
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-zinc-500">{label}</p>
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${colors[accent]}`}
        >
          <Icon size={18} />
        </div>
      </div>
      <div className="mt-3 flex items-end justify-between">
        <div>
          <div className="text-3xl font-bold tracking-tight text-zinc-900">
            {value}
          </div>
          <p className="mt-1 text-xs text-zinc-500">{note}</p>
        </div>
      </div>
    </Card>
  );
};

export default StatCard;