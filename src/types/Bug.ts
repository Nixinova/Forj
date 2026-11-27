import type { Message } from "./Message";
import type { Reaction } from "./Reaction";

// must be json-compatible
export type Bug = {
	id: string;
	title: string;
	description: string;
	dateTime: string;
	reactions?: Reaction[];
	replies?: Message[];
};
