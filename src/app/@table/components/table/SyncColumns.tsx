"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { labels, priorities, statuses } from "../data";
import { Badge } from "@/components/ui/badge";
import {
  DataTableColumnHeader,
  TableFilterHeader,
  TableCalendarHeader,
  DataTableColumnHeaderStatus,
} from "./SyncColumnsHeader";
import { SunnyType } from "../schema";

export const columns: ColumnDef<SunnyType>[] = [
  {
    id: "select",
    header: ({ table }) => {
      const isDisabledList = table.options.data.filter(
        (el) => el.status === "완료" || el.status === "진행"
      );

      const data = table.options.data;

      const onCheckedChange = (value: boolean) => {
        const rows = table.getRowModel().rows;

        rows.map((row) => {
          if (!isDisabledList.find((el) => el.id === row.original.id)) {
            row.toggleSelected(value);
          } else {
            row.toggleSelected(false);
          }
        });
      };

      return (
        <Checkbox
          checked={
            table.getFilteredSelectedRowModel().rows.length +
              isDisabledList.length ===
            data.length
          }
          onCheckedChange={(value) => onCheckedChange(!!value)}
          aria-label="Select all"
          className={`translate-y-[2px]`}
        />
      );
    },
    cell: ({ row }) => {
      const isDisabled =
        row.original.status === "진행" || row.original.status === "완료";

      return (
        <Checkbox
          checked={isDisabled ? false : row.getIsSelected()}
          onCheckedChange={(value) => {
            if (!isDisabled) {
              row.toggleSelected(!!value);
            }
          }}
          aria-label="Select row"
          className={`translate-y-[2px] ${
            isDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-white"
          }`}
          disabled={isDisabled}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: () => {
      return <div>상태</div>;
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="제목" />
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="카테고리" />
    ),
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      // <TableCalendarHeader column={column} title="Priority" />
      <DataTableColumnHeader column={column} title="등록일" />
    ),
  },
  {
    accessorKey: "note",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="비고" />
    ),
  },
];
