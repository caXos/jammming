import { concatenateArtistsNames } from "@/methods/concatenateArtistsNames";

export function sortTracks(tracksToBeSorted, sortBy) {
  switch (sortBy) {
    case "title":
      tracksToBeSorted.sort((track1, track2) => {
        let title1LowerCase = track1.name.toLowerCase();
        let title2LowerCase = track2.name.toLowerCase();
        if (title1LowerCase < title2LowerCase) return -1;
        if (title1LowerCase > title2LowerCase) return 1;
        return 0;
      });
      break;
    case "artist":
      tracksToBeSorted.sort((track1, track2) => {
        let artists1LowerCase = concatenateArtistsNames(
          track1["artists"]
        ).toLowerCase();
        let artists2LowerCase = concatenateArtistsNames(
          track2["artists"]
        ).toLowerCase();
        if (artists1LowerCase < artists2LowerCase) return -1;
        if (artists1LowerCase > artists2LowerCase) return 1;
        return 0;
      });
      break;
    case "album":
      tracksToBeSorted.sort((track1, track2) => {
        let album1LowerCase = track1.album.name.toLowerCase();
        let album2LowerCase = track2.album.name.toLowerCase();
        if (album1LowerCase < album2LowerCase) return -1;
        if (album1LowerCase > album2LowerCase) return 1;
        return 0;
      });
      break;
  }
  return tracksToBeSorted;
}
