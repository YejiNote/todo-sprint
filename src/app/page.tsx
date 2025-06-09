import Image from "next/image";
import Header from "./components/Header";
import Container from "./components/Container";
import TodoInput from "./components/TodoInput";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header>
        <Container>
          <TodoInput/>
        </Container>
      </Header>
    </div>
  );
}
