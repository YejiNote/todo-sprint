import Image from "next/image";

const TodoImageButton = () => {
  return (
    <div className="mt-6 mb-4">
      <Image src={"/images/button_todo.png"} width={101} height={36} alt="TODO" />
    </div>
  );
};

export default TodoImageButton;
