import { useState } from 'react'
import { Form, Input, Button, Card, Typography, Alert } from 'antd'
import { CoffeeOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { useAuth } from '../contexts/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'

const { Title, Paragraph } = Typography

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const onFinish = async (values) => {
    setError(null)
    setSubmitting(true)
    try {
      await login({ username: values.username, password: values.password })
      navigate(from, { replace: true })
    } catch (e) {
      setError(e?.message || 'Não foi possível entrar.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="garcom-login-page">
      <div className="garcom-login-inner">
        <div className="garcom-login-hero">
          <div className="garcom-login-icon-wrap">
            <CoffeeOutlined className="garcom-login-icon" />
          </div>
          <Title level={3} className="garcom-login-title">
            VendaLume Garçom
          </Title>
          <Paragraph type="secondary" className="garcom-login-desc">
            Entre com o mesmo usuário do VendaLume. Apenas contas com permissão em <strong>Mesas do Restaurante</strong>{' '}
            podem acessar este app.
          </Paragraph>
        </div>

        <Card className="garcom-login-card" bordered={false}>
          {error && (
            <Alert type="error" message={error} showIcon style={{ marginBottom: 16 }} closable onClose={() => setError(null)} />
          )}
          <Form layout="vertical" onFinish={onFinish} requiredMark={false} size="large">
            <Form.Item name="username" label="Usuário" rules={[{ required: true, message: 'Informe o usuário' }]}>
              <Input prefix={<UserOutlined className="garcom-input-icon" />} placeholder="Usuário" autoComplete="username" />
            </Form.Item>
            <Form.Item name="password" label="Senha" rules={[{ required: true, message: 'Informe a senha' }]}>
              <Input.Password
                prefix={<LockOutlined className="garcom-input-icon" />}
                placeholder="Senha"
                autoComplete="current-password"
              />
            </Form.Item>
            <Form.Item style={{ marginBottom: 0 }}>
              <Button type="primary" htmlType="submit" loading={submitting} block size="large">
                Entrar
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  )
}
