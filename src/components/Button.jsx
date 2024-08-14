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

  if (disabled) {
    return (
      <div className="tooltip" data-tip={tooltipText}>
        <button
          type={type}
          className={`btn btn-ghost hover:btn-active`}
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
          className={`btn btn-${color} hover:btn-active`}
          onClick={handleClick}
        >
          {props.children}
        </button>
      </div>
    );
  }
}
