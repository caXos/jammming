import localFont from "next/font/local";
import Button from "./Button";

const amVinylFont = localFont({ src: "../fonts/AMVINYL-Heavy.ttf" });

export default function JammmLink({jammmUri}) {
  const openJammmInNewTab = () => {
    window.open(jammmUri, '_blank')
  }
  
  return (
    <div className="flex flex-col items-center justify-between bg-base-200 p-2 gap-2 rounded-md w-11/12">
      <span
        className={`text-2xl text-primary text-center ${amVinylFont.className}`}
      >
        Jammm! Link
      </span>
      <div className="flex flex-col items-center justify-evenly bg-base-300 p-2 gap-2 rounded-2xl w-full text-accent">
        <p>Here it is! Your new Jammm!</p>
        <Button color='success' customClass='text-white' action={openJammmInNewTab} >Click here to visit your Jammm! in a new tab/window</Button>
      </div>
    </div>
  );
}
