import tomato from '../../assets/tomato.svg'
import styles from './Header.module.css'

export const Header = () => {
	return (
		<header className={ `${ styles.header } ${ styles.header__container }` }>
        <div>
          <img className={ styles.header__icon } src={tomato} alt='icon_tomato' />
        </div>
        <h1 className={ styles.header__title }>Pomoapp</h1>
      </header>
	)
}