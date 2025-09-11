'use client'

import * as React from "react"
import { usePathname } from "next/navigation"
import {
  IconCamera,
  IconFileAi,
  IconFileDescription,
} from "@tabler/icons-react"

import { MainLogoDark } from "./icons/MainLogo"
import { AnalyticsIconDark } from "./icons/AnalyticsIcon"
import { BookIconDark } from "./icons/BookIcon"
import { CreatorsIconDark } from "./icons/CreatorsIcon"
import { FlaskIconDark } from "./icons/FlaskIcon"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
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
import { useView } from "@/hooks/use-view"
import { useIsMobile } from "@/hooks/use-mobile"
import { BottomMenu } from "@/components/bottom-menu"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Library",
      url: "/dashboard",
      icon: BookIconDark,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: AnalyticsIconDark,
    },
    {
      title: "Creators",
      url: "/dashboard/creators",
      icon: CreatorsIconDark,
    },
    {
      title: "Experiments",
      url: "/dashboard/experiments",
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
  const pathname = usePathname()
  const { setCurrentView } = useView()
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const sortedNavItems = [...data.navMain].sort(
      (a, b) => b.url.length - a.url.length
    )
    const currentNavItem = sortedNavItems.find((item) =>
      pathname.startsWith(item.url)
    )
    if (currentNavItem) {
      setCurrentView(currentNavItem.title)
    }
  }, [pathname, setCurrentView])

  const mobileNavItems = data.navMain.map(item => ({
    label: item.title,
    icon: item.icon,
    href: item.url,
  }));

  return (
    <>
      {isMobile ? (
        <BottomMenu items={mobileNavItems} />
      ) : (
        <Sidebar className="sidebarclassbro pt-[36px]" collapsible="offcanvas" {...props}>
          <SidebarHeader className="sidebarheaderclassbro h-12 items-center mb-5">
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
          </SidebarContent>
          <SidebarFooter className="sidebarFOOTERCOmponentBro ">
            <ModeToggle/>
            <NavUser user={data.user} />
          </SidebarFooter>
        </Sidebar>
      )}
    </>
  )
}
