
// export default function Button ({ props }) {
//     const color = props.color ? props.color : '';
//     const type = props.type;

//     const handleClick = (evt) => {
//         evt.preventDefault();
//         console.log('eizem')
//     }

//     const className = `btn btn-${color} hover:btn-active`
//     return(
//         <button className="btn hover:btn-active" onClick={handleClick}>Button</button>
//     );
// }

export default function Button(props) {
    console.log(props);
    const color = props.color ? props.color : '';
    return (<button className={`btn btn-${color} hover:btn-active`}>{props.children}</button>)
}