type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => (
  <div className={`w-full px-4 tablet:px-6  ${className}`}>
    <div className="max-w-[1200px] mx-auto ">{children}</div>
  </div>
);

export default Container;
