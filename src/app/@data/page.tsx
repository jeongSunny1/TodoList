// "use client";
// import React, { useEffect, useState } from "react";
// import { DataProps } from "../types/type";
// import DeletePutButton from "../utils/DeletePutButton";
// import { Loading } from "./Loading";

// const Data: React.FC<DataProps> = ({ todoList, deleteTodo, updateTodo }) => {
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(true);
//     }, 3000);
//     setIsLoading(false);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex flex-wrap gap-5 w-[1095px] max-w-[1200px] h-[250px]">
//       <div className="w-[350px] h-[100%] border-slate-200 rounded-md p-4 text-center border-2 bg-indigo-100 flex flex-col justify-center items-center">
//         <Loading />
//       </div>
//       {todoList.map((item: any) => (
//         <div
//           key={item.id}
//           className="w-[350px] h-[100%] border-slate-200 rounded-md p-4
//             text-center border-2 bg-indigo-100 flex flex-col justify-center items-center"
//         >
//           <p className="text-xl	font-medium	">제목: {item.title}</p>
//           <p>내용: {item.content}</p>

//           <div className="mt-3">
//             <DeletePutButton
//               item={item}
//               updateTodo={updateTodo}
//               deleteTodo={deleteTodo}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Data;

"use client";
import React, { useEffect, useState } from "react";
import { DataProps } from "../types/type";
import DeletePutButton from "../utils/DeletePutButton";
import { Loading } from "./Loading";

const Data: React.FC<DataProps> = ({ todoList, deleteTodo, updateTodo }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-wrap gap-5 w-[1095px] max-w-[1200px] h-[250px]">
      {isLoading
        ? Array.from({ length: todoList.length }).map((_, index) => (
            <div
              key={index}
              className="w-[350px] h-[100%] border-slate-200 rounded-md p-4 text-center border-2 bg-indigo-100 flex flex-col justify-center items-center"
            >
              <Loading key={index} />
            </div>
          ))
        : todoList.map((item: any) => (
            <div
              key={item.id}
              className="w-[350px] h-[100%] border-slate-200 rounded-md p-4
              text-center border-2 bg-indigo-100 flex flex-col justify-center items-center"
            >
              <p className="text-xl	font-medium	">제목: {item.title}</p>
              <p>내용: {item.content}</p>

              <div className="mt-3">
                <DeletePutButton
                  item={item}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
                />
              </div>
            </div>
          ))}
    </div>
  );
};

export default Data;
