const Card = ({children, className = ''}) => {
  return (
    <section
      className={`rounded-xl border border-zinc-200 bg-white shadow-sm ${className}`}
    >
      {children}
    </section>
  );
};

export default Card;