import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";

export default function NavBar() {
   return (
     <>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Holdings</Link>
        </li>
        <li>
          <Link to={ROUTES.BALANCE}>Balance</Link>
        </li>
        <li>
          <Link to={ROUTES.LOGIN}>Login</Link>
        </li>
      </ul>
    </>
  );
};