import { ThemeProvider } from "@/components/layout/theme/theme-provider";
import "@/css/globals.css";
import "@/css/medias.css";
import siteMetadata from "@/data/siteMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  applicationName: siteMetadata.name,
  keywords: siteMetadata.keywords,
  creator: siteMetadata.creator,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="m-0! overflow-x-hidden p-0! antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
