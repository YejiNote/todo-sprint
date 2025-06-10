import Image from "next/image";

const DoneImageButton = () => {
  return (
    <div className="mt-12 mb-4">
      <Image src={"/images/button_done.png"} width={101} height={36} alt="DONE" />
    </div>
  );
};

export default DoneImageButton;
