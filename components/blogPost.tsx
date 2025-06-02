// Nutne pre fungovanie framer-motion
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { postType } from "../src/app/actions/fetchPosts.d";

export default function BlogPost({ post }: { post: postType }) {
  return (
    <motion.div
      className="blogPostMain"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <h1 className="blogPost-title">{post.title}</h1>
      <p className="blogPost-body">{post.body}</p>
      <div className="blogPost-meta">
        <p>User ID: {post.userId}</p>
        <p>Tags: {post.tags.join(", ")}</p>
        <p>
          Reactions: {post.reactions.likes} likes, {post.reactions.dislikes}{" "}
          dislikes
        </p>
      </div>
      <Link href="/" className="blogPost-back">
        Back to Home
      </Link>
    </motion.div>
  );
}
