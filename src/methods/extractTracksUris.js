export function extractTracksUris(jammmTracks) {
    let tracksUrisArray = [];
    jammmTracks.forEach((track) => {
        tracksUrisArray.push(track.uri)
    })
    return tracksUrisArray
}