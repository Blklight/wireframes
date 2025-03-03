"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { GithubLogo, GoogleLogo } from "@phosphor-icons/react";

export const loginSchema = z.object({
  login: z.string().min(2).max(50),
  password: z.string().min(8),
});

export default function Login() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    // signIn("credentials", {
    //   login: values.login,
    //   password: values.password,
    // });
  }

  return (
    <div className="w-full flex flex-row h-svh">
      {/* <div className="h-svh bg-slate-50 dark:bg-slate-950 shadow rounded-lg flex">
        login
      </div> */}
      <div className="relative bg-slate-50 dark:bg-slate-950 shadow rounded-lg border flex flex-1 gap-4 my-5 mx-5">
        <div className="absolute top-8 right-8 flex gap-2">
          <Button variant={"ghost"}>Criar conta</Button>
          <ModeToggle />
        </div>
        <Skeleton className="grow m-8 hidden lg:block" />
        <div className="flex flex-col flex-1 m-8 justify-center space-y-6 lg:p-8">
          <div className="grid gap-5 md:w-96 w-80 mx-auto">
            <div className="text-center">
              <h1 className="text-2xl font-semibold tracking-tight mb-2">
                Login
              </h1>
              <p>Acessar sua conta</p>
            </div>
            <div className="flex gap-2 justify-center">
              <Button variant="outline" type="button">
                <GoogleLogo className="h-4 w-4" weight="bold" />
              </Button>
              <Button variant="outline" type="button">
                <GithubLogo className="h-4 w-4" weight="bold" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Ou continue com
                </span>
              </div>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="login"
                  render={({ field }) => (
                    <FormItem className="mb-2">
                      <FormLabel>Login</FormLabel>
                      <FormControl>
                        <Input placeholder="Username ou E-mail" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mb-2">
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input placeholder="********" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full mt-2" type="submit">
                  Acessar
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
