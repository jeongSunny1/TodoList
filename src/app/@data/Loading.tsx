export const Loading = () => {
  return (
    <div className="w-[350px] h-[100%] border-slate-200 rounded-md p-4 text-center border-2 bg-gray-300 animate-pulse flex flex-col justify-center items-center">
      <div className="h-8 bg-gray-400 rounded w-2/3 mb-2"></div>
      <div className="h-6 bg-gray-400 rounded w-1/2"></div>
      <div className="h-8 bg-gray-400 rounded w-1/3 mt-3"></div>
    </div>
  );
};
