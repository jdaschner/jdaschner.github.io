import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 w-full max-w-5xl mx-auto px-5 sm:px-6 py-10 sm:py-14">
        {children}
      </main>
      <Footer />
    </div>
  );
}
