import { Button } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { useAuth } from '../contexts/AuthContext'
import { confirmLogoutModal } from '../utils/confirmModal'
import { useNavigate } from 'react-router-dom'
import brandMarkUrl from '../assets/images/Vector (1).svg'
import brandWordmarkUrl from '../assets/images/vendalume.svg'

export default function GarcomLayout({ children }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    confirmLogoutModal({
      onOk: () => {
        logout()
        navigate('/login', { replace: true })
      },
    })
  }

  return (
    <div className="garcom-layout">
      <header className="garcom-layout-header">
        <div className="garcom-layout-brand">
          <div className="garcom-layout-brand-logos">
            <img src={brandMarkUrl} alt="" className="garcom-layout-brand-mark" aria-hidden />
            <img src={brandWordmarkUrl} alt="VendaLume" className="garcom-layout-brand-wordmark" />
          </div>
          <div>
            <div className="garcom-layout-title">Garçom</div>
            <span className="garcom-layout-sub">Mesas e comandas</span>
          </div>
        </div>
        <div className="garcom-layout-user">
          <span className="garcom-layout-user-name">
            <UserOutlined /> {user?.fullName || user?.username || '—'}
          </span>
          <Button type="default" icon={<LogoutOutlined />} onClick={handleLogout} size="middle">
            Sair
          </Button>
        </div>
      </header>
      <div className="garcom-layout-body">{children}</div>
    </div>
  )
}
