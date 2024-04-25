import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const libre = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Thebes",
  description: "The Social Contest Network",
  icons: ["https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/logo_crown.png"]

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const className = `${inter.variable} ${libre.variable}`;
  console.log(className);
  return (
    <html lang="en">
      <body className={className}>{children}</body>
    </html>
  );
}
