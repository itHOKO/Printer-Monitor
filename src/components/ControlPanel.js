// src/components/ControlPanel.js
import React, { useState } from 'react';
import { Button, Input, Card, CardContent, Stack } from '@mui/joy';

const ControlPanel = ({ addPrinter }) => {
  const [name, setName] = useState('');
  const [ip, setIp] = useState('');

  const handleAddPrinter = () => {
    if (name && ip) {
      addPrinter(ip, name);
      setName('');
      setIp('');
    }
  };

  return (
    <Card variant="outlined" sx={{ padding: 2 }}>
      <CardContent>
        <Stack spacing={2}>
          <Input
            placeholder="Printer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <Input
            placeholder="Printer IP"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            fullWidth
          />
          <Button onClick={handleAddPrinter} color="primary" variant="solid">
            Add Printer
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ControlPanel;
