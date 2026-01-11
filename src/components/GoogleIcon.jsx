export default function GoogleIcon({
  name,
  size = "text-2xl",
  color = "text-white",
  className = "",
}) {
  return (
    <span className={`material-symbols-outlined ${size} ${color} ${className}`}>
      {name}
    </span>
  );
}
