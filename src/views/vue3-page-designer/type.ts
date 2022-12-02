export interface TPage {
    settings: TPageSettngs,
    widgets: Array<TWidget>
    selectedWidgets: Array<TWidget>
}

export interface TPageSettngs {
    name: string
}

export interface TWidget {
    type: string
    isContainer: boolean
    icon?: string
    id: string
    settings: TWidgetSettings
    widgets?: Array<TWidget>
    cols?: Array<any>
}

export interface TWidgetCommonSettings {
    name?: string
    hidden?: boolean
    customClass?: string
    height?: string | number
    width?: string | number
}

export interface TWidgetSettings extends TWidgetCommonSettings {

}