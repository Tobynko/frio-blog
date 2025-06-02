"use client";

import BlogCard from "./blogCard";
import { Spinner } from "./spinner";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { fetchPosts } from "../src/app/actions/fetchPosts";
import { postType } from "../src/app/actions/fetchPosts";

export default function BlogCardList({
  initialPosts,
}: {
  initialPosts: postType[];
}) {
  const [posts, setPosts] = useState(initialPosts || []);
  const [page, setPage] = useState(1); // 0 je prvych 5
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const limit = 5;

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const loadMorePosts = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    const skip = page * limit; // Offset
    const newPosts = (await fetchPosts({ limit, skip })) ?? [];

    if (newPosts.length > 0) {
      setPosts((prevPosts) => {
        const uniqueNewPosts = newPosts.filter(
          (newPost) => !prevPosts.some((post) => post.id === newPost.id)
        );
        return [...prevPosts, ...uniqueNewPosts];
      });
      setPage((prevPage) => prevPage + 1);
    } else {
      setHasMore(false); // Koniec postov
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (inView && !isLoading && hasMore) {
      loadMorePosts();
    }
  }, [inView, isLoading, hasMore]);

  const latestPost = posts.reduce(
    (max, post) => (post.id > max.id ? post : max),
    posts[0]
  );

  const otherPosts = posts.filter((post) => post.id !== latestPost?.id);

  return (
    <div className="space-y-8">
      {/* Featured Post */}
      {latestPost && (
        <div className="max-w-3xl mx-auto">
          <div className="latestPost">
            <img
              src="https://dummyjson.com/image/400x200/cccccc/ffffff?text=Latest+Post"
              alt="Latest Post"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h1 className="blogPost-title">
                <span>{latestPost.title}</span>
              </h1>
              <p className="blogPost-body">{latestPost.body}</p>
              <div className="blogPost-meta">
                <p>User ID: {latestPost.userId}</p>
                <p>Tags: {latestPost.tags.join(", ")}</p>
                <p>
                  Reactions: {latestPost.reactions.likes} likes,{" "}
                  {latestPost.reactions.dislikes} dislikes
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Other Posts */}
      <div className="otherPosts">
        {otherPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      {hasMore && (
        <div ref={ref} className="hasMoreText">
          {isLoading ? <Spinner /> : "Scroll to load more"}
        </div>
      )}
    </div>
  );
}
