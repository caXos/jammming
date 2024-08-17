export function concatenateArtistsNames(artistsNamesArray) {
  let artistsNames = "";
  artistsNamesArray.forEach((artist, index, artistsNamesArray) => {
    if (index + 1 < artistsNamesArray.length) {
      artistsNames += artist.name + ", ";
    } else {
      artistsNames += artist.name;
    }
  });
  return artistsNames;
}
