import './assets/iconfont/iconfont.css';
import './styles/element-override.css';
import './styles/iconfont-override.css';
import 'element-plus/dist/index.css';
import './styles/global.css';

import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router, setupRouter } from '@/router';
import { setupRouterGuard } from '@/router/guard';
import ElementPlus from 'element-plus';
import * as Icons from '@element-plus/icons-vue';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import Draggable from 'vuedraggable';
import 'virtual:svg-icons-register'
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
import { setupI18n } from './locales/setupI18n';

import vue3PageDesigin from '@/views/vue3-page-designer/widget-panel/widget-lib/widgets/index';

async function boostrap() {
    const app = createApp(App);

    // 配置 store
    app.use(createPinia());
    // 注册Icons 全局组件，element plus icon
    Object.keys(Icons).forEach((key) => {
        app.component(key, Icons[key]);
    });
    // 多语言配置   
    // 配置路由
    setupRouter(app);
    // router-guard
    // 路由守卫
    setupRouterGuard(router);
    //   if (process.env.NODE_ENV === 'dev') {
    //     setupMock();
    //   }  
    // 加载Element Plus
    app.use(ElementPlus, { locale });

    // 多语言配置
    await setupI18n(app);

    // 加载draggable
    app.component('draggable', Draggable);
    app.component('Splitpanes', Splitpanes);
    app.component('Pane', Pane);

    // 批量注册vue3-page-designer组件
    vue3PageDesigin.install(app);


    app.mount('#app');
}

boostrap();
