// Imports
import React from "react";
import Layout from "../components/Layout";

const Resume = () => {
  return (
    <Layout>
      <div className="cv-text post-wrapper">
        <header className="cv-hdr">
          <h1 className="cv-main-hdr">Nichele Dunn</h1>
          <h2 className="cv-sub-hdr">Software Developer</h2>
        </header>
        <section className="contact-wrap">
          <ul> 
            <li>location : <a href="https://denvergov.org/Home">Denver, CO</a></li>
            <li>email : <a href="mailto:dunnnm@gmail.com">dunnnm@gmail.com</a></li>
            <li>linkedin : <a href="https://www.linkedin.com/in/nicheledunn/">linkedin.com/in/nicheledunn/</a></li>
            <li>github : <a href="https://github.com/nichelicorn">github.com/nichelicorn</a></li>
          </ul>
        </section>       
        <section className="proj-wrap">
          <h3 className="cv-sub-hdr cv-sec">Projects</h3>
          <section className="proj-card">
            <h4><a href="nichelicornDev">nichelicornDev</a></h4>
            <h5>A React-based project hub and journal. Posts discuss coding concepts, project development, and general interest subjects.</h5>
            <p>Tools and Tech : JavaScript, HTML, CSS, React, Gatsby</p>
            <p>Hosted at : <a href="https://www.nichelicorn.dev/">nichelicorn.dev/</a></p>
            <p>GitHub Repository : <a href="https://github.com/nichelicorn/nichelicornDev">github.com/nichelicorn/nichelicornDev</a></p>
          </section>
          <section className="proj-card">
            <h4><a href="https://github.com/nichelicorn/overlook-hotel">Overlook Hotel</a></h4>
            <h5>A hotel booking and management site. A custom API allows a user and manager to view room bookings.</h5>
            <p>Tools and Tech : JavaScript, HTML, SCSS / CSS, Mocha, Chai, Webpack</p>
            {/* <p>Hosted at : url</p> */}
            {/* <p>Hosted site : <a href="https://github.com/nichelicorn/overlook-hotel">github.com/nichelicorn/overlook-hotel</a></p> */}
            <p>GitHub Repository : <a href="https://github.com/nichelicorn/overlook-hotel">github.com/nichelicorn/overlook-hotel</a></p>
          </section>
          </section>
        <section className="exper-wrap">
          <h3 className="cv-sub-hdr cv-sec">Experience</h3>
          <section className="exper-card">
            <h4>Administration</h4>
              <section className="exper-dtl">
                <h5 className="cv-sub-hdr smol">Accountant, Denver-area Automotive Dealerships</h5>
                <p>Managed general ledger and created monthly financial statements by processing deal paperwork, tracking cash flow and contracts in transit, and maintaining daily bank statements. Worked with various department personnel to manage dealership processes. Maintain accounts receivable and accounts payable processes, including employee accounts.</p>
                <h5 className="cv-sub-hdr smol">Human Resources & Payroll Coordinator</h5>
                <p>Worked with employees throughout their employment lifecycle, using software tools to maintain personnel records. Administered bi-monthly payroll and coordinated with state agencies to maintain various dealership licensing requirements. Processed bi-monthly payroll and general ledger payroll accounts.</p>
              </section>
          </section>
          <section className="exper-card">
            <h4>Customer Service</h4>
              <section className="exper-dtl">
                <h5 className="cv-sub-hdr smol">Massage Therapist & Esthetician</h5>
                <p>Worked with multiple clients each day to address specific needs. Listened to clients to determine best treatment options to provide unique services at each visit. Organized and maintained inventory, worked with other departments to create custom spa packages, and created custom aromas.</p>
              </section>
          </section>
        </section>
        <section className="edu-wrap">
          <h3 className="cv-sub-hdr cv-sec">Education</h3>
          <section className="edu-card">
            <h4 className="cv-sub-hdr smol">Turing School of Software & Design, 2021</h4>
            <p>Front End Engineering</p>
          </section>
          <section className="edu-card">
            <h4 className="cv-sub-hdr smol">University of Colorado, 2005</h4>
            <p>BA - Fine Art, Studio Photography</p>
          </section>
          <section className="edu-card">
            <h4 className="cv-sub-hdr smol">Aveda Institute Denver, 2012</h4>
            <p>Valedictorian - Massage Therapy, Esthetics</p>
          </section>
        </section>
      </div>

    </Layout>
  )
}

export default Resume;