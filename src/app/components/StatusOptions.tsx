import { Table } from "@tanstack/react-table";
import { TableFacetedFilter } from "./TableFacetedFilter";
import { statuses } from "../datas/data";

interface StatusOptionsProps<TData> {
  table: Table<TData>;
}

function StatusOptions<TData>({ table }: StatusOptionsProps<TData>) {
  return (
    <>
      {table.getColumn("status") && (
        <TableFacetedFilter
          column={table.getColumn("status")}
          title="Status"
          options={statuses}
        />
      )}
    </>
  );
}

export default StatusOptions;
