import React from "react"
import Header from "../components/header"


const Layout = ({ children }) => 
<div className="min-h-screen flex flex-col h-full" id="main">
  <a className="skip-main" href="#main">Skip to main content</a>
  <Header />
  <main id="content" className="flex flex-grow flex-col">
    {children}
  </main>
</div>

export default Layout