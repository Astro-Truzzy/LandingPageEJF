import { BsFillArrowDownSquareFill } from "react-icons/bs";

export default function BouncyArrow() {
  return (
    <div className="flex justify-center mt-10">
      <div className="bouncy-arrow text-3xl text-blue-600 dark:text-blue-400 animate-bounce-slow">
        <BsFillArrowDownSquareFill />
      </div>
    </div>
  );
}
