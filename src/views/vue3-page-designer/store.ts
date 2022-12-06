import { defineStore } from 'pinia';
// import { createLocalStorage } from '/@/utils/cache';
import { store } from '@/stores';
import { TRowWidget } from './type';

export const useStore = defineStore({
    id: 'vue3-page-designer',
    state: () => ({
        // localInfo: lsLocaleSetting,
        selectedWidgets: [] as Array<TRowWidget>,
    }),

    getters: {
        // getShowPicker(): boolean {
        //     return !!this.localInfo?.showPicker;
        // },
        // getLocale(): LocaleType {
        //     return this.localInfo?.locale ?? 'zh_CN';
        // },
    },

    actions: {

        setselectedWidgets(widgets: Array<TRowWidget>) {
            this.selectedWidgets = widgets;
        }
        // /**
        //  * Set up multilingual information and cache
        //  * @param info multilingual info
        //  */
        // setLocaleInfo(info: Partial<LocaleSetting>) {
        //     this.localInfo = { ...this.localInfo, ...info };
        //     // ls.set(LOCALE_KEY, this.localInfo);
        // },
        // /**
        //  * Initialize multilingual information and load the existing configuration from the local cache
        //  */
        // initLocale() {
        //     this.setLocaleInfo({
        //         ...localeSetting,
        //         ...this.localInfo,
        //     });
        // },
    },
});
