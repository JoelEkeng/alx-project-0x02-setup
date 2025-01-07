import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-gray-600">{content}</p>
      <p className="text-gray-600">{userId}</p>
    </div>
  );
};

export default PostCard;