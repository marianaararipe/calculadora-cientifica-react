import styles from './Button.module.css'

type ButtonProps = {
  value: string
  onClick?: (value: string) => void
  variant?: string
  extraClassName?: string
}


export default function Button({
  value,
  onClick,
  variant,
  extraClassName = '',
}: ButtonProps) {
  const classList = [styles.button]

  if (variant) {
    classList.push(...variant.split(' ').map((v) => styles[v]))
  }

  if (extraClassName) {
    classList.push(extraClassName)
  }

  return (
    <button className={classList.join(' ')} onClick={() => onClick(value)}>
      {value}
    </button>
  )
}