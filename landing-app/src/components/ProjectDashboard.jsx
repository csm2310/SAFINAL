import { useUser, SignOutButton } from '@clerk/clerk-react';

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome, {user?.firstName} 👋</h1>
      <p>Select a project to continue:</p>

      <div style={{ marginTop: '30px' }}>
        <a href="http://localhost:3000" target="_blank" rel="noreferrer">
          <button style={{ marginRight: '20px', padding: '10px 20px' }}>
            🚀 Option 1 (React + Flask)
          </button>
        </a>
        <a href="http://localhost:8501" target="_blank" rel="noreferrer">
          <button style={{ padding: '10px 20px' }}>
            🧠 Option 2 (Streamlit App)
          </button>
        </a>
      </div>

      <div style={{ marginTop: '40px' }}>
        <SignOutButton>
          <button style={{ padding: '8px 16px', backgroundColor: '#f44336', color: '#fff', border: 'none', borderRadius: '4px' }}>
            🔓 Sign Out
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}
