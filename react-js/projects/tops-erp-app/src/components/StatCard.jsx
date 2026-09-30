export default function StatCard({
  title,
  value,
  icon,
  description,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-2xl border border-slate-200
        bg-white p-5 shadow-sm
        transition duration-300
        hover:-translate-y-1 hover:shadow-xl
        ${className}
      `}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-extrabold text-slate-950">
            {value}
          </h3>

          <p className="mt-2 text-xs text-slate-400">
            {description}
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-950">
          {icon}
        </div>
      </div>
    </div>
  );
}