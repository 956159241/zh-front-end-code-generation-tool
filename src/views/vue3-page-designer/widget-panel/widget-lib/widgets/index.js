const modules = import.meta.globEager('./*.vue');

export default {
	install(app) {
		for (const path in modules) {
			let cname = modules[path].default.name;
			app.component(cname + '-control', modules[path].default);
		}
	},
};

let controls = {};
for (const path in modules) {
	let cname = modules[path].default.name;
	controls[cname + '-control'] = modules[path].default;
}

export { controls };
