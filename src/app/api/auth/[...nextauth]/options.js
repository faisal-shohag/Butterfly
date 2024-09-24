import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// Define your NextAuth options
export const authOptions = {
  session: {
    strategy: "database", // or 'cookie' if you prefer cookie-based sessions
  },

  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;

          // Fetch user from your API
          const response = await fetch(
            "https://butterfly-backend.vercel.app/users",
            {
              method: "POST", // Adjust method according to API requirements
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }), // Send email to API for user lookup
            }
          );

          const user = await response.json();

          // Check if user exists
          if (!user) {
            throw new Error("User not found");
          }

          // Compare the password with the stored hash
          const isPasswordValid = await bcrypt.compare(password, user.password); // user.password is the hashed password from the API

          if (isPasswordValid) {
            return user; // Return user if credentials are valid
          } else {
            throw new Error("Invalid password");
          }
        } catch (err) {
          console.error("Authorization error:", err);
          return null; // Return null if authentication fails
        }
      },
    }),
  ],

  // Custom pages
  pages: {
    signIn: "/sign-in", // Custom sign-in page
  },
};

// Export the NextAuth handler
export default NextAuth(authOptions);
