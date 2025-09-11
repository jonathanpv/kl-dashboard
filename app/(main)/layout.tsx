import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import * as React from "react";
import { ViewProvider } from "@/contexts/ViewContext";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewProvider>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 60)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset className="p-6">
          <SiteHeader />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </ViewProvider>
  );
}