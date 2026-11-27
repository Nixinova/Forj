import { useState } from "react";
import bugs from "../../data/bugs.json" with { type: "json" };
import type { Bug } from "../../types/Bug";
// @ts-ignore css bundle import
import s from "./BugsList.module.css";

export function BugsList() {
	const [selectedBug, setSelectedBug] = useState<Bug | null>(null);

	return (
		<div className={s.bugsList}>
			<div>
				{bugs.map((bug: Bug) => (
					<div key={bug.id} className={[s.bugItem, selectedBug?.id === bug.id ? s.selectedBugItem : ""].join(" ")} onClick={() => setSelectedBug(bug)}>
						<h2 className={s.bugTitle}>{bug.title}</h2>
					</div>
				))}
			</div>
			<div className={s.bugDetails}>
				{selectedBug && (
					<>
						<span className={s.bugId}>{selectedBug.id}</span>
						<h2 className={s.bugTitle}>{selectedBug.title}</h2>
						<span className={s.bugDateTime}>{new Date(selectedBug.dateTime).toUTCString()}</span>
						<p className={s.bugDescription}>{selectedBug.description}</p>
						<span className={s.bugReactions}>
							{selectedBug.reactions?.map((reaction) => (
								<span key={reaction.emoji} title={reaction.user.displayName}>
									{reaction.emoji}
								</span>
							))}
						</span>
						<div className={s.bugReplies}>
							{selectedBug.replies?.map((reply) => (
								<div key={reply.id} className={s.bugReply}>
									<span className={s.bugReplyUser}>{reply.user.displayName}</span>
									<span className={s.bugReplyRoleLabel} style={{ backgroundColor: reply.user.topRole?.colour }}>
										{reply.user.topRole?.name}
									</span>
									<span className={s.bugReplyDateTime}>{new Date(reply.dateTime).toUTCString()}</span>
									<p className={s.bugReplyText}>{reply.text}</p>
								</div>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
}
