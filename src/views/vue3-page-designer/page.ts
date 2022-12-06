import { ref } from "vue";
import { v4 as uuidv4 } from 'uuid';
import { TPage, TRowWidget } from "./type";
import { useStore } from "./store";
export default class Page {
    constructor() { }
    store = useStore();

    data = ref({
        settings: { name: `name${uuidv4()}`, },
        widgets: [],
        selectedWidgets: [],
    } as TPage);

    setSelectedWidgets = (widget: TRowWidget) => {
        this.data.value.selectedWidgets = [widget];
        this.store.setselectedWidgets([widget]);
    };

    updateWidget = (currentWidget: TRowWidget) => {
        let targetWidget = this.findWidget(currentWidget);
        if (targetWidget) targetWidget = currentWidget;
    };

    findWidget = (newWidget: TRowWidget): TRowWidget | null => {
        let targetWidget = null;
        for (const widget of this.data.value.widgets) {
            if (newWidget.id === widget.id) {
                targetWidget = widget;
            } else {
                targetWidget = this.findWidget(widget);
            }
        }
        return targetWidget;
    };
}