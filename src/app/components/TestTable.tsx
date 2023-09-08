import {
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

function TestTable() {
  return (
    <>
      <TableHeader>
        <TableHead>목차</TableHead>
        <TableCell>1</TableCell>
        <TableCell>2</TableCell>
        <TableCell>3</TableCell>
      </TableHeader>
      <TableHeader>
        <TableHead>일식</TableHead>
        <TableCell>초밥</TableCell>
        <TableCell>덮밥</TableCell>
        <TableCell>연어</TableCell>
      </TableHeader>
      <TableHeader>
        <TableHead>중식</TableHead>
        <TableCell>양꼬치</TableCell>
        <TableCell>짬뽕</TableCell>
        <TableCell>짜장면</TableCell>
      </TableHeader>
    </>
  );
}

export default TestTable;
