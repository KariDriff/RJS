import React from "react";
import App from "./App";
import Footer from "./components/footer"
import { ResetCSS } from "./global/resetCSS";
import GitHubProvider from "./providers/github-provider";

const Providers = () => {
 return (
  <main>
   <GitHubProvider>
    <ResetCSS/>
    <App/>
    <Footer/>
   </GitHubProvider>
  </main>
 );
}

export default Providers;