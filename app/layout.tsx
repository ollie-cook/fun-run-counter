import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fun Run Counter",
  description: "Keep track of how many runs you've been on",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${gabarito.className} relative`}>
        {children}
        <p className="absolute bottom-2 right-2 text-sm text-white" >Built by <a href="https://www.olliecookie.com" className="underline" target="_blank">Ollie Cook</a>&#x1f36a;</p>
      </body>
    </html>
  );
}
