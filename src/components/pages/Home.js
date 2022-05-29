import React from "react";
import DoctorImg from "../../assets/doctor.svg";
import CardDesc from "../common/CardDesc";
function Home() {
  return (
    <div className="container-fluid Home-page">
      {/* <div className="row my-4 min-height-80">
        <div className="col-lg-6 m-auto">
          <h2 className="text-primary-without-hover">
            Hello, Friend &#128519;
          </h2>
          <h2 className="text-primary-without-hover">
            Welcome to{" "}
            <span className="font-weight-bold text-primary-b">AmWell</span>
          </h2>
          <p className="text-primary-without-hover">
            We are team of{" "}
            <span className="font-weight-bold text-primary-b">
              MBM Engineering College
            </span>
            , we will help you to provide a general symptom assessment test with
            the help of our ML ChatBot Prediction. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s.
          </p>
          <a href="https://wa.link/8l9pou">
            <button className="btn-style btn btn-primary">Read More</button>
          </a>
        </div>
        <div className="col-lg-6 m-auto">
          <img className="w-100" src={DoctorImg} alt="amwell" />
        </div>
      </div> */}

      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Punny headline</h1>
            <p className="lead fw-normal">
              And an even wittier subheading to boot. Jumpstart your marketing
              efforts with this example based on Apple’s marketing pages.
            </p>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search your disease"
                aria-label="Search"
              />
              <button class="btn btn-light" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <div className="row">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
            <CardDesc />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
