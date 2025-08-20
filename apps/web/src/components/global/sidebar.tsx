'use client'

import { Button } from '@/components/ui/button'
import { Building2, FolderOpen } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Sidebar() {
  return (
    <div className="bg-sidebar border-sidebar-border w-64 border-r">
      <div className="p-6">
        <h1 className="text-sidebar-foreground text-xl font-bold">Projecta</h1>
      </div>

      <nav className="space-y-2 px-4">
        <NavLink href="/dashboard/projects">
          <FolderOpen className="mr-2 h-4 w-4" />
          Projects
        </NavLink>
        <NavLink href="/dashboard/organizations">
          <Building2 className="mr-2 h-4 w-4" />
          Organizations
        </NavLink>
      </nav>
    </div>
  )
}

type NavLinkProps = {
  children: React.ReactNode
  href: string
}

function NavLink({ children, href }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Button
      variant={isActive ? 'secondary' : 'ghost'}
      className="w-full justify-start"
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}
