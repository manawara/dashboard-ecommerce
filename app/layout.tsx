import type { Metadata } from "next";
import { Hanken_Grotesk, Play } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider/ThemeProvider";
const hanken_grotesk = Hanken_Grotesk({
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const play = Play({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-play",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Dashboard CommerceCore",
  description: "Dashboard CommerceCore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hanken_grotesk.variable} ${play.variable}  bg-gray-grayLight-300 text-secondary`}
      suppressHydrationWarning
    >
      <body className={`antialiased`}>
        <Provider>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
