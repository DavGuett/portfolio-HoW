import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div>
      <header class="cabecalho">
        <a href="https://github.com/DavGuett" target="_blank">
          <p>DavGuett</p>
        </a>
        <nav>
          <ul class="cabecalho-menu">
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#formacao">Formação</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
