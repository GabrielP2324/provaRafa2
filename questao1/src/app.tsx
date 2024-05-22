import React from 'react';
import ServiceCard from './ServiceCard';
import PortfolioCard from './PortfolioCard';


function App() {
  console.log("Running app")
  return (
    <>
      <div className="container">
        <header>
          <h1>CREATIVE</h1>
          <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.</p>
          <button>Contact Us</button>
        </header>

        <section className="services">
          <ServiceCard title="Business Strategy" description="I throw myself down among the tall grass by the stream as I lie close to the earth." />
          <ServiceCard title="Website Development" description="I throw myself down among the tall grass by the stream as I lie close to the earth." />
          <ServiceCard title="Marketing & Reporting" description="I throw myself down among the tall grass by the stream as I lie close to the earth." />
          <ServiceCard title="Mobile App Development" description="I throw myself down among the tall grass by the stream as I lie close to the earth." />
          <ServiceCard title="Marketing & Reporting" description="I throw myself down among the tall grass by the stream as I lie close to the earth." />
          <ServiceCard title="Mobile App Development" description="I throw myself down among the tall grass by the stream as I lie close to the earth." />
        </section>

        <section className="portfolio">
          <PortfolioCard title="Getting tickets to the big show" category="Development" />
          <PortfolioCard title="Getting tickets to the big show" category="Development" />
          <PortfolioCard title="Getting tickets to the big show" category="Development" />
        </section>

        <section className="fun-facts">
          <div>
            <h2>199+</h2>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
          </div>
          <div>
            <h2>575+</h2>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
          </div>
          <div>
            <h2>69+</h2>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
