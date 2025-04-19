// components/TrafficByWebsite.jsx
import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';

const trafficData = [
  { name: 'Google', value: 60 },
  { name: 'YouTube', value: 45 },
  { name: 'Instagram', value: 85 }, // Highlighted
  { name: 'Pinterest', value: 30 },
  { name: 'Facebook', value: 25 },
  { name: 'Twitter', value: 20 },
  { name: 'Tumblr', value: 15 },
//   { name: 'Whatsapp',value:95 }
];

const TrafficByUser = () => {
  return (
    <Card elevation={0} sx={{ borderRadius: 3, backgroundColor: '#f9f9fb', height: 374 }}>
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Traffic by Website
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          {trafficData.map((site) => (
            <Box key={site.name}>
              <Typography
                variant="body2"
                fontWeight={site.name === 'Instagram' ? 600 : 400}
                color={site.name === 'Instagram' ? 'text.primary' : 'text.secondary'}
              >
                {site.name}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={site.value}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: '#e0e0e0',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: site.name === 'Instagram' ? '#000' : '#c5c5c5',
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TrafficByUser;
