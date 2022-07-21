import React from 'react';
import SideGit from './components/side-git';
import SearchBar from "./components/search-bar";
import Profile from "./components/profile";
import useGithub from "./hooks/github-hooks";
import "./app.scss";

function App() {
  const { githubState } = useGithub();
  return (
    <body>
      <aside>
        <SideGit/>
      </aside>
      <main>
        <SearchBar />
        {githubState.hasUser ? (
          <>
            {githubState.loading ? (
              <p>Loading</p>
            ) : (
              <Profile />
          )}
        </>
      ) : (
        <div></div>
        )}
      </main>
    </body>
  )
};

export default App;