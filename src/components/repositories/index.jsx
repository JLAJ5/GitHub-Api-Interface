import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repositories-item";
import "./styled.scss";

function Repositories() {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories);

  }, [githubState.user.login]);

  return (
    <>
        <Tabs className='tabs' selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected" >
          <TabList className='tab-list'>
            <Tab className='tab'>Repositories</Tab>
            <Tab className='tab'>Starred</Tab>
          </TabList>
          <TabPanel className='tab-panel'>
            {githubState.repositories.map((item) => (
              <RepositoryItem
                key={item.id}
                name={item.name}
                linkToRepo={item.html_url}
                description={item.description}
              />
            ))}
          </TabPanel>
          <TabPanel className='tab-panel'>
            {githubState.starred.map((item) => (
              <RepositoryItem
                key={item.id}
                name={item.name}
                linkToRepo={item.html_url}
                fullName={item.full_name}
              />
            ))}
          </TabPanel>
        </Tabs>
    </>
  )
}

export default Repositories;