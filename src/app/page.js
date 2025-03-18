import "./globals.css";
import { fetchPosts } from "./actions/fetch-posts";
import BlogCardList from "../../components/BlogCardList";

export default async function Home() {
  const initialPosts = await fetchPosts({ limit: 5, skip: 0 });

  return <BlogCardList initialPosts={initialPosts} />;
}
