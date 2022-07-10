import React from "react";

function About() {
  return (
    <div className="container mt-4">
      <div className="row g-5">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            WEB BASED CHAT-BOT FOR DISEASE PREDICTION USING MACHINE LEARNING
          </h3>

          <article className="blog-post">
            <h2 className="blog-post-title">PROBLEM STATEMENT</h2>
            <p className="blog-post-meta">
              JULY 11, 2022 by <a href="/">Radhika</a>
            </p>

            <p>
              It is estimated that more than 70% of people in India are prone to
              general body diseases like viral, flu, cough, cold .etc, in every
              2 months. Because many people don't realize that the general body
              diseases could be symptoms to something more harmful, 25 % of the
              population succumbs to death because of ignoring the early general
              body symptoms. This could be a dangerous situation for the
              population and can be are alarming. Hence identifying or
              predicting the disease at the earliest is very important to avoid
              any unwanted casualties. The currently available systems are the
              systems that are either dedicated to a particular disease or are
              in research phase for algorithms when it comes to generalized
              disease. The purpose of this system is to provide prediction for
              the general and more commonly occurring disease that when
              unchecked can turn into fatal disease. The system applies data
              mining techniques and ID3 decision tree algorithms. This system
              will predict the most possible disease based on the given symptoms
              and precautionary measures required to avoid the aggression of
              disease, it will also help the doctors analyse the pattern of
              presence of diseases in the society. In this project, the disease
              prediction system will carry out data mining in its preliminary
              stages, the system will be trained using machine learning and data
              mining
            </p>
            <hr />
            <p>
              This is some additional paragraph placeholder content. It has been
              written to fill the available space and show how a longer snippet
              of text affects the surrounding content. We'll repeat it often to
              keep the demonstration flowing, so be on the lookout for this
              exact same string of text.
            </p>
            <h2>MOTIVATION FOR THE WORK</h2>
            <p>
              The main motivation of doing this research is to present a disease
              prediction model for the prediction of occurrence of general
              disease. Further, this research work is aimed towards identifying
              the best classification algorithm for identifying the possibility
              of disease in a patient. This work is justified by performing a
              comparative study and analysis using three classification
              algorithms namely Naïve Bayes, Decision Tree, and Random Forest
              are used at different levels of evaluations. Although these are
              commonly used machine learning algorithms, the disease prediction
              is a vital task involving highest possible accuracy. Hence, the
              three algorithms are evaluated at numerous levels and types of
              evaluation strategies. This will provide researchers and medical
              practitioners to establish a better
            </p>
          </article>

          <article className="blog-post">
            <h2 className="blog-post-title">New feature</h2>
            <p className="blog-post-meta">
              JULY 01, 2022 by <a href="/">Mohit</a>
            </p>

            <p>
              This is some additional paragraph placeholder content. It has been
              written to fill the available space and show how a longer snippet
              of text affects the surrounding content. We'll repeat it often to
              keep the demonstration flowing, so be on the lookout for this
              exact same string of text.
            </p>
            <ul>
              <li>First list item</li>
              <li>Second list item with a longer description</li>
              <li>Third list item to close it out</li>
            </ul>
            <p>
              This is some additional paragraph placeholder content. It's a
              slightly shorter version of the other highly repetitive body text
              used throughout.
            </p>
          </article>
        </div>

        <div className="col-md-4">
          <div className="position-sticky" style={{ top: "2rem" }}>
            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="fst-italic">About</h4>
              <ul>
                <li>Mohit kandhari</li>
                <li>Pankaj soni</li>
                <li>Radhika Manihar</li>
                <li>Nikhil vidhani</li>
                <li>Prachi soni</li>
              </ul>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Elsewhere</h4>
              <ol className="list-unstyled">
                <li>
                  <a href="https://github.com/cwmohit/AmWell">GitHub</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
