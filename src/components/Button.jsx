"use client";
export default function Button(props) {
  const type = props.type ? props.type : "button";

  const handleClick = (event) => {
    event.preventDefault();
    props.action();
  };

  const color = props.color ? props.color : "primary";

  const disabled = props.disabled ? "disabled" : "";

  const tooltipText = props.tooltipText ? props.tooltipText : null;

  const customClass = props.customClass ? props.customClass : '';

  if (disabled) {
    return (
      <div className="tooltip" data-tip={tooltipText}>
        <button
          type={type}
          className={`btn btn-ghost hover:btn-active ${customClass}`}
          disabled
        >
          {props.children}
        </button>
      </div>
    );
  } else {
    return (
      <div className="tooltip" data-tip={tooltipText}>
        <button
          type={type}
          className={`btn btn-${color} hover:btn-active ${customClass}`}
          onClick={handleClick}
        >
          {props.children}
        </button>
      </div>
    );
  }
}
