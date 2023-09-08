import { useState, useEffect } from "react";

/**
 * zustand는 브라우저의 데이터를 사용.
 * zustand의 데이터를 사용하여 화면을 그리게 되면
 * next의 서버측 렌더링과 클라이언트 렌더링이 달라 에러가 발생.
 *
 * zustand가 컴포넌트를 변경하기 전에 잠시 기다리도록 하는 useStore hook사용으로 에러 방지.
 * 사용법은 '@/app/todo/useTodoStore.ts' 하단 코드 참고
 */
const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export default useStore;
