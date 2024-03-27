import { Providers } from "./providers";

export const metadata = {
  title: "Frontend Fortune App",
  description: "Simple App with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
