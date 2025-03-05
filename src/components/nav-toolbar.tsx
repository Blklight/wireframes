"use client";
import * as React from "react";
import { Sparkle } from "@phosphor-icons/react";
import { SearchCommand } from "./search-command";
import { SplitDropdownButton } from "./ui/split-dropdown-button";
import { ModeToggle } from "./mode-toggle";
import { NavUser } from "./nav-user";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";
import { useStore } from "@/store/use-store";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent } from "./ui/sheet";
import { LoginFormDrawer } from "./login-form-drawer";
import { Skeleton } from "./ui/skeleton";

export const NavToolbar = () => {
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
    <>
      <div className="flex justify-between items-center p-4">
        <SearchCommand />
        <div className="flex gap-2 items-center">
          <SplitDropdownButton
            iconOnly
            icon={<Sparkle className="h-4 w-4" />}
            options={fileOptions}
            variant="secondary"
            onClick={() => console.log("click")}
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
      </div>
    </>
  );
};
