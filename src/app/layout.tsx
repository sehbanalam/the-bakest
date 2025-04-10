import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "The Bakest",
  description: "A Next.js application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="baking, recipes, cakes, cookies, The Bakest"
        />
        <meta name="author" content="The Bakest Team" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMU8z6cQ1zj2Wz2e6z5e5e5e5e5e5e5e5e5e5e5"
          crossOrigin="anonymous"
        />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thebakest.com" />
        <meta property="og:image" content="/logo-white-transparent.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/logo-white-transparent.png" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-col justify-center items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
