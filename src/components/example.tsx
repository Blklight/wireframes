"use client";
import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  GalleryVerticalEnd,
  Plus,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Input } from "./ui/input";
import { NavUser } from "./nav-user";
import { SidebarProvider } from "./ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/command";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

export const Example = () => {
  const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  };
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <SidebarProvider>
      <div className="w-full flex flex-row min-h-svh">
        <div className="flex flex-col gap-4 items-center py-4 px-2.5">
          <Button size={"icon"}>
            <Image
              src="/blklight-light.svg"
              className="!max-w-none mx-auto size-6 dark:invert invert-0"
              width="24"
              height="24"
              alt="Ultimate Mercer Logo"
            />
          </Button>
          <Button variant={"secondary"} size={"icon"}>
            <GalleryVerticalEnd className="w-4 h-4" />
          </Button>
          <Button variant={"secondary"} size={"icon"}>
            <GalleryVerticalEnd className="w-4 h-4" />
          </Button>
          <Button variant={"secondary"} size={"icon"}>
            <GalleryVerticalEnd className="w-4 h-4" />
          </Button>
          <Button variant={"secondary"} size={"icon"}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="bg-slate-50 dark:bg-slate-950 shadow rounded-lg border flex-1 my-2.5 mr-2.5">
          <div className="flex justify-between items-center px-2.5 py-2">
            <div className="">
              <Button
                variant={"outline"}
                className={cn(
                  "relative h-8 w-full justify-start rounded-sm bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-96 lg:max-w-[500px]"
                )}
                onClick={() => setOpen(true)}
              >
                <span className="hidden lg:inline-flex">Pesquisar...</span>
                <span className="inline-flex lg:hidden">Pesquisar...</span>
                <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
              <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <Calendar />
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                      <Smile />
                      <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                      <Calculator />
                      <span>Calculator</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <User />
                      <span>Profile</span>
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <CreditCard />
                      <span>Billing</span>
                      <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Settings />
                      <span>Settings</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </CommandDialog>
            </div>

            <div className="flex gap-2 items-center">
              <ModeToggle />
              <NavUser user={user} />
            </div>
          </div>
          <div className="px-2.5 py-2">
            <Skeleton className="w-full h-96 !bg-dark-100 dark:!bg-muted mb-4" />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-4">
              <Skeleton className="w-full h-48 !bg-dark-100 dark:!bg-muted" />
              <Skeleton className="w-full h-48 !bg-dark-100 dark:!bg-muted" />
              <Skeleton className="w-full h-48 !bg-dark-100 dark:!bg-muted" />
              <Skeleton className="w-full h-48 !bg-dark-100 dark:!bg-muted" />
              <Skeleton className="w-full h-48 !bg-dark-100 dark:!bg-muted" />
              <Skeleton className="w-full h-48 !bg-dark-100 dark:!bg-muted" />
              <Skeleton className="w-full h-48 !bg-dark-100 dark:!bg-muted" />
              <Skeleton className="w-full h-48 !bg-dark-100 dark:!bg-muted" />
              <Skeleton className="w-full h-48 !bg-dark-100 dark:!bg-muted" />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};
