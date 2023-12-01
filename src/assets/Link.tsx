interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Link = ({
  size = 24,
  onClick,
  className
}: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      className={`cursor-pointer ${className}`}
    >
      <path d="M6.27247 17.7277C5.06332 16.5185 5.06332 14.5528 6.27247 13.3436L9.1009 10.5152L7.75739 9.17168L4.92897 12.0001C3.99128 12.9378 3.4645 14.2096 3.4645 15.5356C3.4645 16.8617 3.99128 18.1335 4.92897 19.0712C5.86665 20.0089 7.13842 20.5356 8.4645 20.5356C9.79058 20.5356 11.0624 20.0089 12 19.0712L14.8285 16.2428L13.485 14.8992L10.6565 17.7277C9.44738 18.9368 7.48162 18.9368 6.27247 17.7277ZM9.87871 15.5356L15.5356 9.87879L14.1214 8.46458L8.4645 14.1214L9.87871 15.5356ZM12 4.92904L9.17161 7.75747L10.5151 9.10097L13.3435 6.27255C14.5527 5.06339 16.5184 5.06339 17.7276 6.27255C18.9368 7.4817 18.9368 9.44746 17.7276 10.6566L14.8992 13.485L16.2427 14.8285L19.0711 12.0001C20.0088 11.0624 20.5356 9.79066 20.5356 8.46458C20.5356 7.13849 20.0088 5.86672 19.0711 4.92904C18.1334 3.99136 16.8616 3.46458 15.5356 3.46458C14.2095 3.46458 12.9377 3.99136 12 4.92904Z" fill="currentColor" />
    </svg>
  )
}