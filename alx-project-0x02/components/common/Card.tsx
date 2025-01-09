import { Post } from '@/interfaces';

interface CardProps {
  post: Post;
}

const Card: React.FC<CardProps> = ({ post }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600">{post.content}</p>
      <p className="text-sm text-gray-400 mt-2">
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default Card;
