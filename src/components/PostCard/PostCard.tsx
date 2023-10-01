import { Post } from "contentlayer/generated";
import Link from "next/link";
import * as styles from "./PostCard.css";
import { cdate } from "cdate";

export function PostCard(post: Post) {
	return (
		<Link href={`/${post._id}`} className={styles.container}>
			<div className={styles.date}>{cdate(post.date).format("YYYY.MM.DD")}</div>
			<div className={styles.title}>{post.title}</div>
			{post.categories.map((category) => (
				<div key={category} className={styles.category}>
					{category}
				</div>
			))}
		</Link>
	);
}
