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
import { AlertCircle, ShieldCheck } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { login, signup } from "./action";
import { OAuthButtons } from "./oauthSignIn";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const searchParams = useSearchParams();
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    if (isSignup) {
      formData.append("displayName", data.displayName); // Add displayName for signup
      await signup(formData);
    } else {
      await login(formData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {searchParams.get("error") === "verify" ? (
        <div className="custom-glass-2 p-10 rounded-xl flex flex-col justify-center items-center text-center gap-3">
            <div className="text-green-500"><ShieldCheck size="50"/></div>
            <div className="font-semibold text-xl">Verify your email.</div>
            <div className="text font-semibold">
              Please check your email for a verification link. Link will expire in 5 minutes.
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
                    {...register("email", { required: "Email is required" })}
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
                {searchParams.get("error") && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      {searchParams.get("error")}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
              <CardFooter className="flex justify-between mt-6">
                <Button type="submit">{isSignup ? "Sign Up" : "Login"}</Button>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setIsSignup(!isSignup)}
                >
                  {isSignup ? "Switch to Login" : "Switch to Sign Up"}
                </Button>
                <Button variant="outline">Forgot Password?</Button>
              </CardFooter>
            </form>
            <OAuthButtons />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Login;
