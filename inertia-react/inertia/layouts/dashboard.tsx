import Logo from '~/components/logo'
import { type ReactNode } from 'react'
import { House, LogOut } from 'lucide-react'
import FlashToasts from '~/components/flash_toasts'
import ThemeToggle from '~/components/theme_toggle'
import { Form, Link } from '@adonisjs/inertia/react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="dashbar">
        <Logo size={28} />
        <div className="dashbar__right">
          <ThemeToggle />
          <Form route="session.destroy">
            <button type="submit" className="btn btn--secondary btn--sm">
              <LogOut size={15} /> Log out
            </button>
          </Form>
        </div>
      </header>

      <nav className="subnav">
        <div className="subnav__inner">
          <Link route="dashboard" className="subnav__item subnav__item--active" aria-current="page">
            <House size={14} />
            Dashboard
          </Link>
        </div>
      </nav>

      <div className="dash">{children}</div>
      <FlashToasts />
    </>
  )
}
