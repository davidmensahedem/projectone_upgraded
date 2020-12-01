import React from "react";

const JumboComponent = ({ hlabel, plabel }) => {
  return (
    <section id="jumbo" className="jumbotron text-center">
      <div className="container">
        <h1>{hlabel}</h1>
        <p id="lead" className="">
          {plabel}
        </p>
      </div>
    </section>
  );
};

export default JumboComponent;
