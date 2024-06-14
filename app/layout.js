import { Providers } from "./providers";

export const metadata = {
  title: "Frontend Fortune App",
  description: "Simple Fortune Server App with Next.js and Mongo DB Docker",
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
