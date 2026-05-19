import { useState } from 'react'
import { Form, Input, Button, Alert } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useAuth } from '../../contexts/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'
import logoUrl from '../../assets/images/logo.svg'
import './Login.css'

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
      await login({ username: values.username.trim(), password: values.password })
      navigate(from, { replace: true })
    } catch (e) {
      setError(e?.message || 'Não foi possível entrar.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-backdrop" aria-hidden="true" />
      <div className="login-container">
        <div className="login-card">
          <header className="login-header">
            <div className="login-brand">
              <img src={logoUrl} alt="VendaLume" className="login-logo" width={280} height={48} />
            </div>
            <p className="login-subtitle">
              Garçom · Mesas e comandas. Use o mesmo usuário do VendaLume (permissão em{' '}
              <strong>Mesas do Restaurante</strong>).
            </p>
          </header>

          {error && (
            <Alert type="error" message={error} showIcon closable onClose={() => setError(null)} style={{ marginBottom: 16 }} />
          )}

          <Form layout="vertical" onFinish={onFinish} requiredMark={false} size="large" className="login-form">
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Informe o usuário.' },
                { whitespace: true, message: 'Usuário inválido.' },
              ]}
            >
              <Input prefix={<UserOutlined className="login-input-icon" />} placeholder="Usuário" autoComplete="username" autoFocus />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Informe a senha.' }]}>
              <Input.Password
                prefix={<LockOutlined className="login-input-icon" />}
                placeholder="Senha"
                autoComplete="current-password"
              />
            </Form.Item>
            <Form.Item className="login-submit-item">
              <Button type="primary" htmlType="submit" loading={submitting} block className="login-submit-btn">
                Entrar
              </Button>
            </Form.Item>
          </Form>
          <p className="login-footer">© VendaLume Garçom · Acesso restrito</p>
        </div>
      </div>
    </div>
  )
}
