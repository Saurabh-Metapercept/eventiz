import React from 'react';

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <span className="subtitle">Pricing Table</span>
          <h2>Explore Flexible Our Pricing <span>PLANS</span></h2>
        </div>

        <div className="pricing-cards">
          {/* Basic Ticket */}
          <div className="pricing-card">
            <div className="pricing-shape"></div>
            <h3>Basic Ticket</h3>
            <p className="package-type">Standard Package</p>
            <h2 className="price">$39.<sup>99</sup></h2>
            <p className="per-person">Person</p>
            <ul>
              <li>Second Balcony Seat</li>
              <li>Snack & Softdrink</li>
              <li>Certificates</li>
              <li>Private Access</li>
            </ul>
            <button className="purchase-btn">Purchase</button>
            <p className="note">*Please read our term and condition before order ticket</p>
          </div>

          {/* Silver Ticket */}
          <div className="pricing-card featured">
            <div className="pricing-shape dark"></div>
            <h3>Silver Ticket</h3>
            <p className="package-type">Pro Package</p>
            <h2 className="price">$59.<sup>99</sup></h2>
            <p className="per-person">Person</p>
            <ul>
              <li>Second Balcony Seat</li>
              <li>Snack & Softdrink</li>
              <li>Certificates</li>
              <li>Printed Materials</li>
              <li>Private Access</li>
            </ul>
            <button className="purchase-btn">Purchase</button>
            <p className="note">*Please read our term and condition before order ticket</p>
          </div>

          {/* Gold Ticket */}
          <div className="pricing-card">
            <div className="pricing-shape"></div>
            <h3>Gold Ticket</h3>
            <p className="package-type">Enterprise Package</p>
            <h2 className="price">$199.<sup>99</sup></h2>
            <p className="per-person">Person</p>
            <ul>
              <li>Second Balcony Seat</li>
              <li>Snack & Softdrink</li>
              <li>Certificates</li>
              <li>Private Access</li>
            </ul>
            <button className="purchase-btn">Purchase</button>
            <p className="note">*Please read our term and condition before order ticket</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
