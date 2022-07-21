import React from "react";
import App from "./App";
import GithubProvider from "./providers/github-provider";

function Provider () {
  return (
    <>
      <GithubProvider>
        <App />
      </GithubProvider>
    </>
  );
};

export default Provider;