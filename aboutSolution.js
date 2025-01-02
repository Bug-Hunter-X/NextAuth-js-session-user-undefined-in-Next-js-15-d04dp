```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  console.log('Session:', session); // Check session

  return {
    props: { session },
  };
}

export default function About({ session }) {
  return (
    <div>
      <h1>About Page</h1>
      {session?.user ? (
        <p>Logged in as {session.user.email}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}
```