import Image from "next/image";
import Header from "@/app/components/Header";
import Container from "@/app/components/Container";
import TodoInput from "@/app/components/TodoInput";
import TodoImageButton from "./components/buttons/imageButtons/Todo";
import DoneImageButton from "./components/buttons/imageButtons/Done";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";
import TodoItem from "./components/TodoItem";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />

      <Container>
        <TodoInput />
        <TodoImageButton />
        {/* <TodoList /> */}
        <TodoItem/>
        <DoneImageButton />
        <DoneList />
      </Container>
    </div>
  );
}
