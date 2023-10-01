import { Post } from "contentlayer/generated";
import Link from "next/link";
import * as styles from "./PostCard.css";
import { format, parseISO } from "date-fns";

export function PostCard(post: Post) {
	return (
		<Link href={`/${post._id}`} className={styles.container}>
		{post.date && (
			<div className={styles.date}>
				{format(parseISO(post.date), "MMMM dd, yyyy")}
			</div>
		)}
			<div className={styles.title}>{post.title}</div>
			{post.categories.map((category) => (
				<div key={category} className={styles.category}>
					{category}
				</div>
			))}
		</Link>
	);
}
