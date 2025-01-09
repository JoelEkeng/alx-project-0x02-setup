import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <div className="flex gap-2">
        <p className="text-gray-500">{address.street}</p>
        <p className="text-gray-500">{address.city}</p>
        <p className="text-gray-500">{address.suite}</p>
        <p className="text-gray-500">{address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;
