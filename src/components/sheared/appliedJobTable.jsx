import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";

const tabledata = [
  {
    date: "2022-01-01",
    role: "Frontend Developer",
    company: "Google",
    status: "Selected",
  },
  {
    date: "2022-01-01",
    role: "Frontend Developer",
    company: "Google",
    status: "Selected",
  },
];

const AppliedJobTable = () => {
  return (
    
      <Table>
        <TableCaption> A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tabledata.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>{item.company}</TableCell>
              <TableCell className="text-right"><Badge>{item.status}</Badge></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
  );
};

export default AppliedJobTable;
