import React from "react";
import { FiBook } from 'react-icons/fi';
import "./styled.scss";

function RepositoryItem({ name, linkToRepo, description }) {
  return (
    <div className='repo-item'>      
      <a href={linkToRepo} target="_blank" rel="noreferrer">      
        <h2 className='title' >
          <FiBook size={18}/>
          {name}
        </h2>      
      </a>
      {description}
    </div>
  )
}

export default RepositoryItem