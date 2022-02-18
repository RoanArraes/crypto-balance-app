import React from "react";
import { Link } from "react-router-dom";

import { LinksNavBarInterface } from '../../utils/interfaces';

type Props = {
  links: LinksNavBarInterface[]
};

function renderLinks(links: LinksNavBarInterface[]) {
  if(links && links.length >= 0) {
    return(
    <ul>
      {links.map(l => {
        return(
          <li key={l.name}>
            <Link to={l.url}>{l.name}</Link>
          </li>
        )
      })}
    </ul>
    )
  }
}

export default function NavBar({links}: Props) {
   return (
     <div>
       {renderLinks(links)}
    </div>
  );
};
