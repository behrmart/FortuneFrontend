import "./globals.css";
import { fonts } from "./fonts";
import { Providers } from "./providers";

export const metadata = {
  title: "Hobbit Talk",
  description: "Simple App with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fonts.poppins.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
