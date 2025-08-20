"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import React from "react";
import { Package, SquareUser, ReceiptText, CalendarRange } from "lucide-react";
import TDCLOGO from "../../assets/TDClogo.png";
import Image from "../../../node_modules/next/image";
import { Button } from "@/components/ui/button";
import Link from "../../../node_modules/next/link";

const AppSidebar = () => {
  // menu items
  const items = [
    {
      title: "Featured",
      url: `/double`,
      icon: ReceiptText,
    },
    {
      title: "Double Doors",
      url: `/double`,
      icon: ReceiptText,
    },
    {
      title: "Single Doors",
      url: `/double`,
      icon: ReceiptText,
    },
    {
      title: "Railing",
      url: `/double`,
      icon: ReceiptText,
    },
    {
      title: "Window/Transom",
      url: `/double`,
      icon: ReceiptText,
    },
    {
      title: "Round Top",
      url: `/double`,
      icon: ReceiptText,
    },
    {
      title: "Round Top Double",
      url: `/double`,
      icon: ReceiptText,
    },
  ];

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href={`/`}>
                {/* <Image width={40} height={40} src={TDCLOGO} alt="TDC" /> */}
                <span className="text-base text-black font-semibold">
                 </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>V1 Fulfillment</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
