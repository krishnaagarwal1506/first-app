import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <Link to="/krishna">Krishna</Link>
        <br />
        <Link to="/sunil">Sunil</Link>
        <br />
        <Link to="/surajmal">Surajmal</Link>
        <br />
        <Link to="/dharmik">Dharmik</Link>
      </ul>
    </nav>
  );
}
export default Nav;
