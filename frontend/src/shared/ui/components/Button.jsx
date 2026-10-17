const Button = ({children, variant = 'primary', className = '', ...props}) => {
  const styles = variant === 'primary'
    ? 'bg-orange-500 text-white shadow-sm hover:bg-orange-600'
    : variant === 'outline'
        ? 'border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50'
        : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800';

  return (
    <button
      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;