"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";

const registerSchema = z
  .object({
    name: z.string().min(3, "name atleast 3 characters"),
    email: z.string().email("please enter a valid email address!"),
    password: z.string().min(6, "password must be at least 6"),
    confirmPassword: z.string().min(6, "password must be at least 6"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwrd do not match",
    path: ["confirmPassword"],
  });

type RegiserFormValues = z.infer<typeof registerSchema>;
export default function RegiserForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<RegiserFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
   const  onRegisterSubmit = async(values : RegiserFormValues)=>{
      try {
        console.log(values)
      } catch (error) {
        
      }
    }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onRegisterSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="enter your name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="enter your email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pasword</FormLabel>
              <FormControl>
                <Input placeholder="enter your Password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="confirm your password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating Account..." : "create Account"}
        </Button>
      </form>
    </Form>
  );
}
