import * as styles from "./page.css";
import { allPosts } from "contentlayer/generated";
import { PostCard } from "@/components/PostCard";

export default function Home() {
	// const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
	return (
		<main className={styles.container}>
			{allPosts.map((post) => (
				<PostCard key={post._id} {...post} />
			))}
		</main>
	);
}
