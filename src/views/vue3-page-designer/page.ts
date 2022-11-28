import { ref } from "vue";
import { v4 as uuidv4 } from 'uuid';
import { TPage } from "./type";
export default class Page {
    constructor() { }

    data = ref({
        settings: { name: `name${uuidv4()}`, },
        widgets: [],
        selectedWidgets: [],
    } as TPage);
}