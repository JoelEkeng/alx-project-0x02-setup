export interface CardProps {
  title: string;
  content: string;
  image: string;
  createdAt: Date;
}

export interface ButtonProps{
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-full';
  label: string;
}

export interface PostData {
  title: string;
  content: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

export interface PostProps {
  title: string;
  content: string;
  userId: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: Omit<Post, 'id' | 'createdAt'>) => void;
}

export interface UserProps {
  name: string;
  email: string;
  address: AddressProps;
}

export interface AddressProps {
  street: string;
  city: string;
  suite: string;
  zipcode: string;
  geo: GeoProps;
}

export interface GeoProps {
  lat: string;
  lng: string;
}

