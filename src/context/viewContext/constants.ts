import { TypeView } from './viewReducer';

export const VALID_TYPES_VIEW = ['pomoView', 'iaView', 'mkView'] as const
export const DEFAULT_VIEW: TypeView = 'pomoView'
export const VIEW_LOCALSTORAGE = 'viewLocalstorage'