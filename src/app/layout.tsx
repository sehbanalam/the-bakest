import "./globals.css";
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
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-col justify-center items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}