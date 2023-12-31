"use client";

import React, { useState } from "react";
import { DataTable, useTableState } from "../components/DataTable";
import { useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { columns } from "../datas/columns";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import Button from "../../components/ui/button";
import Input from "../../components/ui/Input";

// JSON SERVER DATA 불러오기
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

const FormSchema = z.object({
  title: z.string(),
});

function TablePage() {
  const { pageIndex, pageSize, setPagination } = useTableState();
  const [title, setTitle] = useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    setTitle(data.title);
  };

  const tableData = useQuery({
    queryKey: ["table", pageIndex, pageSize, title],
    queryFn: () => tableFetch({ pageIndex, pageSize, title }),
    keepPreviousData: true,
  });
  return (
    <div className=" flex flex-col items-center justify-center mx-auto m-3">
      <h2 className="text-red-300 text-5xl font-semibold m-8">Table</h2>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center space-x-2"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="title" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button>검색</Button>
            {/* <Button type="submit">검색</Button> */}
          </form>
        </Form>

        <DataTable
          columns={columns}
          data={tableData?.data?.json ?? []}
          totalCount={tableData?.data?.totalCount ?? -1}
          setPagination={setPagination}
          pageIndex={pageIndex}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}

export default TablePage;
