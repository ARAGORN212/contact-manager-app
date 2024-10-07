import { CurrentLine, Orange, Pink } from "../../helpers/colors";
import Spinner from "../spinner";
import Contact from "./Contact";

const Contacts = ({ contacts, loading }) => {
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <button className="btn mx-2" style={{ backgroundColor: Pink }}>
                  add contact
                  <i className="fa fa-plus-circle mx-2" />
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <section className="container">
          <div className="row">
            {/* contacts */}
            {contacts.length > 0 ? (
              contacts.map((item) => {
                <Contact key={item.id} contacts={item} />;
              })
            ) : (
              <div
                className="text-center py-5"
                style={{ backgroundColor: CurrentLine }}
              >
                <p className="h3" style={{ color: Orange }}>
                  {" "}
                  contact not found{" "}
                </p>
                <img
                  src={require("../../assets/404-space.gif")}
                  alt="not-found"
                  className="w-75"
                />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Contacts;
