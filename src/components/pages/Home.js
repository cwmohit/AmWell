import React from "react";
import { useAuth } from "../../context/AuthContext";
import CardDesc from "../common/CardDesc";
import DoctorImg from "../../assets/doctors.svg";
const doctors = [
  {
    id: 1,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 2,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 3,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 4,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 5,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 6,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 7,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 8,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 9,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 10,
    img: DoctorImg,
    contact: "9785757583",
  },
];

function Home() {
  const { currentUser } = useAuth();
  return (
    <div className="container-fluid Home-page">
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">
              {currentUser ? currentUser?.email : "Punny headline"}
            </h1>
            <p className="lead fw-normal">
              And an even wittier subheading to boot. Jumpstart your marketing
              efforts with this example based on Apple’s marketing pages.
            </p>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search your disease"
                aria-label="Search"
              />
              <button className="btn btn-light" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <div className="row">
          {doctors.map((item, i) => (
            <CardDesc key={i} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
