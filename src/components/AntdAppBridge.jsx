import { App } from 'antd'
import { useEffect } from 'react'
import { setModalInstance } from '../utils/modalBridge'

export default function AntdAppBridge({ children }) {
  const { modal } = App.useApp()

  useEffect(() => {
    setModalInstance(modal)
    return () => setModalInstance(null)
  }, [modal])

  return children
}

