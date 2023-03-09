import { Outlet, Link, NavLink, Route, Routes } from "react-router-dom";

export default function Root() {
    return (
      <>
        <Routes>
           <Route path='/contacts/:contactId' element={<div>hello</div>} />
        </Routes>

        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to='/contacts/1' style={({ isActive, isPending }) => {
                                                                return {
                                                                fontWeight: isActive ? "bold" : "",
                                                                color: isPending ? "red" : "black",
                                                                backgroundColor: isActive ? "red" : "gray"
                                                                };
                                                            }}>Yorg</NavLink>
              </li>
              <li>
                <Link to="/contacts/2">Fran</Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }
