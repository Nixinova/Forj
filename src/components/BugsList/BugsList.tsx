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
					<div key={bug.id} className={s.bugItem} onClick={() => setSelectedBug(bug)}>
						<h2 className={s.bugTitle}>{bug.title}</h2>
					</div>
				))}
			</div>
			<div className={s.bugDetails}>
				{selectedBug && (
					<>
						<span className={s.budId}>{selectedBug.id}</span>
						<h2 className={s.bugTitle}>{selectedBug.title}</h2>
						<p className={s.bugDescription}>{selectedBug.description}</p>
					</>
				)}
			</div>
		</div>
	);
}
