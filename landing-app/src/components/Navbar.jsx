import React from "react";
import { SignOutButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={styles.navBar}>
      <div style={styles.leftNav}>
        <span style={styles.logo}>📊 Social Media Agent</span>
        <Link to="/" style={styles.navLink}>🏠 Home</Link>
        <Link to="/about" style={styles.navLink}>📄 About Us</Link>
      </div>

      <div style={styles.rightNav}>
        <UserButton afterSignOutUrl="/" />
        <SignOutButton>
          <button style={styles.signout}>🔓 Logout</button>
        </SignOutButton>
      </div>
    </div>
  );
}

const styles = {
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
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 600,
    fontSize: '1rem',
  },
  rightNav: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    position: 'relative',
    zIndex: 20,
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
};
