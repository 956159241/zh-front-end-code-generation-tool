export interface TPage {
    settings: TPageSettngs,
    widgets: Array<TRowWidget>
    selectedWidgets: Array<TRowWidget>
}

export interface TPageSettngs {
    name: string
}

export interface TWidget {
    type: string
    isContainer: boolean
    icon?: string
    id: string
    settings: TRowWidgetSettings
    widgets?: Array<TRowWidget>
}

export interface TRowWidget extends TWidget {
    columns: Array<TColumnWidget>
}

export interface TColumnWidget extends TWidget {
    span?: number
    height?: number | string
}

export interface TWidgetCommonSettings {
    name?: string
    hidden?: boolean
    customClass?: string
    height?: string | number
    width?: string | number
}

export interface TRowWidgetSettings extends TWidgetCommonSettings {
    gutter?: number

}