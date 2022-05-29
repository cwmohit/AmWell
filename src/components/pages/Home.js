import React from "react";
import CardDesc from "../common/CardDesc";
function Home() {
  return (
    <div className="container-fluid Home-page">
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
