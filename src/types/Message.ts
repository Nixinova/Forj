import type { Reaction } from "./Reaction";
import type { User } from "./User";

type MessageId = string;

export type Message = {
	id: MessageId;
	user: User;
	text: string;
	dateTime: string;
	reactions?: Reaction[];
	replyTo?: MessageId;
};
