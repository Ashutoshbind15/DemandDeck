import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from './components/Footer';
import MapItem from "./components/Mapper/MapItem";

const city=[["Mumbai",["farm","poulty"]],["Delhi",["milk"]],["Varanasi",["milk"]],["Jaunpur",["milk"]]];

function App() {
  return (
    <div className="bg-transparent">
      <Header />
      <h1 className="pl-12 py-6 text-2xl">
        If you need any assistance in  how to start a new venture or to be more precise demands unaddressed in any city.<br></br><br />
        You can check the facilities lacking in the cities below:
      </h1>
      
      <div className="py-8">
        <h1 className="pl-12 py-2 text-2xl font-sans hover:font-serif font-medium text-lime-500">Enter Locations:</h1>
      </div>
      <div className=" ml-12 px:auto">
        <SearchBar />
        <span className="text-xs">Insert tags related to your idea and press Enter</span>
      </div>

      <div>
        
        <div className="block pl-12 py-6">
        <div>
          {city.map((el) => <MapItem item={el} />)}
            
        </div>
          </div>  
      </div>
      
    </div>
  );
}

export default App;
