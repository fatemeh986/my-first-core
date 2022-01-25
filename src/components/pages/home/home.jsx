import React from "react";
import Img from "./NYC.jpg"

const Home = () => {
  return (
    <div>
      <div className="top">
      <img src={Img} className="top__img" alt="" />
      <p className="top__title">Welcome to New York City</p>
      </div>
      <section className="topsection">
        <div className="topsection__text">
          <h2>OUR MISSION</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Sunt, laudantium, quibusdam? Nobis, delectus, commodi, 
          fugit amet tempora facere dolores nisi facilis consequatur, 
          odio hic minima nostrum. Perferendis eos earum praesentium, 
          blanditiis sapiente labore aliquam ipsa architecto vitae. 
          Minima soluta temporibus voluptates inventore commodi cumque esse suscipit 
          optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat 
          dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque 
          fugiat dolor repellendus ratione in. 
          </p>

        </div>
      </section>
    </div>
  );
};
export default Home;
