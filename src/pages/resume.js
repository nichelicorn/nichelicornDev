// Imports
import React from "react";
import Layout from "../components/Layout";

const Resume = () => {
  return (
    <Layout>
          <header class="cv-hdr">
      <h1 class="main-hdr bigun">Nichele Dunn</h1>
      <h2 class="sub-hdr">Software Developer</h2>
    </header>
    <section class="contact-wrap">
      <p>location : Denver, CO</p>
      <p>email : nichele@nichelicorn.dev</p>
      <p>linkedin : linkedin.com/in/nicheledunn/</p>
      <p> github : github.com/nichelicorn</p>
    </section>
    <section class="edu-wrap">
      <h3 class="sub-hdr">Education</h3>
      <section class="edu-card">
        <p class="sub-hdr smol">Turing School of Software & Design, 2021</p>
        <p>Front End Engineering</p>
      </section>
      <section class="edu-card">
        <p class="sub-hdr smol">University of Colorado, 2005</p>
        <p>BA - Fine Art, Studio Photography</p>
      </section>
      <section class="edu-card">
        <p class="sub-hdr smol">Aveda Institute Denver, 2012</p>
        <p>Valedictorian - Massage Therapy, Esthetics</p>
      </section>
    </section>
    <section class="proj-wrap">
      <h3 class="sub-hdr">Projects</h3>
      <section class="proj-card">
        <h4 class="">nichelicornDev</h4>
        <h5>A React-based project hub and journal. Posts discuss coding concepts, project development, and general interest subjects.</h5>
        <p>Tools and Tech : JavaScript, HTML, CSS, React, Gatsby</p>
        <p>Hosted at : nichelicorn.dev</p>
        <p>GitHub Repository : github.com/nichelicorn/nichelicornDev</p>
      </section>
      <section class="proj-card">
        <h4 class="">Overlook Hotel</h4>
        <h5>A hotel booking and management site. A custom API allows a user and manager to view room bookings.</h5>
        <p>Tools and Tech : JavaScript, HTML, SCSS / CSS, Mocha, Chai, Webpack</p>
        {/* <p>Hosted at : url</p> */}
        <p>GitHub Repository : github.com/nichelicorn/overlook-hotel</p>
      </section>
      </section>
    <section class="exper-wrap">
      <h3 class="sub-hdr">Experience</h3>
      <section class="exper-card">
        <h4 class="">Administration</h4>
          <section class="exper-dtl">
            <h5 class="sub-hdr smol">Accountant, Denver-area Automotive Dealerships</h5>
            <p>Managed general ledger and created monthly financial statements by processing deal paperwork, tracking cash flow and contracts in transit, and maintaining daily bank statements. Worked with various department personnel to manage dealership processes. Maintain accounts receivable and accounts payable processes, including employee accounts.</p>
            <h5 class="sub-hdr smol">Human Resources & Payroll Coordinator</h5>
            <p>Worked with employees throughout their employment lifecycle, using software tools to maintain personnel records. Administered bi-monthly payroll and coordinated with state agencies to maintain various dealership licensing requirements. Processed bi-monthly payroll and general ledger payroll accounts.</p>
          </section>
      </section>
      <section class="exper-card">
        <h4 class="sub-hdr smol">Customer Service</h4>
          <section class="exper-dtl">
            <h5 class="sub-hdr smol">Massage Therapist & Esthetician</h5>
            <p>Worked with multiple clients each day to address specific needs. Listened to clients to determine best treatment options to provide unique services at each visit. Organized and maintained inventory, worked with other departments to create custom spa packages, and created custom aromas.</p>
          </section>
      </section>
    </section>
    </Layout>
  )
}

export default Resume;