import { Post } from "contentlayer/generated";
import * as styles from "./PostCard.css";
import Link from "next/link";

export function PostCard(post: Post) {
	return (
		<Link href={`/${post._id}`} className={styles.container}>
			{post.title}
		</Link>
	);
}
