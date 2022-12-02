import { ref } from "vue";
import { v4 as uuidv4 } from 'uuid';
import { TPage } from "./type";
import { useStore } from "./store";
export default class Page {
    constructor() { }

    data = ref({
        settings: { name: `name${uuidv4()}`, },
        widgets: [],
        selectedWidgets: [],
    } as TPage);

    setSelectedWidgets = (widget: any) => {
        const store = useStore();
        this.data.value.selectedWidgets = [widget];
        store.setselectedWidgets([widget]);
    };
}