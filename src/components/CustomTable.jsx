import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Avatar, Typography, Chip } from "@mui/material";

const rows = [
  {
    id: 1,
    orderId: "#CM9801",
    user: { name: "Natali Craig", img: "https://i.pravatar.cc/150?img=1" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: 2,
    orderId: "#CM9802",
    user: { name: "Kate Morrison", img: "https://i.pravatar.cc/150?img=2" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: 3,
    orderId: "#CM9803",
    user: { name: "Drew Cano", img: "https://i.pravatar.cc/150?img=3" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: 4,
    orderId: "#CM9804",
    user: { name: "Orlando Diggs", img: "https://i.pravatar.cc/150?img=4" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: 5,
    orderId: "#CM9805",
    user: { name: "Andi Lane", img: "https://i.pravatar.cc/150?img=5" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];

const statusColor = {
  "In Progress": "info",
  Complete: "success",
  Pending: "primary",
  Approved: "warning",
  Rejected: "error",
};

const columns = [
  { field: "orderId", headerName: "Order ID", flex: 1 },
  {
    field: "user",
    headerName: "User",
    flex: 1,
    renderCell: (params) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar src={params.value.img} />
        <Typography variant="body2">{params.value.name}</Typography>
      </Box>
    ),
  },
  { field: "project", headerName: "Project", flex: 1 },
  { field: "address", headerName: "Address", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={statusColor[params.value]}
        variant="outlined"
        size="small"
      />
    ),
  },
];

export default function CustomTable() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "white" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          border: "none", // Remove outer border
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f9f9f9",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid #f0f0f0",
          },
        }}
      />
    </Box>
  );
}
