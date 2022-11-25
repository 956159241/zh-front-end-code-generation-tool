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
}

export interface TWidgetSettings {

}