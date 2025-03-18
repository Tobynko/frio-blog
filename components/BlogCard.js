// Nutne pre fungovanie framer-motion
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogCard({ post }) {
  return (
    <Link href={`/post/${post.id}`} key={post.id}>
      <motion.div
        className="blogCard"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}>
        <h2 className="blogCard-title">
          <span className="line-clamp-1">{post.title}</span>
          <span className="text-sm text-gray-500">Blog #{post.id}</span>
        </h2>
        <p className="blogCard-body">{post.body}</p>
        <span className="blogCard-more">Read more</span>
      </motion.div>
    </Link>
  );
}
