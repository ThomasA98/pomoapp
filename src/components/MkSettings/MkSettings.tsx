import { MkMode } from '../../views/MkView'
import styles from './MkSettings.module.css'

export type MkSettingsProps = {
	layout: string
	onToggle: () => void
	mode: MkMode
}

export const MkSettings: React.FC<MkSettingsProps> = ({ layout, onToggle, mode }) => {
	return (
		<div className={ `${ styles.mksettings } ${ layout }` }>
			<div className={ styles.mksettings__setting_container }>
				<button className={ styles.mksettings__button } >Save</button>
			</div>
			<div className={ styles.mksettings__setting_container }>
				<span className={ styles.mksettings__span }>mode: </span>
				<button className={ styles.mksettings__button } onClick={ onToggle }>{mode}</button>
			</div>
		</div>
	)
}