import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const linksArray = [
  {
    title: "Main",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Test page",
    path: "/test-page",
  },
  {
    title: "Todo App",
    path: "/todo",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body>
        <Header navigationData={linksArray} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
