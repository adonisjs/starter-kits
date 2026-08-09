import { LayoutGrid } from 'lucide-react'
import DashboardLayout from '~/layouts/dashboard'

export default function Dashboard() {
  return (
    <div className="empty">
      <div className="empty__mark">
        <LayoutGrid size={22} />
      </div>
      <h1>Your dashboard is ready</h1>
      <p>
        It&apos;s empty on purpose. A clean starting point with nothing to undo. Add your first
        route and component to begin.
      </p>
      <p className="mono" style={{ fontSize: 12.5, color: 'var(--subtle)', marginTop: 4 }}>
        Start in <span className="kbd">inertia/pages/dashboard.tsx</span>
      </p>
    </div>
  )
}

Dashboard.layout = [DashboardLayout]
