function Label({ children, color }) {
  const base =
    "rounded px-2 py-1 shadow-sm transition-shadow hover:shadow duration-300 ";
  const styles = {
    green: base + "bg-green-50 text-green-600",
    yellow: base + "bg-yellow-50 text-yellow-600",
    red: base + "bg-red-50 text-red-600",
    random: base + "bg-stone-50",
  };

  return <span className={styles[color]}>{children}</span>;
}

export default Label;
