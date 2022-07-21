import React, { useState } from "react";
import { FiGithub } from 'react-icons/fi';
import useGithub from "../../hooks/github-hooks";
import "./styled.scss";

function SearchBar() {

  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <div id="search-bar">
      <input 
        type="text" 
        placeholder="Digite o username para pesquisa..."
        onChange={(event) => setUsernameForSearch(event.target.value)}
      />
      <button type="submit" onClick={submitGetUser}>
        <FiGithub/>           
        Buscar
      </button>          
    </div>
  )
}

export default SearchBar