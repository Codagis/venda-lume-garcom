import { Modal } from 'antd'
import { getModalInstance } from './modalBridge'

export function confirmDeleteModal({
  title,
  description = 'Esta ação não pode ser desfeita.',
  okText = 'Excluir',
  cancelText = 'Cancelar',
  onOk,
}) {
  const modal = getModalInstance()
  const confirm = modal?.confirm ? modal.confirm : Modal.confirm
  confirm({
    title,
    content: description,
    okText,
    okType: 'danger',
    cancelText,
    centered: true,
    maskClosable: true,
    onOk,
  })
}

export function confirmLogoutModal({ onOk }) {
  const modal = getModalInstance()
  const confirm = modal?.confirm ? modal.confirm : Modal.confirm
  confirm({
    title: 'Sair do app Garçom?',
    content: 'Você precisará entrar novamente para acessar as mesas.',
    okText: 'Sair',
    okType: 'danger',
    cancelText: 'Cancelar',
    centered: true,
    maskClosable: false,
    keyboard: false,
    onOk,
  })
}
