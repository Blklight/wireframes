"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Wrench } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { useStore } from "@/store/use-store";

const FormSchema = z.object({
  routeLogin: z.boolean().default(false),
});

export const DevTools = () => {
  const { setRouteLogin } = useStore() as any;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      routeLogin: false,
    },
  });

  const routeLogin = form.watch("routeLogin");

  React.useEffect(() => {
    console.log("routeLogin:", routeLogin);
    setRouteLogin(routeLogin);
  }, [routeLogin]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={"icon"}
          className="fixed bottom-4 right-4 rounded-full border-2 bg-blue-500 text-white cursor-pointer"
        >
          <Wrench className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dev Tools</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="routeLogin"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-md border p-4">
                  <div className="flex flex-col space-y-1 leading-none">
                    <FormLabel>Login via rota</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
