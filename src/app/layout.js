import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import Icon_Vinyl from "@/components/Icon_Vinyl";

import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jammming",
  description: "Create Spotify Playlists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="retro">
      <body className={inter.className}>
        {children}
        <ToastContainer position="bottom-center" autoClose={2000} icon={<Icon_Vinyl/>} />
      </body>
    </html>
  );
}
