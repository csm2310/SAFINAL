import React from 'react';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div style={styles.wrapper}>
      <Navbar />
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .about-card {
              padding: 30px 20px;
            }
          }
        `}
      </style>

      <div style={styles.card} className="about-card">
        <h1 style={styles.heading}>📄 About Us</h1>

        <p style={styles.description}>
          Welcome to our <strong>AI-powered Instagram Content Scheduler</strong> — a smart, automated platform designed to help creators, marketers, and businesses plan, generate, and schedule high-quality Instagram posts effortlessly. Our tool leverages the power of generative AI to craft engaging captions, fetch relevant images, and even auto-publish or schedule posts — all from a user-friendly dashboard.
        </p>

        <p style={styles.description}>
          This project was developed by the <strong>Social Media Agent Team</strong> from <strong>Vidyalankar Institute of Technology (VCET)</strong> during our internship at <strong>Digital Dojo Pvt. Ltd.</strong>, held from <em>9th June to 30th June 2025</em>.
        </p>

        <h3 style={styles.subheading}>✨ Meet the Team:</h3>
        <ul style={styles.teamList}>
          <li>👤 Chinar Mhatre</li>
          <li>👤 Simran Warang</li>
          <li>👤 Riya Divekar</li>
        </ul>

        <h3 style={styles.subheading}>🙏 A Note of Thanks:</h3>
        <p style={styles.description}>
          We sincerely thank <strong>Mr. Sachin Sadare</strong> and the entire team at <strong>Digital Dojo Pvt. Ltd.</strong> for offering us the opportunity to intern, learn, and grow under real-world mentorship. This project is a direct result of the guidance and creative freedom we received during our internship.
        </p>

        <p style={styles.description}>
          Through this platform, we aim to make social media automation more accessible, time-saving, and impactful — powered by AI and built with passion.
        </p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #e0eafc, #cfdef3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Segoe UI", sans-serif',
    paddingTop: '100px',
    paddingBottom: '40px',
    flexDirection: 'column',
  },
  card: {
  backgroundColor: '#fff',
  padding: '50px 60px',
  borderRadius: '20px',
  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
  textAlign: 'left',
  maxWidth: '1100px',  // ⬅️ Increased from 850px to 1100px
  width: '95%',        // ⬅️ Increased from 90% to 95%
  animation: 'fadeIn 0.7s ease-out',
}
,
  heading: {
    fontSize: '2.5rem',
    marginBottom: '25px',
    color: '#222',
    fontWeight: 700,
    textAlign: 'center',
  },
  subheading: {
    fontSize: '1.4rem',
    color: '#333',
    marginTop: '30px',
    marginBottom: '10px',
    fontWeight: 600,
  },
  description: {
    fontSize: '1.1rem',
    color: '#444',
    lineHeight: '1.8',
    marginBottom: '20px',
  },
  teamList: {
    fontSize: '1.05rem',
    color: '#444',
    paddingLeft: '20px',
    listStyleType: 'none',
    lineHeight: '1.8',
  },
};
