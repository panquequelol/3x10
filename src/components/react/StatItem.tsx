interface StatItemProps {
  label: string;
  value: string;
  className?: string;
}

export function StatItem({ label, value, className = '' }: StatItemProps) {
  return (
    <div className={`text-center stat-item scroll-reveal ${className}`}>
      <p className="font-sans text-[#e1ff76] text-[22px] mb-2">{label}</p>
      <p className="font-sans text-[#fffcf5] text-[40px] leading-[50px]">{value}</p>
    </div>
  );
}
