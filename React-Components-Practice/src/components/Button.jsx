
function Button({
  text,
  variant = "primary",
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`custom-button ${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
