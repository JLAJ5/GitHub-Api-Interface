import React, { useEffect } from "react";
import { FiBook, FiUsers, FiUserPlus, FiLink } from 'react-icons/fi';
import Repositories from "../repositories"
import useGithub from "../../hooks/github-hooks";

import "./styled.scss";

function Profile(){
  const { githubState } = useGithub();

  useEffect(()=>{
    console.log(githubState);
  },[githubState.user]);

  return(
    <div id="profile">
        <div>
          <header>
            <a href={githubState.user.html_url} target="_blank" rel="noreferrer">
              <img src={githubState.user.avatar} alt="Avatar of user" />
            </a>
            <div>
              <strong>{githubState.user.name}</strong>            
              <p>{githubState.user.bio}</p>
            </div>
          </header>
          <ul>
          <li>
              <strong>
                <FiUsers size={28} />
                {githubState.user.followers}
              </strong>
              <span>Followers</span>
            </li>
            <li>
              <strong>
                <FiUserPlus size={28} />
                {githubState.user.following}
              </strong>
              <span>Followings</span>
            </li>
            <li>
              <strong>
                <FiBook size={28} />
                {githubState.user.public_repos}
              </strong>
              <span>Repositories</span>
            </li>
          </ul>
        </div>
        <div>
          <Repositories></Repositories>
        </div>
    </div>
  )
}
export default Profile;