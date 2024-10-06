import { describe, expect, it } from "vitest";
import classNames from ".";

const assertEqual = (actual: string, expected: string) => {
	expect(actual).toBe(expected);
};

describe("classNames", () => {
	it("keeps object keys with truthy values", () => {
		assertEqual(
			classNames({
				a: true,
				b: false,
				c: 0,
				d: null,
				e: undefined,
				f: 1,
			}),
			"a f",
		);
	});

	it("joins arrays of class names and ignore falsy values", () => {
		assertEqual(classNames("a", 0, null, undefined, false, "b"), "a b");
	});

	it("supports heterogenous arguments", () => {
		assertEqual(classNames({ a: true }, "b", 0), "a b");
	});

	it("should be trimmed", () => {
		assertEqual(classNames("", "b", {}, ""), "b");
	});

	it("returns an empty string for an empty configuration", () => {
		assertEqual(classNames({}), "");
	});

	it("supports an array of class names", () => {
		assertEqual(classNames(["a", "b"]), "a b");
	});

	it("joins array arguments with string arguments", () => {
		assertEqual(classNames(["a", "b"], "c"), "a b c");
		assertEqual(classNames("c", ["a", "b"]), "c a b");
	});

	it("handles multiple array arguments", () => {
		assertEqual(classNames(["a", "b"], ["c", "d"]), "a b c d");
	});

	it("handles arrays that include falsy and true values", () => {
		assertEqual(classNames(["a", 0, null, undefined, false, true, "b"]), "a b");
	});

	it("handles arrays that include arrays", () => {
		assertEqual(classNames(["a", ["b", "c"]]), "a b c");
	});

	it("handles arrays that include objects", () => {
		assertEqual(classNames(["a", { b: true, c: false }]), "a b");
	});

	it("handles deep array recursion", () => {
		assertEqual(classNames(["a", ["b", ["c", { d: true }]]]), "a b c d");
	});

	it("handles arrays that are empty", () => {
		assertEqual(classNames("a", []), "a");
	});

	it("handles nested arrays that have empty nested arrays", () => {
		assertEqual(classNames("a", [[]]), "a");
	});
});
