import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const deviceData = [
  { device: 'Linux', users: 18, backgroundColor:'#95A4FC' },
  { device: 'Mac', users: 25, backgroundColor:'#BAEDBD' },
  { device: 'iOS', users: 20, backgroundColor:'#1C1C1C' },
  { device: 'Windows', users: 27, backgroundColor:'#B1E3FF' },
  { device: 'Android', users: 12,backgroundColor:'#A8C5DA' },
  { device: 'Other', users: 23, backgroundColor:'#A1E3CB'},
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
          <Bar dataKey="users" barSize={20} radius={[5, 5, 0, 0]}>
            {deviceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.backgroundColor} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default TrafficByDevice;
