import { Button, Typography } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { useAuth } from '../contexts/AuthContext'
import { confirmLogoutModal } from '../utils/confirmModal'

const { Text } = Typography

export default function GarcomLayout({ children }) {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    confirmLogoutModal({
      onOk: () => logout(),
    })
  }

  return (
    <div className="garcom-layout">
      <header className="garcom-layout-header">
        <div className="garcom-layout-brand">
          <span className="garcom-layout-logo">VL</span>
          <div>
            <div className="garcom-layout-title">Garçom</div>
            <Text type="secondary" className="garcom-layout-sub">
              Mesas e comandas
            </Text>
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
