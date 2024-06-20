import "./globals.scss";
import Favicon from "./favicon.ico";

export const metadata = {
  title: "Academia de Teologie Ortodoxă din Moldova",
  description: "Academia de teologie ortodoxă din Moldova",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body>{children}</body>
      </html>
  );
}

