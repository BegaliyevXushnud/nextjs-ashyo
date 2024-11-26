'use client'

import { useState, useEffect } from 'react'

export function Posts() {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');  
      const data = await res.json(); 
      setPosts(data);
    }
    fetchPosts();
  }, []);

  if (!posts) return <div>Loading...</div>;

  return (
    <ul>
  
    </ul>
  );
}


