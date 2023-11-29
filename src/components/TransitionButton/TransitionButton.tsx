
import style from './TransitionButton.module.css'

export interface TransitionButtonProps {
    src: string
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const TransitionButton: React.FC<TransitionButtonProps> = ({ src, onClick }) => {
  return (
    <button className={ style.toggle_button } onClick={onClick}>
        <img className={ style.toggle_button__icon } src={src} alt='ia_icon' />
    </button>
  )
}