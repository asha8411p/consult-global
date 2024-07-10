export const metadata = {
    title: 'Import/Export Services',
    description: 'Page description',
}

import React from 'react';
import Head from 'next/head';

const ImportExportPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <Head>
        <title>Consultancy Firm - Import/Export Service</title>
        <meta name="description" content="Expert consultancy services for import/export businesses." />
      </Head>

      <header style={styles.header}>
        <h1>Import/Export Consultancy Services</h1>
      </header>

      <section style={styles.introduction}>
        <h2>About Our Service</h2>
        <p>
          At XYZ Consultancy, we specialize in providing expert advice and support for businesses engaged in international trade.
          Our import/export consultancy services are designed to help you navigate the complexities of global commerce with ease.
        </p>
      </section>

      <section style={styles.services}>
        <h2>Our Services</h2>
        <ul>
          <li>Import and Export Compliance</li>
          <li>Customs Clearance Assistance</li>
          <li>International Market Research</li>
          <li>Supply Chain Management</li>
          <li>Documentation and Shipping Solutions</li>
        </ul>
      </section>

      <section style={styles.testimonials}>
        <h2>Client Testimonials</h2>
        <div style={styles.testimonial}>
          <p>"XYZ Consultancy has been instrumental in expanding our business overseas. Their expertise is unmatched."</p>
          <cite>- John Doe, CEO of ABC Corp</cite>
        </div>
        <div style={styles.testimonial}>
          <p>"Thanks to XYZ Consultancy, we were able to streamline our import processes and save a significant amount of time and money."</p>
          <cite>- Jane Smith, COO of DEF Ltd</cite>
        </div>
      </section>

      <section style={styles.contact}>
        <h2>Contact Us</h2>
        <form style={styles.contactForm}>
          <div style={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required style={styles.textarea}></textarea>
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2024 XYZ Consultancy. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  introduction: {
    marginBottom: '40px',
  },
  services: {
    marginBottom: '40px',
  },
  testimonials: {
    marginBottom: '40px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '5px',
  },
  testimonial: {
    marginBottom: '20px',
  },
  contact: {
    marginBottom: '40px',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
  },
  textarea: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
    height: '100px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    color: '#777',
  },
};

export default ImportExportPage;
