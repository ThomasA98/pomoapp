import { MkMode } from '../../MkView'

export type MkSettingsProps = {
	onToggle: () => void
	mode: MkMode
}

export const MkSettings: React.FC<MkSettingsProps> = ({ onToggle, mode }) => {
	return (
		<div className="flex justify-between gap-2">
			<button className="bg-red-400 shadow shadow-slate-800 p-2 rounded text-center capitalize flex-1" >Save</button>
			<button className="bg-red-400 shadow shadow-slate-800 p-2 rounded text-center capitalize flex-1" onClick={ onToggle }>Mode: {mode}</button>
		</div>
	)
}