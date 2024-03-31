import { NavLink, Outlet, useParams } from "react-router-dom";
import { getCategory } from "../api";

export default function Category() {
  const { catId } = useParams();
  const category = getCategory(catId);
  const isActive = ({ isActive } : {isActive: boolean}) => isActive ? 'session-active' : '';

  return (
    <>
      <h2>{category?.name} Sessions</h2>

      <ul className="session-list">
        {category?.sessions.map(session => (
          <li className="session" key={session.id}>
             <NavLink to={session.id} className={isActive}>
              <p className="session-name">
              {session.name}
              </p>
              <p>
                {session.speaker.name} | {session.speaker.org}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
