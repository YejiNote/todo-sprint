import Image from "next/image";
import Header from "@/app/components/Header";
import Container from "@/app/components/Container";
import TodoInput from "@/app/components/TodoInput";
import TodoSection from "./components/TodoSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />
      <Container>
        <TodoInput />
        <TodoSection />
      </Container>
    </div>
  );
}
 