"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { AlertCircle, ShieldCheck, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { login, signup } from "./action";
import { OAuthButtons } from "./oauthSignIn";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const searchParams = useSearchParams();
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError("");

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      if (isSignup) {
        formData.append("displayName", data.displayName);
        await signup(formData);
      } else {
        await login(formData);
      }
    } catch (error) {
      setServerError(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        {searchParams.get("error") === "verify" ? (
          <div className="custom-glass-2 p-10 rounded-xl flex flex-col justify-center items-center text-center gap-3">
            <div className="text-green-500">
              <ShieldCheck size="50" />
            </div>
            <div className="font-semibold text-xl">Verify your email.</div>
            <div className="font-semibold">
              Please check your email for a verification link. Link will expire
              in 5 minutes.
            </div>
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>
                {searchParams.get("error")
                  ? "Error"
                  : isSignup
                  ? "Sign Up"
                  : "Login"}
              </CardTitle>
              <CardDescription>
                Enter your credentials to{" "}
                {isSignup ? "create a new account" : "access your account"}.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                  {isSignup && (
                    <div className="space-y-2">
                      <Label htmlFor="displayName">Your Name</Label>
                      <Input
                        id="displayName"
                        type="text"
                        placeholder="Enter your name..."
                        {...register("displayName", {
                          required: "Your name is required",
                        })}
                      />
                      {errors.displayName && (
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>
                            {errors.displayName.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email format",
                        },
                      })}
                    />
                    {errors.email && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          {errors.email.message}
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          {errors.password.message}
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                  {serverError && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{serverError}</AlertDescription>
                    </Alert>
                  )}
                </div>
                <CardFooter className="flex justify-between mt-6">
                  <Button type="submit" disabled={loading}>
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    {isSignup ? "Sign Up" : "Login"}
                  </Button>
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => setIsSignup(!isSignup)}
                    disabled={loading}
                  >
                    {isSignup ? "Switch to Login" : "Switch to Sign Up"}
                  </Button>
                  <Button variant="outline" disabled={loading}>
                    Forgot Password?
                  </Button>
                </CardFooter>
              </form>
              <OAuthButtons />
            </CardContent>
          </Card>
        )}
      </Suspense>
    </div>
  );
};

export default Login;
