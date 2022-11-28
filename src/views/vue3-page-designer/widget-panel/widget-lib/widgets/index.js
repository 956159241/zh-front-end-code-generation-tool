const modules = import.meta.globEager('./**/*.vue');

let controls = {};
for (const path in modules) {
	let cname = modules[path].default.name;
	controls[cname + '-control'] = modules[path].default;
}

export { controls };
