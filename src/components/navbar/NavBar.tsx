import { Link, useLocation } from 'react-router-dom';
import { LinksNavBarInterface } from '../../utils/interfaces';
import {
  ElementList
} from './styles';

type Props = {
  links?: LinksNavBarInterface[],
  isNavBarMenu?: boolean,
};

function CheckIsLinkPage(url: string): boolean {

  const pathname = useLocation().pathname;

  if (url === pathname) {
    return true
  }
  return false
}

function renderLinks(links?: LinksNavBarInterface[]) {
  if(links && links.length >= 0) {
    return(
    <ul>
      {links.map(l => {
        return(
          <ElementList key={l.name} isLinkPage={(CheckIsLinkPage(l.url))} >
            <Link to={l.url}>{l.name}</Link>
          </ElementList>
        )
      })}
    </ul>
    )
  }
}

export default function NavBar({links}: Props) {
   return (
     <>
       {renderLinks(links)}
    </>
  );
};
