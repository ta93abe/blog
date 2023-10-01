import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import parse from "html-react-parser";
import Link from "next/link";
import * as styles from "./page.css";

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
	const post = allPosts.find((post) => post._id === params.slug);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
	return { title: post.title, description: post.description };
};

export const generateStaticParams = async () =>
	allPosts.map((post) => ({ slug: post._id }));

export default function PostView({ params }: { params: { slug: string } }) {
	const post = allPosts.find((post) => post._id === params.slug);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

	return (
		<div className={styles.container}>
			<h1>{post.title}</h1>
			{post.date && (
				<div className={styles.date}>
					{format(parseISO(post.date), "MMMM dd, yyyy")}
				</div>
			)}
			<div>{parse(post.body.html)}</div>
			<Link href="/"> {"< "} Back to home</Link>
		</div>
	);
}
