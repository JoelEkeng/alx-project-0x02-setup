import Header from '@/components/layout/Header';
import { PostProps } from '@/interfaces';
import PostCard from '@/components/common/PostCard';

interface PostUsageProps{
    posts: PostProps[];
}

const Posts: React.FC<PostUsageProps> = ({posts}) => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 gap-2 p-4">
      {posts.map((post, index) => (
        <PostCard key={index} title={post.title} content={post.content} userId={post.userId} />
      ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const respones = await fetch('https://jsonplaceholder.typicode.com/posts');
  const post = await respones.json();
  return {
    props: { post },
  };
}

export default Posts;
