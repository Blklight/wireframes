"use client";
import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Edit,
  EllipsisVertical,
  GalleryVerticalEnd,
  LogIn,
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

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LoginForm } from "./login-form";
import { useStore } from "@/store/use-store";
import { useRouter } from "next/navigation";
import { DropdownButton } from "./ui/dropdown-button";
import { SplitDropdownButton } from "./ui/split-dropdown-button";
import { SearchCommand } from "./search-command";
import { LoginFormDrawer } from "./login-form-drawer";
import { AnimatePresence, motion } from "motion/react";

export const Example = () => {
  const routeLogin = useStore((state: any) => state.routeLogin);
  const router = useRouter();

  const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  };
  const fileOptions = [
    { label: "New File", value: "new-file" },
    { label: "Open...", value: "open" },
    { label: "Save", value: "save" },
    { label: "Save As...", value: "save-as" },
  ];
  const [openSheet, setOpenSheet] = React.useState(false);

  const handleLogin = (data: boolean) => {
    if (data) {
      router.push("/login");
    } else {
      setOpenSheet(true);
    }
  };

  return (
    <SidebarProvider>
      <div className="w-full flex flex-row min-h-svh">
        <div className="flex flex-col h-svh sticky top-0 gap-4 items-center py-5 px-2.5">
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
          <Button variant={"secondary"} size={"icon"} className="mt-auto">
            <EllipsisVertical className="w-4 h-4" />
          </Button>
        </div>
        <div className="bg-slate-50 dark:bg-slate-950 shadow rounded-lg border flex-1 my-2.5 mr-2.5">
          <div className="flex justify-between items-center p-4">
            <SearchCommand />

            <div className="flex gap-2 items-center">
              <SplitDropdownButton
                iconOnly
                icon={<Edit className="h-4 w-4" />}
                options={fileOptions}
                variant="secondary"
              />
              <ModeToggle />
              <NavUser user={user} />
              <Button
                variant={"secondary"}
                size={"icon"}
                onClick={() => handleLogin(routeLogin)}
              >
                <LogIn className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="mt-2 px-4">
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
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        {/* <SheetTrigger>Open</SheetTrigger> */}
        <SheetContent className="w-[400px] sm:w-[500px] sm:max-w-[500px] max-w-[calc(100vw-32px)] max-h-[calc(100vh-32px)] xl:max-w-[500px] p-8 m-2.5 overflow-y-auto border rounded-md">
          {/* <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
          </SheetHeader> */}
          <LoginFormDrawer>
            <Skeleton className="w-full h-48 !bg-dark-100 dark:!bg-muted" />
          </LoginFormDrawer>
        </SheetContent>
      </Sheet>
    </SidebarProvider>
  );
};
