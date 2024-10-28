// src/App.js
import React, { useState } from 'react';
import { CssBaseline, Box, Grid, Typography, Button, Input } from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import theme from './theme';
import ControlPanel from './components/ControlPanel';
import PrinterCard from './components/PrinterCard';

const App = () => {
  const [printers, setPrinters] = useState([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [interval, setIntervalTime] = useState(120); // Default to 120 seconds

  const addPrinter = (ip, name) => {
    setPrinters([...printers, { ip, name }]);
  };

  const toggleMonitoring = () => {
    setIsMonitoring((prev) => !prev);
  };

  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: 'background.body',
          minHeight: '100vh',
          padding: 3,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Box display="flex" alignItems="center">
            <img
              src="https://hochschulkontaktmesse.com/wp-content/uploads/2024/09/Motto-Logo-final.png"
              alt="HOKO 2024 Logo"
              style={{ height: 40, marginRight: 16 }}
            />
            <Typography level="h4">Monitoring HOKO 2024</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Input
              placeholder="Interval (s)"
              value={interval}
              onChange={(e) => setIntervalTime(Number(e.target.value))}
              type="number"
              sx={{ width: 120 }}
            />
            <Button
              onClick={toggleMonitoring}
              color="neutral"
              variant="outlined"
            >
              {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
            </Button>
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={3}>
            <ControlPanel addPrinter={addPrinter} />
          </Grid>
          {printers.map((printer, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
              <PrinterCard
                key={index}
                ip={printer.ip}
                name={printer.name}
                interval={interval * 1000} // Convert seconds to milliseconds
                isMonitoring={isMonitoring}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </CssVarsProvider>
  );
};

export default App;
