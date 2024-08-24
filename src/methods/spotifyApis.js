import { toast } from "react-toastify";
const stateKey = "spotify_auth_state";
const client_id = "35ae13f194984740bb42162e2d050fc4";
const redirect_uri = "https://jammming-jorge-henrique-bueno-gomezs-projects.vercel.app";

const scope = "playlist-modify-public user-read-private user-read-email";

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
  window.open(
    `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}&show_dialog=true`,
    "_self",
    "width=800,height=600"
  );
}

export async function spotifyLogin() {
  let params = getHashParams();
  let access_token = params.access_token;
  localStorage.setItem(stateKey, access_token);

  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  });

  if (response.status === 200 || response.status === 201) {
    const responseJson = await response.json();
    window.history.replaceState(null, "", redirect_uri);
    toast.success("Logged to Spotify!", {
      toastId: "loginSuccessToast",
    });

    return responseJson;
  } else {
    toast.error("Spotify login error: " + response.statusText);
  }
}

export async function getTracks(searchString, searchingToastId = null) {
  const uri = `https://api.spotify.com/v1/search?q=${searchString}?&type=track&limit=50`;
  const access_token = localStorage.getItem(stateKey);

  const response = await fetch(uri, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status === 200 || response.status === 201) {
    const responseJson = await response.json();
    return responseJson;
  } else {
    if (searchingToastId) {
      toast.update(searchingToastId, {
        render: "Spotify search error: " + response.statusText,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } else {
      toast.error("Spotify search error: " + response.statusText);
    }
  }
}

export async function getNextTracks(uri, searchNextTracksToastId = null) {
  const access_token = localStorage.getItem(stateKey);
  const response = await fetch(uri, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  if (response.status === 200 || response.status === 201) {
    const responseJson = await response.json();
    return responseJson;
  } else {
    if (searchNextTracksToastId) {
      toast.update(searchNextTracksToastId, {
        render: "Spotify search error: " + response.statusText,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } else {
      toast.error("Spotify search error: " + response.statusText);
    }
  }
}
export async function getPreviousTracks(
  uri,
  searchPreviousTracksToastId = null
) {
  const access_token = localStorage.getItem(stateKey);
  const response = await fetch(uri, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  if (response.status === 200 || response.status === 201) {
    const responseJson = await response.json();
    return responseJson;
  } else {
    if (searchPreviousTracksToastId) {
      toast.update(searchPreviousTracksToastId, {
        render: "Spotify search error: " + response.statusText,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } else {
      toast.error("Spotify search error: " + response.statusText);
    }
  }
}

export async function createPlaylist(
  userId,
  jammmName,
  submitFormToastId = null
) {
  const uri = `https://api.spotify.com/v1/users/${userId}/playlists`;
  const access_token = localStorage.getItem(stateKey);

  const response = await fetch(uri, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({
      name: jammmName,
      description:
        "Playlist created with Jammming! on " +
        new Date().toLocaleDateString() +
        " at " +
        new Date().toLocaleTimeString(),
      public: true,
      collaborative: false,
    }),
  });

  if (response.status === 200 || response.status === 201) {
    const responseJson = await response.json();
    return responseJson;
  } else {
    if (submitFormToastId) {
      toast.update(submitFormToastId, {
        render: "Error creating playlist: " + response.statusText,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } else {
      toast.error("Error creating playlist: " + response.statusText);
    }
  }
}

export async function addTracksToPlaylist(
  jammmId,
  uris,
  submitFormToastId = null
) {
  const uri = `https://api.spotify.com/v1/playlists/${jammmId}/tracks`;
  const access_token = localStorage.getItem(stateKey);

  const response = await fetch(uri, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({
      uris: uris,
    }),
  });

  if (response.status === 200 || response.status === 201) {
    const responseJson = await response.json();
    return responseJson;
  } else {
    if (submitFormToastId) {
      toast.update(submitFormToastId, {
        render: "Error creating playlist: " + response.statusText,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } else {
      toast.error("Error adding tracks to playlist: " + response.statusText);
    }
  }
}
