// src/components/PrinterCard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Box, Chip } from '@mui/joy';
import { CheckCircle, Warning, Error } from '@mui/icons-material';

const PrinterCard = ({ ip, name, interval, isMonitoring }) => {
  const [status, setStatus] = useState({
    message: 'Working',
    color: 'success',
    icon: <CheckCircle />,
  });

  useEffect(() => {
    if (!isMonitoring) return;

    const fetchPrinterStatus = async () => {
      try {
        const response = await axios.get(`http://${ip}:631/jobs?`);

        if (response.data.includes("Sending data to printer.")) {
          setStatus({
            message: 'Changing paper roll',
            color: 'warning',
            icon: <Warning />,
          });
        } else if (response.data.includes("Waiting for printer to become available")) {
          setStatus({
            message: 'Printer offline',
            color: 'danger',
            icon: <Error />,
          });
        } else {
          setStatus({
            message: 'Working',
            color: 'success',
            icon: <CheckCircle />,
          });
        }
      } catch {
        setStatus({
          message: 'Pi offline',
          color: 'danger',
          icon: <Error />,
        });
      }
    };

    fetchPrinterStatus();
    const intervalId = setInterval(fetchPrinterStatus, interval);

    return () => clearInterval(intervalId);
  }, [ip, interval, isMonitoring]);

  return (
    <Card variant="outlined" sx={{ width: '100%', maxWidth: 280, marginBottom: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography level="h5" fontWeight="bold">{name}</Typography>
          <Chip
            size="sm"
            color={status.color}
            startDecorator={status.icon}
            sx={{
              fontWeight: 'bold',
              fontSize: '0.875rem',
              padding: '0.25rem 0.75rem',
              alignSelf: 'flex-start'
            }}
          >
            {status.message}
          </Chip>
        </Box>
        <Typography level="body2" color="text.secondary">
          {ip}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PrinterCard;
