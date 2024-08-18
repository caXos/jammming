import AddIcon from "./Icon_Add";
import RemoveIcon from "./Icon_Remove";
import UpIcon from "./Icon_Up";
import DownIcon from "./Icon_Down";
import LeftIcon from "./Icon_Left";
import RightIcon from "./Icon_Right";

export default function CircleButton({ icon }) {
  switch (icon) {
    case "add":
      return (
        <button className="btn btn-xs btn-circle">
          <AddIcon />
        </button>
      );
      break;
    case "remove":
      return (
        <button className="btn btn-xs btn-circle">
          <RemoveIcon />
        </button>
      );
      break;
    case "up":
      return (
        <button className="btn btn-xs btn-circle">
          <UpIcon />
        </button>
      );
      break;
    case "down":
      return (
        <button className="btn btn-xs btn-circle">
          <DownIcon />
        </button>
      );
      break;
    case "left":
      return (
        <button className="btn btn-xs btn-circle">
          <LeftIcon />
        </button>
      );
      break;
    case "right":
      return (
        <button className="btn btn-xs btn-circle">
          <RightIcon />
        </button>
      );
      break;
    default:
      return <span>Error!</span>;
  }
}
