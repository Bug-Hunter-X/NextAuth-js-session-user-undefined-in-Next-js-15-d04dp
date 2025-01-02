# NextAuth.js session.user undefined in Next.js 15

This repository demonstrates a bug in a Next.js 15 application using NextAuth.js for authentication. After successful login, accessing `session.user.email` throws a runtime error: `Cannot read properties of undefined (reading 'user')`.  The session object appears populated but the `user` property is missing.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Login using a supported provider.
5. Navigate to the `/about` page.
6. Observe the runtime error.

## Solution

The issue is resolved by using optional chaining to safely access the user object within the session. This approach helps in handling cases where the user property is undefined. Please see the `aboutSolution.js` file for the corrected code.