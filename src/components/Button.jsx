'use client';
export default function Button(props) {
  const type = props.type ? props.type : 'button';

  const handleClick = (event) => {
    event.preventDefault();
    props.action()
  };

  const color = props.color ? props.color : 'primary';

  return (
    <button
      type={type}
      className={`btn btn-${color} hover:btn-active`}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
}
