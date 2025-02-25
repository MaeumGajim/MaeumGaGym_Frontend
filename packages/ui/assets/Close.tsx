interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
  onTouchEnd?: () => void
}

export const Close = ({ size = 24, onClick, className = '', onTouchEnd }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      onTouchEnd={onTouchEnd}
      className={`${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <path
        d="M6 6L18 18M6 18L18 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
