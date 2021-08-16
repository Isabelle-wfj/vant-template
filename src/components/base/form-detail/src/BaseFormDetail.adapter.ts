export type FieldType =
  | 'tel'
  | 'text'
  | 'digit'
  | 'number'
  | 'search'
  | 'password'
  | 'textarea'

export type FieldTextAlign = 'left' | 'center' | 'right'

export type FieldClearTrigger = 'always' | 'focus'
type TypeField = 'textarea' | 'text'
export interface Field {
  label?: string
  name?: string
  type?: TypeField
  placeholder?: string
  colon?: boolean
  required?: boolean
  center?: boolean
  labelClass?: string | Array<string>
  labelWidth?: number | string
  labelAlign?: FieldTextAlign
  inputAlign?: FieldTextAlign
  leftIcon?: string
  rightIcon?: string
  iconPrefix?: string
  slots?: {
    label?: string
    input?: string
    leftIcon?: string
    rightIcon?: string
    button?: string
    extra?: string
  }
  on?: {
    clickLeftIcon?(e: MouseEvent): void
    clickRightIcon?(e: MouseEvent): void
  }
}
interface FormMOdel {
  [key: string]: string | number
}
interface FormArr {
  className?: string
  fieldConfig?: Field[]
}
export interface FormDetailAdapter {
  title?: string
  sub?: string
  colon?: boolean
  readonly?: boolean
  showError?: boolean
  labelWidth?: [number, string]
  labelAlign?: FieldTextAlign
  inputAlign?: FieldTextAlign
  form?: FormArr[]
  formModel?: FormMOdel
}
