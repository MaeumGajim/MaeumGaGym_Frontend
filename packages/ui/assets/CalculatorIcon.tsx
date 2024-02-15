interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const CalculatorIcon = ({ size = 24, onClick, className = '' }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      onClick={onClick}
      className={`${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <path
        d="M8.33301 6.66659C8.33301 4.82564 9.82539 3.33325 11.6663 3.33325H28.333C30.174 3.33325 31.6663 4.82564 31.6663 6.66659V33.3333C31.6663 35.1742 30.174 36.6666 28.333 36.6666H11.6663C9.82539 36.6666 8.33301 35.1742 8.33301 33.3333V6.66659Z"
        fill="#C4DDF5"
      />
      <path
        d="M11.6663 8.33325C11.6663 7.41278 12.4125 6.66659 13.333 6.66659H26.6663C27.5868 6.66659 28.333 7.41278 28.333 8.33325V11.6666C28.333 12.5871 27.5868 13.3333 26.6663 13.3333H13.333C12.4125 13.3333 11.6663 12.5871 11.6663 11.6666V8.33325Z"
        fill="#0A7FF5"
      />
      <path
        d="M11.6663 18.3333C11.6663 17.4128 12.4125 16.6666 13.333 16.6666C14.2535 16.6666 14.9997 17.4128 14.9997 18.3333C14.9997 19.2537 14.2535 19.9999 13.333 19.9999C12.4125 19.9999 11.6663 19.2537 11.6663 18.3333Z"
        fill="#62ABF5"
      />
      <path
        d="M11.6663 24.9999C11.6663 24.0794 12.4125 23.3333 13.333 23.3333C14.2535 23.3333 14.9997 24.0794 14.9997 24.9999C14.9997 25.9204 14.2535 26.6666 13.333 26.6666C12.4125 26.6666 11.6663 25.9204 11.6663 24.9999Z"
        fill="#62ABF5"
      />
      <path
        d="M11.6663 31.6666C11.6663 30.7461 12.4125 29.9999 13.333 29.9999C14.2535 29.9999 14.9997 30.7461 14.9997 31.6666C14.9997 32.5871 14.2535 33.3333 13.333 33.3333C12.4125 33.3333 11.6663 32.5871 11.6663 31.6666Z"
        fill="#62ABF5"
      />
      <path
        d="M18.333 18.3333C18.333 17.4128 19.0792 16.6666 19.9997 16.6666C20.9201 16.6666 21.6663 17.4128 21.6663 18.3333C21.6663 19.2537 20.9201 19.9999 19.9997 19.9999C19.0792 19.9999 18.333 19.2537 18.333 18.3333Z"
        fill="#62ABF5"
      />
      <path
        d="M18.333 24.9999C18.333 24.0794 19.0792 23.3333 19.9997 23.3333C20.9201 23.3333 21.6663 24.0794 21.6663 24.9999C21.6663 25.9204 20.9201 26.6666 19.9997 26.6666C19.0792 26.6666 18.333 25.9204 18.333 24.9999Z"
        fill="#62ABF5"
      />
      <path
        d="M18.333 31.6666C18.333 30.7461 19.0792 29.9999 19.9997 29.9999C20.9201 29.9999 21.6663 30.7461 21.6663 31.6666C21.6663 32.5871 20.9201 33.3333 19.9997 33.3333C19.0792 33.3333 18.333 32.5871 18.333 31.6666Z"
        fill="#62ABF5"
      />
      <path
        d="M24.9997 18.3333C24.9997 17.4128 25.7459 16.6666 26.6663 16.6666C27.5868 16.6666 28.333 17.4128 28.333 18.3333C28.333 19.2537 27.5868 19.9999 26.6663 19.9999C25.7459 19.9999 24.9997 19.2537 24.9997 18.3333Z"
        fill="#62ABF5"
      />
      <path
        d="M24.9997 24.9999C24.9997 24.0794 25.7459 23.3333 26.6663 23.3333C27.5868 23.3333 28.333 24.0794 28.333 24.9999C28.333 25.9204 27.5868 26.6666 26.6663 26.6666C25.7459 26.6666 24.9997 25.9204 24.9997 24.9999Z"
        fill="#62ABF5"
      />
      <path
        d="M24.9997 31.6666C24.9997 30.7461 25.7459 29.9999 26.6663 29.9999C27.5868 29.9999 28.333 30.7461 28.333 31.6666C28.333 32.5871 27.5868 33.3333 26.6663 33.3333C25.7459 33.3333 24.9997 32.5871 24.9997 31.6666Z"
        fill="#62ABF5"
      />
    </svg>
  )
}
