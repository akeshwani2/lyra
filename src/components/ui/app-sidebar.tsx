"use client"

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Calendar, CalendarClock, FileText, ListTodo, Brain, LogOut, FileAudio, Feather, FilePen } from "lucide-react"
import { useClerk } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

// Menu items
const items = [
  {
    title: "Tasks",
    url: "/tasks",
    icon: ListTodo,
    activeColor: "bg-blue-500/10 text-blue-400",
    hoverColor: "hover:bg-blue-500/5 hover:text-blue-400 !text-blue-400",
  },
  {
    title: "PDF Reader",
    url: "/ai-pdf",
    icon: FileText,
    activeColor: "bg-green-500/10 text-green-400",
    hoverColor: "hover:bg-green-500/5 hover:text-green-400 !text-green-400",
  },
  {
    title: "Scribe",
    url: "/scribe",
    icon: Feather,
    activeColor: "bg-amber-500/10 text-amber-400",
    hoverColor: "hover:bg-amber-500/5 hover:text-amber-400 !text-amber-400",
  },
  {
    title: "Note Mate",
    url: "/ai-resume",
    icon: FilePen,
    activeColor: "bg-purple-500/10 text-purple-400",
    hoverColor: "hover:bg-purple-500/5 hover:text-purple-400 !text-purple-400",

  },

  {
    title: "Scheduler",
    url: "/scheduler",
    icon: CalendarClock,
    activeColor: "bg-pink-500/10 text-pink-400",
    hoverColor: "hover:bg-pink-500/5 hover:text-pink-400 !text-pink-400",
  },
]

// Add this new type to handle the custom styling
// type CustomSidebarMenuButton = React.ComponentProps<typeof SidebarMenuButton> & {
//   isActive?: boolean
//   customActiveClass?: string
//   customHoverClass?: string
// }

export function AppSidebar() {
  const { signOut } = useClerk()
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(pathname)

  useEffect(() => {
    setActiveTab(pathname)
  }, [pathname])

  return (
    <Sidebar collapsible="icon" className="border-none w-[100px]">
      <SidebarContent className="bg-gray-900/95 backdrop-blur-sm h-full overflow-visible">
        <SidebarGroup className="h-full flex flex-col">
          {/* Logo */}
          <div className="flex justify-center py-8">
            <Link href="/">
              <div className="w-16 h-16">
                <Image 
                  src="/logo.svg"
                  alt=""
                  width={65}
                  height={60}
                  className="w-full h-full bg-gray-900  text-center text-white rounded-lg hover:bg-gray-950 transition-colors duration-200"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Navigation Icons */}
          <SidebarGroupContent className="flex-1">
            <SidebarMenu className="flex flex-col items-center justify-evenly h-[70vh] pt-12">
              {items.map((item, index) => {
                const isActive = activeTab === item.url
                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton 
                      asChild 
                      className={cn(
                        "!p-0",
                        "!bg-transparent hover:!bg-transparent active:!bg-transparent",
                        "data-[active=true]:!bg-transparent",
                        "[&>*]:!bg-transparent [&>*]:hover:!bg-transparent",
                        "!hover:bg-opacity-0"
                      )}
                    >
                      <Link 
                        href={item.url} 
                        className={cn(
                          "p-4 transition-colors duration-200 flex items-center justify-center w-[75px] h-[75px]",
                          isActive 
                            ? item.activeColor
                            : "text-gray-400 " + item.hoverColor,
                          "hover:text-inherit",
                          isActive 
                            ? "hover:text-blue-400"
                            : item.hoverColor,
                          "hover:!bg-transparent [&>*]:hover:!bg-transparent"
                        )}
                      >
                        <item.icon 
                          className={cn(
                            "!w-9 !h-9 transition-colors",
                            isActive 
                              ? item.activeColor.split(' ')[1]
                              : "text-gray-400",
                            isActive 
                              ? "hover:text-amber-400"
                              : item.hoverColor.split(' ')[1]
                          )}
                          strokeWidth={1.5} 
                        />
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>

          {/* Footer with Sign Out */}
          <div className="flex flex-col items-center gap-4 pb-2">
            <button 
              onClick={async () => {
                try {
                  await signOut()
                  // Only redirect after successful sign out
                  router.push('/')
                } catch (error) {
                  console.error('Error signing out:', error)
                }
              }}
              className="p-4 transition-all duration-200 flex items-center justify-center w-[75px] h-[75px] text-gray-400 hover:text-red-400 hover:bg-red-500/5"
            >
              <LogOut className="w-8 h-8" strokeWidth={1.5} />
            </button>
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}