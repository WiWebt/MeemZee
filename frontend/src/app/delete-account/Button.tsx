import Link from 'next/link'

const baseStyles = {
  solid:
    'inline-flex justify-center items-center rounded-lg py-2 px-4 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center items-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.4)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
}

const variantStyles = {
  solid: {
    blue: 'relative overflow-hidden bg-primary-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-primary-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-primary-900 hover:bg-white/90 active:bg-white/90 active:text-primary-900/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
    red: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-700 active:text-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
}

type ButtonProps = {
  variant?: keyof typeof baseStyles
  color?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
} & (
  | ({ href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>)
  | ({ href?: never } & React.ButtonHTMLAttributes<HTMLButtonElement>)
)

export function Button({
  variant = 'solid',
  color = 'blue',
  className,
  href,
  type = 'button',
  disabled = false,
  ...props
}: ButtonProps) {
  className = `${baseStyles[variant]} ${variantStyles[variant][color as keyof (typeof variantStyles)[typeof variant]]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className || ''}`

  return href ? (
    <Link href={href} className={className} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />
  ) : (
    <button
      type={type}
      disabled={disabled}
      className={className}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  )
}
