import "./globals.css";
import { Poppins } from "next/font/google"


export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  adjustFontFallback: false,
})
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} bg-zinc-900 m-auto text-white antialiased max-w-[600px]`}
      >
        {children}
      </body>
    </html>
  );
}
