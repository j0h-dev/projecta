import { Header } from '@/components/global/header'
import { Sidebar } from '@/components/global/sidebar'
import { authClient } from '@/lib/auth-client'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

type LayoutProps = Readonly<{
  children: React.ReactNode
}>

export default async function Layout({ children }: LayoutProps) {
  const { data: session, error } = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  })

  if (!session || error) {
    redirect('/login')
  }

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="w-full">
        <Header />
        {children}
      </div>
    </div>
  )
}
