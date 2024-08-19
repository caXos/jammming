export default function calculateTotalTime(tracks) {
    let totalTime = 0;
    tracks.forEach((track) => {
      totalTime += track.duration_ms;
    })
    totalTime /= 1000;
    
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