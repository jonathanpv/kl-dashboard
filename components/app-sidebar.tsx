"use client"

import * as React from "react"
import {
  IconCamera,
  IconFileAi,
  IconFileDescription,
  IconHelp,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react"

import { MainLogoDark } from "./icons/MainLogo"
import { AnalyticsIconDark } from "./icons/AnalyticsIcon"
import { BookIconDark } from "./icons/BookIcon"
import { CreatorsIconDark } from "./icons/CreatorsIcon"
import { FlaskIconDark } from "./icons/FlaskIcon"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ModeToggle } from "./moon-toggle"

import { SmileIconDark } from "./icons/SmileIconDark"
import { SmileIconTongueDark } from "./icons/SmileIconTongueDark"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Library",
      url: "#",
      icon: BookIconDark,
    },
    {
      title: "Analytics",
      url: "#",
      icon: AnalyticsIconDark,
    },
    {
      title: "Creators",
      url: "#",
      icon: CreatorsIconDark,
    },
    {
      title: "Experiments",
      url: "#",
      icon: FlaskIconDark,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Group 1",
      url: "#",
      icon: SmileIconDark,
    },
    {
      name: "Group 2",
      url: "#",
      icon: SmileIconTongueDark,
    },
    {
      name: "Group 3",
      url: "#",
      icon: SmileIconDark,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar className="sidebarclassbro !pt-12" collapsible="offcanvas" {...props}>
      <SidebarHeader className="sidebarheaderclassbro mb-5">
        <SidebarMenu className="sidebarmenuclassbro">
          <SidebarMenuItem className="sidebarMenuITEMclassbro">
            <SidebarMenuButton
              asChild
              className="sidebarMENUBUTTONCLASSBRO data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <MainLogoDark className="!w-[32px] !h-[24px] text-foreground"/>
                <span className="text-2xl font-russo-one">GROWWW</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="sidebarCONTENTCLASSBRO">
        <NavMain  items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="sidebarFOOTERCOmponentBro pb-12">
        <ModeToggle/>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
