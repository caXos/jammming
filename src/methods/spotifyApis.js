const stateKey = "spotify_auth_state";
const client_id = "34643a9bb95144ee936c43a5cf863256";
const redirect_uri = "http://localhost:3000/";
const scope = "playlist-modify-public";
/**
 * Obtains parameters from the hash of the URL
 * @return Object
 */
function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
function generateRandomString(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export async function spotifyAuthorize() {
  let client_id = "34643a9bb95144ee936c43a5cf863256";
  let redirect_uri = "http://localhost:3000/";
  let scope = "playlist-modify-public";
  window.open(
    `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}&show_dialog=true`,
    "_self",
    "width=800,height=600"
  );
}

export async function spotifyLogin() {
  let params = getHashParams();
  let access_token = params.access_token;

  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  });
  const responseJson = await response.json();
  // console.log(responseJson);
  return responseJson;
}