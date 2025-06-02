import { fetchPostID } from "../../actions/fetchPosts";
import { postPageType } from "../../actions/fetchPosts";
import BlogPost from "../../../../components/blogPost";

export default async function PostPage({
  params: paramsPromise,
}: postPageType) {
  const params = await paramsPromise;
  let post = await fetchPostID(parseInt(params.id));

  return <BlogPost post={post} />;
}
