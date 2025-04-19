// components/TrafficByLocationChart.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const locationData = [
  { name: 'United States', value: 38.6 },
  { name: 'Canada', value: 22.5 },
  { name: 'Mexico', value: 30.8 },
  { name: 'Other', value: 8.1 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#8884d8'];

const TrafficByLocation = () => (
  <Card sx={{ mb: 2,  backgroundColor:'#F7F9FB', p: 1}}>
    <CardContent>
      <Typography variant="h6" fontWeight={600} gutterBottom sx={{fontSize: 14}}>Traffic by Location</Typography>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={locationData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {locationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default TrafficByLocation;
