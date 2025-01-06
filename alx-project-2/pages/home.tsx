import Card from "@/components/common/Card";

const Home:React.FC = () => {
  return (
  <div className="flex flex-col items-center justify-center h-screen">
    <Card title="Card 1" content="This is a card" image="https://via.placeholder.com/150" />
    <Card title="Card 2" content="This is a card" image="https://via.placeholder.com/150" />
    <Card title="Card 3" content="This is a card" image="https://via.placeholder.com/150" />
    </div>);
};

export default Home;
 