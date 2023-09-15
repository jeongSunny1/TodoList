"use client";
import { useTableStore } from "@/app/schema/Store";
import React from "react";

function TableDetail({ params }: { params: { id: string } }) {
  const { tableTitle, setTableTitle } = useTableStore();
  // const selectedItem = tableTitle.find((item) => item.id === params.id);

  return (
    <>
      <div>
        <h1>{params.id}</h1>
        <h5>내용!!!!</h5>
      </div>
    </>
  );
}

export default TableDetail;
