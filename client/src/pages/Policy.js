import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%", marginTop: "5px" }}
          />
        </div>
        <div className="col-md-4">
          <p
            style={{
              marginTop: "70px",
              marginBottom: readMore ? "0" : "100px",
              "@media (min-width: 768px)": {
                marginBottom: readMore ? "0" : "100px",
              },
            }}
          >
            At <b>GILMAN Mart</b>, we value and respect your privacy. This
            Privacy Policy outlines how we collect, use, store, and protect your
            personal information when you visit our website or engage in any
            transactions with us. By accessing our website or using our
            services, you consent to the practices described in this policy.
            {readMore ? (
              <>
                <br />
                <br />
                <b>Information Collection</b>: 1.1 Personal Information: When
                you create an account or make a purchase on GILMAN Mart, we
                collect personal information such as your name, email address,
                contact number, and shipping address. This information is
                necessary for order processing, delivery, and customer support.
                1.2 <b>Payment Information</b>: To process your payment, we may
                collect financial information, including credit card details or
                other payment method information. Please note that we do not
                store any payment information on our servers. All payment
                transactions are encrypted and securely processed through
                trusted third-party payment processors. 1.3 <b>Log Data</b>:
                When you visit our website, our servers automatically record
                certain information known as log data. This data may include
                your IP address, browser type, referring/exit pages, and other
                browsing details. We use this information to analyze trends,
                administer the site, and gather demographic information for
                overall website improvement.
                <br />
                <br />
                By using our website or services, you acknowledge that you have
                read and understood this Privacy Policy and agree to the
                collection, use, and disclosure of your personal information.
                <br />
                <br />
              </>
            ) : (
              <span>
                ...{" "}
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={toggleReadMore}
                >
                  Read more
                </button>
              </span>
            )}
          </p>
          {readMore && (
            <button
              type="button"
              className="btn btn-link"
              onClick={toggleReadMore}
            >
              Read less
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
