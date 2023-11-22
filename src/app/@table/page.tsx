"use client";
import React, { useEffect, useState } from "react";
import { DataTable, useTableState } from "./components/table/table";
import { useToast } from "@/components/ui/use-toast";

const TABLEAPI = "http://localhost:4000/table";
export const tableFetch = async (options: {
  pageIndex: number;
  pageSize: number;
  title?: string;
}) => {
  const response = await fetch(
    `${TABLEAPI}?_page=${options.pageIndex + 1}&_limit=${
      options.pageSize
    }&title_like=${options.title}`,
    {
      method: "GET",
    }
  );
  const totalCount = response.headers.get("X-Total-Count");
  const json = await response.json();

  return { json, totalCount: Number(totalCount) };
};

function TablePage() {
  const tableState = useTableState();
  const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [tableData, setTableData] = useState({ json: [], totalCount: -1 });

  const fetchData = async () => {
    try {
      const data = await tableFetch({
        pageIndex: tableState.pageIndex,
        pageSize: tableState.pageSize,
        title,
      });
      setTableData(data);
      console.log("동기화 된 정보 post 보내는 값:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [tableState.pageIndex, tableState.pageSize, title]);

  const rowsMap = tableState.selectedRows.map((item: any) => item.original);

  return (
    <>
      <p>테이블</p>
      <DataTable
        columns={columns}
        data={tableData.json}
        totalCount={tableData.totalCount}
        {...tableState}
      />
    </>
  );
}

export default TablePage;
