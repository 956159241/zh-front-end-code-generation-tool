import { ref } from "vue";
import { v4 as uuidv4 } from 'uuid';
import { TColumnWidget, TPage, TRowWidget } from "./type";
import { useStore } from "./store";
export default class Page {
    constructor() { }
    store = useStore();

    data = ref({
        settings: { name: `page - ${uuidv4()}`, },
        widgets: [],
        selectedWidgets: [],
    } as TPage);

    setSelectedWidgets = (widget: TRowWidget) => {
        this.data.value.selectedWidgets = [widget];
        this.store.setselectedWidgets([widget]);
    };


    updateWidget = (currentWidget: TRowWidget) => {
        let targetWidget = this.findWidget(currentWidget, this.data.value.widgets);
        if (targetWidget) targetWidget = currentWidget;
    };

    findWidget = (newWidget: TRowWidget, widgets: TRowWidget[]): TRowWidget | null => {
        let targetWidget = null;
        for (const widget of widgets) {
            if (newWidget.id === widget.id) {
                targetWidget = widget;
            } else {
                if (widget.widgets && widget.widgets.length > 0) {
                    targetWidget = this.findWidget(newWidget, widget.widgets);
                }
            }
        }
        return targetWidget;
    };


    // 布局相关
    generateColumn = () => {
        const id = uuidv4();
        const column: TColumnWidget = {
            id,
            name: 'column-' + id,
            type: 'column',
            isContainer: true,
            icon: 'noneTest',
            widgets: [],
            span: 12,
            settings: {
            },
        };

        return column;
    };
}