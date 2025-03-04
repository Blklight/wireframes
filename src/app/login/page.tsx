"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { LoginForm } from "@/components/login-form";

export default function Login() {
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
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
