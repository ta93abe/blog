import { Post } from "contentlayer/generated";
import Link from "next/link";
import * as styles from "./PostCard.css";

export function PostCard(post: Post) {
	return (
		<Link href={`/${post._id}`} className={styles.container}>
			{post.title}
		</Link>
	);
}
