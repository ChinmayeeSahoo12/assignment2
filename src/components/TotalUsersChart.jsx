import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', current: 9, previous: 12 },
  { month: 'Feb', current: 15, previous: 10 },
  { month: 'Mar', current: 20, previous: 16 },
  { month: 'Apr', current: 18, previous: 14 },
  { month: 'May', current: 22, previous: 19 },
  { month: 'Jun', current: 25, previous: 21 },
  { month: 'Jul', current: 27, previous: 24 },
];

const TotalUsersChart = () => {
  return (
    <Card elevation={0} sx={{ borderRadius: 3, backgroundColor: '#F7F9FB', }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2} >
          <Typography variant="subtitle1" fontWeight={600}>
            Total Users
          </Typography>
          <Box display="flex" gap={2} alignItems="center">
            <Typography variant="caption" color="text.secondary">
              Current Week
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Previous Week
            </Typography>
          </Box>
        </Box>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(val) => `${val}M`} />
            <Tooltip formatter={(value) => `${value}M users`} />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#999"
              strokeDasharray="5 5"
              strokeWidth={2}
              dot={false}
              name="Previous Week"
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#3f51b5"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Current Week"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TotalUsersChart;
