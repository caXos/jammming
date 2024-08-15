import { toast } from "react-toastify";
var stateKey = "spotify_auth_state";

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

export async function spotifyLoginbckp() {
  var params = getHashParams();
  var access_token = params.access_token,
    state = params.state,
    storedState = localStorage.getItem(stateKey);

  //   var client_id = "34643a9bb95144ee936c43a5cf863256"; //change this before pushing
  //   var redirect_uri = "http://localhost:3000/";

  //   var state = generateRandomString(16);

  //   localStorage.setItem(stateKey, state);
  //   var scope = "playlist-modify-public";

  //   var url = "https://accounts.spotify.com/authorize";
  //   url += "?response_type=token";
  //   url += "&client_id=" + encodeURIComponent(client_id);
  //   url += "&scope=" + encodeURIComponent(scope);
  //   url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  //   url += "&state=" + encodeURIComponent(state);

  //   const response = await fetch(url);
  //   const responseJson = await response.json();
  //   console.log(responseJson);
  console.log(access_token);
  console.log(state);
  console.log(storedState);
  //   if (access_token && (state == null || state !== storedState)) {
  //     toast.error("There was an error during the authentication");
  //   } else {
  localStorage.removeItem(stateKey);

  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  });
  const responseJson = await response.json();
  console.log(responseJson);
  //   }
}

// function randomString(len, charSet) {
//   charSet =
//     charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   var randomString = "";
//   for (var i = 0; i < len; i++) {
//     var randomPoz = Math.floor(Math.random() * charSet.length);
//     randomString += charSet.substring(randomPoz, randomPoz + 1);
//   }
//   return randomString;
// }

// function example() {
//   var stateKey = "spotify_auth_state";

//   /**
//    * Obtains parameters from the hash of the URL
//    * @return Object
//    */
//   function getHashParams() {
//     var hashParams = {};
//     var e,
//       r = /([^&;=]+)=?([^&;]*)/g,
//       q = window.location.hash.substring(1);
//     while ((e = r.exec(q))) {
//       hashParams[e[1]] = decodeURIComponent(e[2]);
//     }
//     return hashParams;
//   }

//   /**
//    * Generates a random string containing numbers and letters
//    * @param  {number} length The length of the string
//    * @return {string} The generated string
//    */
//   function generateRandomString(length) {
//     var text = "";
//     var possible =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//     for (var i = 0; i < length; i++) {
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return text;
//   }

//   var userProfileSource = document.getElementById(
//       "user-profile-template"
//     ).innerHTML,
//     userProfileTemplate = Handlebars.compile(userProfileSource),
//     userProfilePlaceholder = document.getElementById("user-profile");

//   (oauthSource = document.getElementById("oauth-template").innerHTML),
//     (oauthTemplate = Handlebars.compile(oauthSource)),
//     (oauthPlaceholder = document.getElementById("oauth"));

//   var params = getHashParams();

//   var access_token = params.access_token,
//     state = params.state,
//     storedState = localStorage.getItem(stateKey);

//   if (access_token && (state == null || state !== storedState)) {
//     alert("There was an error during the authentication");
//   } else {
//     localStorage.removeItem(stateKey);
//     if (access_token) {
//       $.ajax({
//         url: "https://api.spotify.com/v1/me",
//         headers: {
//           Authorization: "Bearer " + access_token,
//         },
//         success: function (response) {
//           userProfilePlaceholder.innerHTML = userProfileTemplate(response);

//           $("#login").hide();
//           $("#loggedin").show();
//         },
//       });
//     } else {
//       $("#login").show();
//       $("#loggedin").hide();
//     }

//     document.getElementById("login-button").addEventListener(
//       "click",
//       function () {
//         var client_id = "CLIENT_ID"; // Your client id
//         var redirect_uri = "REDIRECT_URI"; // Your redirect uri

//         var state = generateRandomString(16);

//         localStorage.setItem(stateKey, state);
//         var scope = "user-read-private user-read-email";

//         var url = "https://accounts.spotify.com/authorize";
//         url += "?response_type=token";
//         url += "&client_id=" + encodeURIComponent(client_id);
//         url += "&scope=" + encodeURIComponent(scope);
//         url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
//         url += "&state=" + encodeURIComponent(state);

//         window.location = url;
//       },
//       false
//     );
//   }
// }

export async function spotifyLogin() {
  let client_id = "34643a9bb95144ee936c43a5cf863256";
  let redirect_uri = "http://localhost:3000/";
  let scope = "playlist-modify-public";
  let popup = window.open(
    `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}&show_dialog=true`,
    // "Login with Spotify",
    "_self",
    "width=800,height=600"
  );

  popup.opener.spotifyAuthCallback = async (payload) => {
    // alert(payload);
    popup.close();

//     fetch("https://api.spotify.com/v1/me", {
//       headers: {
//         Authorization: `Bearer ${payload}`,
//       },
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data)
//       });
  };
}


/*
https://developer.spotify.com/documentation/web-api/concepts/api-calls
https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
https://developer.spotify.com/dashboard/34643a9bb95144ee936c43a5cf863256/settings
https://www.newline.co/@kchan/writing-a-custom-react-hook-for-spotifys-web-api-implicit-grant-flow--25967253
https://leemartin.dev/creating-a-simple-spotify-authorization-popup-in-javascript-7202ce86a02f
https://codepen.io/leemartin/pen/EOxxYR?editors=1011
https://stackoverflow.com/questions/2797560/set-a-callback-function-to-a-new-window-in-javascript
*/