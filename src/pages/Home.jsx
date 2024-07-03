import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <section className="py-8 min-h-80 bg-gray-200 h-">
        <Container>
          <div className="flex flex-wrap items-center justify-center">
            <div className="p-4">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Welcome to Blog App
              </h1>
              <p className="text-lg text-gray-700 mt-2">
                Please log in to view posts.
              </p>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-8 bg-gray-100">
      <Container>
        <div className="flex flex-wrap -mx-4">
          {posts.map((post) => (
            <div key={post.$id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Home;
