//next 13  버전에서 document.cookie가 안되는 상황에서 이렇게 가능. 클라이언트 컴포넌트에서 사용불가.
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
