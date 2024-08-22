# JAMMMING!

Jammming is a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account. It was made as a project for the React module of the Full Stack Engineer career path on [Codecademy](https://codecademy.com)

This project objective is to allow users to login to [Spotify](https://open.spotify.com/), search tracks, sort the results, add them to a custom playlist, name the playlist an then save it directly into their account. 
At the end, the app shows two buttons: one to open the link to the newly created playlist on another tab/window and the other copies the link into the clipboard.

An app created into Spotify Dev plataform is required for Jammming to work. At least in development mode, Spotify requires that each user of said app is created individually, and there is a 25 user limit, so, for now, one of Jammming's main functionalities (the versatility to open the app, log in, search tracks and create a playlist) is impaired, as it would require an user to request credentials, and the admin would have to register each one up to 25.

But, fear not! You can still try it locally!

## Getting Started

1. First, go to [SpotifyDev](https://developer.spotify.com), login, click on the top-right menu, access your Dashboard and click on the "Create app" button.

2. Fill in your app name (e.g.: Jammming), a description and at least one "Redirect URI" (http://localhost:3000). Check the Web API checkbox and the "I understand and agree (...)" one too. Finally, click "Save" to create your App.

3. Then, in your app page Settings and copy your "Client ID".

4. If you have not done so yet, clone/fork the repository.

5. Open spotifyApis.js, alter line 3 from:

```js
const client_id = "YOUR_APP_CLIENT_ID";
```

to

```js
const client_id = "346...";
```

6. Open a terminal and run:

```bash
npm install
```

7. Wait for the packages to be installed, then run:

```bash
npm run dev
```

8. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Screenshots

Landing page
![LandingPageScreenshot](/src/md_lib/images/jammming_01.png "Landing page screenshot")

After logging in to Spotify
![LoggedToSpotify](/src/md_lib/images/jammming_02.png "Logged to Spotify")

Searching tracks
![SearchingTracks](/src/md_lib/images/jammming_03.png "Searching tracks")

Search Pagination
![SearchPagination](/src/md_lib/images/jammming_04.png "Search pagination")

Adding tracks to tracklist
![AddingTracksToTracklist](/src/md_lib/images/jammming_05.png "Adding tracks to tracklist")

Playlist created successfully!
![PlaylistCreatedSuccessfully](/src/md_lib/images/jammming_06.png)

Changing theme colors
![ChangingThemeColors](/src/md_lib/images/jammming_07.png "Changing theme colors")

Resulting playlist on Spotify
![ResultingPlaylistOnSpotify](/src/md_lib/images/jammming_08.png "Resulting playlist on Spotify")

## Demonstration

![DemonstrationVideo](/src/md_lib/mov/jammming.mp4 "Demonstration Video")

## Contact

I would love to get some feedback!
You can reach me here on [GitHub](https://github.com/caXos), [LinkedIn](https://www.linkedin.com/in/jorge-gomez-77356223b/), or [CodecademyCommunity](https://community.codecademy.com/u/257a97fa).
