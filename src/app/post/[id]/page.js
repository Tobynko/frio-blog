import { fetchPostID } from "../../actions/fetch-posts";
import BlogPost from "../../../../components/BlogPost";

export default async function PostPage({ params: paramsPromise }) {
  const params = await paramsPromise;
  let post = await fetchPostID(params.id);

  return <BlogPost post={post} />;
}
