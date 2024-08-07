import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jammming",
  description: "Create Spotify Playlists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="retro">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
