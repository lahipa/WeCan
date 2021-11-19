import React from "react";
// Components
import { Header, Footer } from "../../organisms";

export default function Layout(props) {
  const { children } = props;
  
  return (
    <>
      <Header />

      <main
        className="container sm:mx-auto px-5 flex flex-col"
        style={{ minHeight: 600 }}
      >
        {children}
      </main>
      
      <Footer />
    </>
  );
}
