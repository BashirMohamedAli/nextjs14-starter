import { Inter } from "next/font/google";
import "@/app/globals.css";
import Providers from "@/providers/providers";
import Navigation from "@/components/navigation";
import type { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs Starter",
  description: "Nextjs Starter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <div className="container py-2">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
