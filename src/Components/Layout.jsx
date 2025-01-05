import Footer from "./Footer";
import { TopBar } from "./Topbar";

export default function Layout({ children }) {
  return (
    <>
      <TopBar/>
      <main>{children}</main>
      <Footer />
    </>
  );
}
