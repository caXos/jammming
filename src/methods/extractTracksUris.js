export function extractTracksUris(jammmTracks) {
    let tracksUrisArray = [];
    jammmTracks.forEach((track) => {
        console.log(track)
        tracksUrisArray.push(track.uri)
    })
    return tracksUrisArray
}