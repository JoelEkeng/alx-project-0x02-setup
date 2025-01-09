"use client";

import { useState } from 'react';
import { Post } from '@/interfaces';
import PostModal from '@/components/common/PostModal';
import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleCreatePost = (newPost: Omit<Post, 'id' | 'createdAt'>) => {
    const post: Post = {
      ...newPost,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Posts</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create Post
        </button>
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreatePost}
      />

      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
 