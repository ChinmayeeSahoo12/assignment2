// components/TrafficByDeviceChart.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const deviceData = [
  { device: 'Linux', users: 18 },
  { device: 'Mac', users: 25 },
  { device: 'iOS', users: 20 },
  { device: 'Windows', users: 27 },
  { device: 'Android', users: 12 },
  { device: 'Other', users: 23 },
];

const TrafficByDevice = () => (
  <Card sx={{ mb: 0, boxShadow: 0, borderRadius: 3, backgroundColor: "#F7F9FB",p: 2 }}>
    <CardContent sx={{ p: 0}}>
      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mb:1, fontSize: 14, }}>Traffic by Device</Typography>
      <ResponsiveContainer width="90%" height={250}>
        <BarChart data={deviceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="device" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default TrafficByDevice;
