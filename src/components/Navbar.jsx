import SearchContact from "./contact/SearchContact";
import { Purple, Background } from "../helpers/colors";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-sm shadow-lg"
      style={{ backgroundColor: Background }}
    >
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <div className="navbar-brand">
              <i className="fas fa-id-badge" style={{ color: Purple }} />
              <span style={{ color: Purple }}> content </span> manage web app
            </div>
          </div>

          <div className="col">
            <SearchContact />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
