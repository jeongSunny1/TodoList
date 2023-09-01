import Form from "./@form/page";

export default function Home() {
  return (
    <div className="w-[100%] max-w-[1200px]	 h-[100vh] flex flex-col	items-center justify-center	 mx-auto	">
      <h2 className="text-red-300 text-5xl	font-semibold">TodoList</h2>

      <Form />
    </div>
  );
}
