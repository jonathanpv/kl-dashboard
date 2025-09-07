"use client"

import * as React from "react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { PlusIconDark } from "./icons/PlusIcon"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: React.FC<React.SVGProps<SVGSVGElement>>
  }[]
}) {
  return (
    <SidebarGroup className="THENAVMAINGROUP SIDEBARGROUP CLASS BRO">
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">


            <SidebarMenuButton
              tooltip="Create New"
              className="h-11 gap-[10px] rounded-[8px] px-[16px] py-[13px] radial-shine-background text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <PlusIconDark className="!h-[22px] !w-[22px]"/>
              <span className="font-sans text-center text-base font-bold tracking-tight">Create New</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        
        <SidebarMenu className="gap-[2px] theSECONDSidebarmaenushit">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton className="h-10 gap-[10px] rounded-[8px] px-[16px] py-[13px]" tooltip={item.title}>
                {item.icon && <item.icon className="!h-[22px] !w-[22px] text-white" />}
                <span className="font-medium text-[14px] tracking-tight">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}