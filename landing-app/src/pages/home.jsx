import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to My App</h1>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
