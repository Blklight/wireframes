import { IconSidebar } from "@/components/icon-sidebar";
import { NavToolbar } from "@/components/nav-toolbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Create() {
  return (
    <SidebarProvider>
      <div className="w-full flex flex-row min-h-svh">
        <IconSidebar />
        <div className="bg-slate-50 dark:bg-slate-950 shadow rounded-lg border flex-1 my-2.5 mr-2.5">
          <NavToolbar />
          <div className="mt-2 px-4">
            <div className="grid gap-5 md:grid-cols-2 grid-cols-1">
              <div className="">
                <h1 className="text-3xl font-bold mb-4">Criar tutorial</h1>
                <div className="flex flex-col gap-4">
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="titulo">Titulo</Label>
                    <Input type="titulo" id="titulo" placeholder="Titulo" />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <Label htmlFor="descricao">Descrição</Label>
                    <Textarea id="descricao" placeholder="Descrição" />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <p>Imagem</p>
                    <Skeleton className="w-full h-24 !bg-dark-100 dark:!bg-muted" />
                  </div>
                </div>
              </div>
              <div className="">
                <Skeleton className="w-full h-48 !bg-dark-100 dark:!bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
