import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/schemas/SignInSchema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signInUser, signUpUser } from "@/lib/authUtils";
import { useLocation } from "wouter";

const SignIn: React.FC = () => {
  const [location, setLocation] = useLocation();

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    const { email, password } = data;
    const signUpResult = await signUpUser(email, password);

    if (!signUpResult.success) {
      if (signUpResult.error === "Email already in use") {
        const signInResult = await signInUser(email, password);
        if (!signInResult.success) {
          console.error("Sign-in failed:", signInResult.error);
        } else {
          // console.log("Sign-in successful");
          setLocation("/dashboard");
        }
      } else {
        console.error("Sign-up failed:", signUpResult.error);
      }
    } else {
      // console.log("Sign-up successful");
      setLocation("/dashboard");
    }
  };

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="h-screen grid place-content-center">
      <Card className="w-[400px]">
        <CardHeader>
          <h2 className="text-2xl font-bold">Sign In into Page Crafter</h2>
        </CardHeader>
        <CardContent className="p-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Sign In</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
