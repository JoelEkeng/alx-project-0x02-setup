import Link from "next/link";

const Header: React.FC = () => {

  return (
    <div className="flex justify-center gap-4 items-center p-4 bg-gray-200">
      <Link href="/home" className="text-blue-500 hover:text-blue-700 rounded-md p-2">Home</Link>
      <Link href="/about" className="text-blue-500 hover:text-blue-700 rounded-md p-2">About</Link>
      <Link href="/post" className="text-blue-500 hover:text-blue-700 rounded-md p-2">Post</Link>
      <Link href="/users" className="text-blue-500 hover:text-blue-700 rounded-md p-2">Users</Link>
    </div>
  );
};

export default Header;
