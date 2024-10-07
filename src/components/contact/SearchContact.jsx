import { Purple } from "../../helpers/colors";

const SearchContact = () => {
  return (
    <div className="input-group mx-2 w-75" dir="ltr">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: Purple }}
      >
        <i className="fas fa-search" />
      </span>
      <input
        dir="rtl"
        type="text"
        className="form-control"
        aria-label="Search"
        aria-describedby="basic-addon1"
        placeholder="Search Contact"
      />
    </div>
  );
};
export default SearchContact;