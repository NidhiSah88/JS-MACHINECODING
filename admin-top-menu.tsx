"use client"
import { LayoutDashboard, Users, ShoppingCart, FileText, Settings, ChevronDown, Menu } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const menuItems = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    subItems: ["Overview", "Analytics", "Reports"],
  },
  {
    icon: Users,
    title: "Users",
    subItems: ["All Users", "Admins", "Moderators"],
  },
  {
    icon: ShoppingCart,
    title: "Products",
    subItems: ["All Products", "Categories", "Inventory"],
  },
  {
    icon: FileText,
    title: "Orders",
    subItems: ["All Orders", "Pending", "Completed"],
  },
  {
    icon: Settings,
    title: "Settings",
    subItems: ["General", "Security", "Notifications"],
  },
]

export function AdminTopMenu() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <DropdownMenu key={item.title}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start">
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                      <ChevronDown className="ml-auto h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem key={subItem}>
                        <a href="#" className="w-full">
                          {subItem}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <ScrollArea className="max-w-full">
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            {menuItems.map((item) => (
              <DropdownMenu key={item.title}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-full">
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem key={subItem}>
                      <a href="#" className="w-full">
                        {subItem}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </nav>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </header>
  )
}

