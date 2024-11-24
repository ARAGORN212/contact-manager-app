import { CurrentLine, Cyan, Orange, Purple, Red } from "../../helpers/colors";

const Contact = ({contact}) => {
  return (
    <>
      <div className="col-md-6">
        <div
          className="card my-2"
          style={{ backgroundColor: CurrentLine, padding: "10px" }}
        >
          <div className="card-body">
            <div className="row align-items-center d-flex justify-content-around">
              <div className="col-md-4 col-sm-4">
                <img
                  src={contact.image}
                  alt={contact.fullname}
                  style={{ border: `1ps solid ${Purple}` }}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-6 col-sm 6">
                <ul className="list-group p-0">
                  <li className="list-group-item list-group-item-dark">
                    FirstName, LastName:
                    <span className="fw-bold"> {contact.fullname} </span>
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    Number:
                    <span className="fw-bold"> {contact.mobile} </span>
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    EmailAddress:
                    <span className="fw-bold"> {contact.email}</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-1 col-sm-1 d-flex-colum align-item-center">
                <button className="btn m-1" style={{ backgroundColor: Cyan }}>
                  <i className="fa fa-pen" />
                </button>
                <button className="btn m-1" style={{ backgroundColor: Orange }}>
                  <i className="fa fa-eye" />
                </button>
                <button className="btn m-1" style={{ backgroundColor: Red }}>
                  <i className="fa fa-trash" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
