import { Calendar, CalendarClock, FileText, Home, Inbox, Search, Settings, Table } from "lucide-react"
import { UserButton } from "@clerk/nextjs"
import { dark } from '@clerk/themes'
import Image from "next/image"
import Link from "next/link"


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Tasks",
    url: "/tasks",
    icon: Table,
  },
  {
    title: "PDF Reader",
    url: "/ai-pdf",
    icon: FileText,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Scheduler",
    url: "/scheduler",
    icon: CalendarClock,
  },
  {
    title: "AI Resume",
    url: "/ai-resume",
    icon: FileText,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-none">
      <SidebarContent className="bg-gray-900/95 backdrop-blur-sm">
        <SidebarGroup>
          <div className="flex items-center gap-2 cursor-pointer mb-10 mt-2">
            {/* Logo - always visible */}
            <Link href="/">
            <div className="shrink-0 w-8 h-8">
              <Image 
                src="/logo.svg"
                alt=""
                width={32}
                height={32}
                className="w-full h-full"
                priority
              />
            </div>
            </Link>
            {/* Text - hides when collapsed */}
            <Link href="/">
            <span className="text-xl font-bold cursor-pointer text-purple-400 hover:text-purple-300 transition-opacity duration-200 group-data-[collapsible=icon]:opacity-0">
              Muse
            </span>
            </Link>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon 
                        className="text-purple-400 hover:text-purple-300 min-w-[20px] min-h-[20px] transition-all duration-200 group-data-[collapsible=icon]:w-3 group-data-[collapsible=icon]:h-3 w-6 h-6" 
                        strokeWidth={2} 
                      />
                      <span className="text-purple-400 hover:text-purple-300">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-gray-900/95 backdrop-blur-sm">
        <SidebarContent>
          <SidebarFooter>
            <span className="text-purple-400 hover:text-purple-300">       
              <UserButton 
      afterSignOutUrl='/'
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#8B5CF6", // Purple accent
        },
        elements: {
          // Option 1: Glassmorphism with purple accent
          card: "bg-gray-900/40 backdrop-blur-xl border border-purple-500/20 shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]",
          headerTitle: "text-white",
          headerSubtitle: "text-purple-200",
          socialButtonsBlockButton: "bg-gray-800/60 hover:bg-gray-700/60 border border-purple-500/20",
          formButtonPrimary: "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600",
          footerActionLink: "text-purple-300 hover:text-purple-200",
          avatarBox: "w-8 h-8", // Control the size
          userButtonAvatarBox: "w-8 h-8 !important", // Force size
          userButtonTrigger: "focus:shadow-none", 
          
        }
      }}
      /></span>
          </SidebarFooter>
        </SidebarContent>
      </SidebarFooter>
    </Sidebar>
  )
}
