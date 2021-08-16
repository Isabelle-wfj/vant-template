export type LoadingType = 'circular' | 'spinner'

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini'

export interface ButtonAdapter {
  text?: string
  icon?: string
  color?: string
  block?: boolean
  plain?: boolean
  round?: boolean
  square?: boolean
  loading?: boolean
  hairline?: boolean
  disabled?: boolean
  iconPrefix?: string
  loadingSize?: [number, string]
  loadingText?: string
  loadingType?: LoadingType
  type?: ButtonType
  size?: ButtonSize
  iconPosition?: 'left' | 'right'
  slots?: {
    default?: string
    icon?: string
    loading?: string
  }
  on?: {
    click?(e: MouseEvent): void
  }
}
