import { MkMode } from '../../MkView'

export type MkSettingsProps = {
	onToggle: () => void
	mode: MkMode
}

export const MkSettings: React.FC<MkSettingsProps> = ({ onToggle, mode }) => {
	return (
		<div className="">
			<div className="">
				<button className="" >Save</button>
			</div>
			<div className="">
				<span className="">mode: </span>
				<button className="" onClick={ onToggle }>{mode}</button>
			</div>
		</div>
	)
}