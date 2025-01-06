import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Welcome to the AirBnB Clone Project</h1>
      </div>
    </div>
  );
}

