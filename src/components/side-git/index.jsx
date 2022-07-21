import React from "react";
import "./styled.scss";

function SideGit() {
  return(
    <div id="side-git">
      <video autoPlay muted loop width="80%" height="80%">
          <source type="video/mp4" src="https://github.githubassets.com/images/modules/site/enterprise/launchpad/hero/enterprise-deathcat.h264.mp4"/>
      </video>
      
        <strong>Onde o mundo constrói software</strong>
        <p>Milhões de desenvolvedores e empresas criam, enviam e mantêm seus softwares no GitHub, a maior e mais avançada plataforma de desenvolvimento do mundo.</p>
    </div>
  )
}

export default SideGit