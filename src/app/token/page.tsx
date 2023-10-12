import { cookies } from "next/headers";

export default function Test() {
  const cookieStore = cookies();
  console.log("cookieStore>", cookieStore.getAll());

  return cookieStore.getAll().map((cookie) => (
    <div key={cookie.name}>
      {/* <p>Name: {cookie.name}</p> */}
      <p className="border-2 border-red-800 m-10">Value: {cookie.value}</p>
    </div>
  ));
}
