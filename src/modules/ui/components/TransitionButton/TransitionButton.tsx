export interface TransitionButtonProps {
  src?: string
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const TransitionButton: React.FC<TransitionButtonProps> = ({ src, onClick }) => {
  return (
    <button className="" onClick={onClick}>
      {
        src
          ? <img className="" src={src} alt='ia_icon' />
          : <span>button</span>
      }
    </button>
  )
}