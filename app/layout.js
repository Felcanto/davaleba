import "./globals.css";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
