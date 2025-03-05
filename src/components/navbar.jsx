import Link from "next/link"
import { MoonIcon, SunIcon, PlusIcon, NotebookPenIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <NotebookPenIcon className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">
              NotesPal
            </span>
          </Link>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-background hover:bg-accent">
                  Notes
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/notes/create"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Create New Note</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Start a new note and capture your thoughts
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/notes/all"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">All Notes</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Browse through all your saved notes
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions Section */}
        <div className="flex items-center space-x-4">
          {/* Create Note Button */}
          <Button 
            asChild
            variant="secondary" 
            size="sm" 
            className="flex items-center space-x-2"
          >
            <Link href="/notes/create">
              <PlusIcon className="w-4 h-4" />
              <span>New Note</span>
            </Link>
          </Button>

          {/* Dark Mode Toggle */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar