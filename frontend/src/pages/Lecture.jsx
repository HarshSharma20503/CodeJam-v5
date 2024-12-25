import React from "react";


const Lecture = () => {
  return (
    <div className="pageContainer">
      <header className="header">
        <i className="ri-arrow-left-line"></i>
        <h1>Lecture Details</h1>
      </header>

      <section className="lectureList">
        <div className="lectureItem">
          <h2>Lecture 1</h2>
          <p>Topic: Introduction to React</p>
        </div>

        <div className="lectureItem">
          <h2>Lecture 2</h2>
          <p>Topic: React Components</p>
        </div>

        <div className="lectureItem">
          <h2>Lecture 3</h2>
          <p>Topic: React State and Props</p>
        </div>
      </section>
    </div>
  );
};

export default Lecture;
