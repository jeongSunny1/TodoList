"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from "@/components/ui/table";

import {
  ColumnDef,
  VisibilityState,
  ColumnFiltersState,
  SortingState,
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  PaginationState,
  OnChangeFn,
  getFacetedRowModel,
  getFacetedUniqueValues,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { ListAmount } from "./ListAmount";
import { Pagination } from "./Pagination";
import { TableViewOptions } from "./ViewOptions";
import StatusOptions from "./StatusOptions";
import { useRouter } from "next/navigation";
import { useTableStore } from "../schema/Store";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: Array<TData>;
  totalCount: number;
  setPagination: OnChangeFn<PaginationState>;
  pageIndex: number;
  pageSize: number;
}

export function useTableState() {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  return {
    pageIndex,
    pageSize,
    setPagination,
  };
}

export function DataTable<TData, TValue>({
  columns,
  data,
  totalCount,
  setPagination,
  pageIndex,
  pageSize,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const route = useRouter();
  const defaultData = useMemo(() => [], []);
  const pagination = useMemo(
    () => ({ pageIndex, pageSize }),
    [pageIndex, pageSize]
  );
  const { tableTitle, setTableTitle } = useTableStore();
  console.log("data", data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const TABLEAPI = "http://localhost:4000/table";
        const response = await fetch(TABLEAPI);
        console.log(response);

        const newData = await response.json();
        setTableTitle(newData); // Zustand 상태 업데이트 //전체 데이터
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [setTableTitle]);

  // 테이블 기능 설정
  const table = useReactTable({
    data: data ?? defaultData,
    columns,
    pageCount: totalCount,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    debugTable: true,

    /* 열 선택 기능*/
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,

    /* 정렬 기능 */
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    /* 열 보이게 안보이게 */
    onColumnVisibilityChange: setColumnVisibility,

    /* 검색 창 */
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),

    /* 페이지 네이션 관련 */
    getPaginationRowModel: getPaginationRowModel(),

    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  console.log(tableTitle);

  return (
    <>
      <div className="space-y-4">
        <TableViewOptions table={table} />
        {/* <StatusOptions table={table} /> */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {tableTitle.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    id:
                    {item.id}
                    title:
                    {item.title}
                  </TableCell>

                  <TableCell>
                    <button
                      onClick={() => route.push(`/tabledetail/${item.id}`)}
                    >
                      View Details
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <ListAmount table={table} />
        <Pagination table={table} />
      </div>
    </>
  );
}
