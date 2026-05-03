import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sleep Quality Room Optimizer",
  description: "Optimize bedroom conditions for better sleep. Track temperature, humidity, noise, and light to get ML-powered recommendations for your perfect sleep environment."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="395173fd-d655-43dc-969d-2296dc159b7f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
