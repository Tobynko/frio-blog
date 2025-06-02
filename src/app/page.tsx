import "./globals.css";
import { fetchPosts } from "./actions/fetchPosts";
import BlogCardList from "../../components/blogCardList";

export default async function Home() {
  const initialPosts = await fetchPosts({ limit: 5, skip: 0 });

  /*   if (!initialPosts) {
    return <div>Error: Failed to load posts</div>; // Handle null case
  } */

  return <BlogCardList initialPosts={initialPosts} />;
}
