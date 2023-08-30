import React from "react";
// import exports from "webpack";
import { Home } from "./componets/Home";

export const SearchContext = React.createContext();
function App() {

  const [searchValue, setSearchValue] = React.useState("");
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <Home />
    </SearchContext.Provider>
  );
}

export default App;
