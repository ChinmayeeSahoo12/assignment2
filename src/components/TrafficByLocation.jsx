import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const locationData = [
  { name: 'United States', value: 38.6 },
  { name: 'Canada', value: 22.5 },
  { name: 'Mexico', value: 30.8 },
  { name: 'Other', value: 8.1 },
];

const COLORS = ['#B1E3FF', '#95A4FC', '#1C1C1C', '#BAEDBD'];

const TrafficByLocation = () => (
  <Card sx={{ mb: 2, backgroundColor: '#F7F9FB', p: 1 }}>
    <CardContent>
      <Typography
        variant="h6"
        fontWeight={600}
        gutterBottom
        sx={{ fontSize: 14 }}
      >
        Traffic by Location
      </Typography>

      {/* Wrap the chart and legend in a flex box */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ResponsiveContainer width="60%" height={250}>
          <PieChart>
            <Pie
              data={locationData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              label
            >
              {locationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        {/* Custom legend list */}
        <Box sx={{ ml: 2 }}>
          {locationData.map((entry, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1,
                fontSize: 14,
              }}
            >
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: COLORS[index],
                  mr: 1,
                }}
              />
              <span>{entry.name}</span>
            </Box>
          ))}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default TrafficByLocation;
