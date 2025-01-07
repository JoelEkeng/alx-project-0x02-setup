import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About:React.FC = () => {
  return (
  <div>
    <Header />
    <h1>About</h1>
    <div className="flex flex-col gap-4">
      <Button size="small" shape="rounded-sm" label="Click me" />
      <Button size="medium" shape="rounded-md" label="Click me" />
      <Button size="large" shape="rounded-lg" label="Click me" />
    </div>
</div>);
};

export default About;
  