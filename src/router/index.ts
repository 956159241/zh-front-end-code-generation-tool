import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { basicRoutes } from './routes';

const PUBLIC_PATH = import.meta.env.VITE_PUBLIC_PATH;

// 白名单应该包含基本静态路由
const WHITE_NAME_LIST: string[] = [];
// const getRouteNames = (array: any[]) =>
//   array.forEach((item) => {
//     WHITE_NAME_LIST.push(item.name);
//     getRouteNames(item.children || []);
//   });
// getRouteNames(basicRoutes);

// app router
// 创建一个可以被 Vue 应用程序使用的路由实例
console.log(PUBLIC_PATH);
export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: basicRoutes,
  // 是否应该禁止尾部斜杠。默认为假
  // strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    // if (name && !WHITE_NAME_LIST.includes(name as string)) {
    //   router.hasRoute(name) && router.removeRoute(name);
    // }
  });
}

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}
