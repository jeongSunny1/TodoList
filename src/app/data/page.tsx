import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import React from "react";

function Data() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>header</TableHead>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>header2</TableHead>
            <TableCell>4</TableCell>
            <TableCell>5</TableCell>
            <TableCell>6</TableCell>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
}

export default Data;
