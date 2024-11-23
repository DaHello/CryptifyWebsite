import { NavLink, Outlet } from "react-router-dom";

//Route : the outlet elements tells the route element where and when to render
//the child routes within the page

//allows nested routes to render their element content
export const MainPages = () => {
  return (
    <div>
      <header className="globalHeader">
        <h1>Change scene</h1>
        <nav>
          <NavLink to="mainpagetext">Text Encryption</NavLink>
          <NavLink to="mainpagefile">File Encryption</NavLink>
          {/* active class */}
        </nav>
      </header>

      {/* to output page components */}
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
