import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  const [expanded, setExpanded] = useState(false);
  const text =
    "Welcome to GILMAN Mart - Your Ultimate Shopping Destination! ..."; // Your long text goes here

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Layout title={"About us - GILMAN Mart"}>
      <div className="row contactus content" style={{height:"100%"}}>
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%",height:"100%" }}
          />
        </div>
        <div className="col-md-4">
          <div
            className={`text-justify mt-2 ${expanded ? "" : "overflow-hidden"}`}
            style={{
              maxHeight: expanded ? "none" : "300px",
              overflow: "hidden",
            }}
          >
            <p
              className="content"
              style={{
                marginTop: "70px",
                marginBottom: "20px",
                "@media (min-width: 768px)": { marginBottom: "20px" },
              }}
            >
              Welcome to GILMAN Mart - Your Ultimate Shopping Destination! At
              GILMAN Mart, we believe that shopping should be an enjoyable and
              convenient experience for everyone. We strive to provide our
              customers with a seamless online shopping platform where they can
              find an extensive range of products, discover new trends,and enjoy
              excellent customer service. With a passion for quality and a
              commitment to customer satisfaction, we have become a trusted name
              in the world of e-commerce. Our Story: GILMAN Mart was founded
              with a vision to revolutionize the way people shop online. We
              started as a small venture with a handful of dedicated individuals
              who shared a common goal - to create a platform that offers a vast
              selection of products, competitive prices, and a user-friendly
              interface. Over the years,Thank you for choosing GILMAN Mart -
              where shopping meets convenience, quality, and exceptional
              service.
            </p>
          </div>
          {!expanded && (
            <button className="btn btn-primary mt-2" onClick={toggleExpand}>
              Read More
            </button>
          )}
          {expanded && (
            <button
              className="read-btn btn btn-primary mt-0"
              onClick={toggleExpand}
              style={{
                marginTop: "20px",
                marginBottom: "90px",
                "@media (min-width: 768px)": { marginBottom: "90px" },
              }}
            >
              Read Less
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default About;
