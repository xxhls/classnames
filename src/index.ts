// abandon boolean & number & null & undefined
export type Value = boolean | number | null | undefined | string;
export type Obj = Record<string, Value>;
export type Arr = Argument[];
export type Argument = Obj | Value | Arr;

export default function classNames(...args: Argument[]) {
	const result: string[] = [];
	for (const arg of args) {
		// arg is an object
		if (typeof arg === "object" && arg !== null && !Array.isArray(arg)) {
			const _result: string[] = [];
			for (const key in arg as Obj) {
				if (arg[key]) {
					_result.push(key);
				}
			}
			if (_result.length > 0) result.push(_result.join(" "));
		}
		// arg is a string
		else if (typeof arg === "string") {
			if (arg.trim() !== "") result.push(arg);
		}
		// arg is an array
		else if (Array.isArray(arg)) {
			if (arg.length === 0) continue;
			result.push(classNames(...arg));
		}
	}
	if (result.length === 0) return "";
	return result.join(" ").trim();
}
