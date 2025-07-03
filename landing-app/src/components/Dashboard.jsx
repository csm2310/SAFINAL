import React from 'react';
import { useUser, SignOutButton, UserButton } from '@clerk/clerk-react';
import Navbar from './Navbar'; // adjust path if needed

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div style={styles.wrapper}>
      <style>
        {`
          @keyframes fadeScaleUp {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }

          .hover-button:hover {
            background-color: #f0f0f0;
            transform: scale(1.05);
          }

          .panel:hover {
            transform: scale(1.02);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          }

          .nav-link:hover {
            text-decoration: underline;
            color: #444;
          }
        `}
      </style>

      {/* Top Navigation */}
      <div style={styles.navBar}>
        <div style={styles.leftNav}>
          <span style={styles.logo}>📊 Social Media Agent</span>
          <a href="/" style={styles.navLink}>🏠 Home</a>
          <a href="/about" style={styles.navLink}>📄 About Us</a>
        </div>

        <div style={styles.rightNav}>
          <UserButton afterSignOutUrl="/" />
          <SignOutButton>
            <button style={styles.signout}>🔓 Logout</button>
          </SignOutButton>
        </div>
      </div>

      {/* Two Apps Split View */}
      <div style={styles.splitContainer}>
        <div style={{ ...styles.panel, ...styles.leftPanel }} className="panel">
          <div style={styles.panelContent}>
            <h1 style={styles.heading}>CM Social Media Agent</h1>
            <p style={styles.description}>AI Instagram Content Calendar</p>
            <a href="/app1/index.html" target="_blank" rel="noreferrer">
              <button style={styles.button} className="hover-button">Launch</button>
            </a>
          </div>
        </div>

        <div style={{ ...styles.panel, ...styles.rightPanel }} className="panel">
          <div style={styles.panelContent}>
            <h1 style={styles.heading}>SR Social Media Agent</h1>
            <p style={styles.description}>AI Instagram Content Calendar</p>
            <a href="http://localhost:8501" target="_blank" rel="noreferrer">
              <button style={styles.button} className="hover-button">Launch</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: '100vh',
    width: '100vw',
    fontFamily: '"Segoe UI", sans-serif',
    background: 'linear-gradient(to bottom, #e0eafc, #cfdef3)',
    overflow: 'hidden',
  },
  navBar: {
    position: 'absolute',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '92%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '12px 24px',
    borderRadius: '40px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
    zIndex: 10,
    backdropFilter: 'blur(10px)',
  },
  leftNav: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.3rem',
    color: '#333',
  },
  rightNav: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    position: 'relative',
    zIndex: 20,
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 600,
    fontSize: '1rem',
  },
  signout: {
    backgroundColor: '#e53935',
    color: '#fff',
    border: 'none',
    padding: '8px 18px',
    borderRadius: '24px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  },
  splitContainer: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'row',
  },
  panel: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    color: '#fff',
    transition: 'all 0.4s ease',
    animation: 'fadeScaleUp 0.8s ease forwards',
  },
  leftPanel: {
    background: 'linear-gradient(to bottom right, #ff4e50, #f9d423)',
  },
  rightPanel: {
    background: 'linear-gradient(to bottom right, #2193b0, #6dd5ed)',
  },
  panelContent: {
    textAlign: 'center',
    maxWidth: '400px',
  },
  heading: {
    fontSize: '2.8rem',
    marginBottom: '15px',
    fontWeight: 700,
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '25px',
    opacity: 0.95,
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#333',
    fontWeight: 'bold',
    padding: '14px 36px',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.1rem',
    boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
  },
};
