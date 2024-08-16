export default function calculateTotalTime(tracks) {
    let hours = 0, minutes = 0, seconds = 0;
    const timeStrings = [];
    tracks.forEach((track) => {
      let splitString = track.time.split(":");
      if (splitString.length === 1) {
        seconds += Number(splitString[0])
      } else {
        if (splitString.length === 2) {
          seconds += Number(splitString[1])
          minutes += Number(splitString[0])
        } else {
          seconds += Number(splitString[2])
          minutes += Number(splitString[1])
          hours += Number(splitString[0])
        }
      }
      timeStrings.push(track.time);
    })
    hours *= 60 * 60;
    minutes *= 60;
    let totalTime = hours + minutes + seconds;
    const hrs = ~~(totalTime / 3600);
    const mins = ~~((totalTime % 3600) / 60);
    const secs = ~~totalTime % 60;
  
    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";
  
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
  
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    
    return ret;
  }

  export function convertMsToMin(miliseconds) {
    const hrs = ~~(miliseconds / 3600);
    const mins = ~~((miliseconds % 3600) / 60);
    const secs = ~~miliseconds % 60;
  
    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";
  
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
  
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    
    return ret;
  }