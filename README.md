# JAMMMING!

This project objective is to allow users to login to [Spotify](https://open.spotify.com/), search tracks, sort the results, add them to a custom playlist, name the playlist an then save it directly into their account. 
At the end, the app shows two buttons: one to open the link to the newly created playlist on another tab/window and the other copies the link into the clipboard.

An app created directly into Spotify Dev plataform is required for Jammming to work. At least in development mode, Spotify requires that each user is created individually, and there is a 25 user limit, so, for now, one of Jammming's main functionalities (the versatility to open the app, log in, search tracks and create a playlist) is impaired, as it would require a user to request credentials, the admin would have to register each one up to 25.

But, fear not! You can still try it locally!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
