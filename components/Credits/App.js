import React from "react";
import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
         <Header />
         <h1 className="text-2xl text-center py-10">Active Ventures!</h1>
         <Content />
         <Footer />
         </div>
  
  );
}

export default App;
