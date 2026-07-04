"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { useApp } from "@/context/AppContext";
import { Spinner } from "@/components/ui/spinner"
const API_URL = process.env.NEXT_PUBLIC_DEV_API;

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false)
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  
  const { logo, name } = useApp();

 useEffect(() => {
   const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

   if (!password) {
     setError("");
     return;
   }

   if (!passwordRegex.test(password)) {
     setError(
       "Password must be at least 8 characters long and include a number and a special character.",
     );
     return;
   }

   if (confirmPassword && password !== confirmPassword) {
     setError("Passwords do not match");
     return;
   }

   setError("");
 }, [password, confirmPassword]);

  const handleRegister = () => {
    if (error) return;
    // هنا ممكن تضيف منطق التسجيل، مثلاً إرسال البيانات إلى API
    console.log("Registering user:", { userName, email});
    setLoading(true);
    fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        user_name: userName,
        user_email: email,
        //user_country: country,
        //user_city: city,
        user_password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setLoading(false);
          // Redirect to login page or show success message
          router.push("/login");
        } else {
          setLoading(false);
          setError(data.message || "Registration failed. Please try again.");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        setError("An error occurred during registration. Please try again." + error.message);
        setLoading(false);
      });
  };

  return (
    <div className="container px-4 py-8 md:px-6 md:py-8 max-w-lg mx-auto">
      <Card>
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-2">
            <Image
              src={logo}
              alt={name + " Logo"}
              width={100}
              height={100}
              className="bg-primary"
            />
          </div>
          <CardTitle className="text-2xl text-center">
            Create an account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input
                id="first-name"
                placeholder="John"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
                <span className="sr-only">
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Password must be at least 8 characters long and include a number
              and a special character.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Confirm Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={"password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={agreeTerms}
              onCheckedChange={(checked) => setAgreeTerms(!!checked)}
            />
            <Label htmlFor="terms" className="text-sm font-normal">
              I agree to the{" "}
              <Link href="#" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </Label>
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button
            className="w-full"
            size="lg"
            disabled={
              !userName ||
              !email ||
              !password ||
              !confirmPassword ||
              !agreeTerms ||
              error !== ""
            }
            onClick={handleRegister}
          >
            {loading && <Spinner className="mr-2 h-4 w-4" />}
            Create Account
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
