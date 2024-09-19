import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Box, Chip } from '@mui/material';

const TokenGenerator = () => {
  const [blueCount, setBlueCount] = useState('');
  const [bluePrefix, setBluePrefix] = useState('');
  const [bluePerRow, setBluePerRow] = useState('');
  const [redCount, setRedCount] = useState('');
  const [redPrefix, setRedPrefix] = useState('');
  const [redPerRow, setRedPerRow] = useState('');

  const [blueTokens, setBlueTokens] = useState([]);
  const [redTokens, setRedTokens] = useState([]);

  const generateTokens = () => {
    const blueArray = [];
    for (let i = 1; i <= blueCount; i++) {
      blueArray.push(`${bluePrefix}${i}`);
    }

    const redArray = [];
    for (let i = 1; i <= redCount; i++) {
      redArray.push(`${redPrefix}${i}`);
    }

    setBlueTokens(blueArray);
    setRedTokens(redArray);
  };

  const clearForm = () => {
    setBlueCount('');
    setBluePrefix('');
    setBluePerRow('');
    setRedCount('');
    setRedPrefix('');
    setRedPerRow('');
    setBlueTokens([]);
    setRedTokens([]);
  };

  const renderTokensInRows = (tokens, perRow, color) => {
    const rows = [];
    for (let i = 0; i < tokens.length; i += perRow) {
      rows.push(tokens.slice(i, i + perRow));
    }

    return rows.map((row, rowIndex) => (
      <Grid container key={rowIndex} spacing={1} justifyContent="center">
        {row.map((token, index) => (
          <Grid item key={index}>
            <Chip
              label={token}
              sx={{
                backgroundColor: color,
                color: 'white',
                width: { xs: '50px', sm: '60px' },
                height: { xs: '50px', sm: '60px' },
                fontSize: { xs: '14px', sm: '16px' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '5px',
                borderRadius: '8px',
              }}
            />
          </Grid>
        ))}
      </Grid>
    ));
  };

  return (
    <Box sx={{ padding: { xs: 2, md: 4 } }}>
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }}>
        Token Generator
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Number of Blue Tokens"
            type="number"
            fullWidth
            value={blueCount}
            onChange={(e) => setBlueCount(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Blue Tokens Prefix"
            fullWidth
            value={bluePrefix}
            onChange={(e) => setBluePrefix(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Blue Tokens Per Row"
            type="number"
            fullWidth
            value={bluePerRow}
            onChange={(e) => setBluePerRow(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Number of Red Tokens"
            type="number"
            fullWidth
            value={redCount}
            onChange={(e) => setRedCount(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Red Tokens Prefix"
            fullWidth
            value={redPrefix}
            onChange={(e) => setRedPrefix(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Red Tokens Per Row"
            type="number"
            fullWidth
            value={redPerRow}
            onChange={(e) => setRedPerRow(e.target.value)}
          />
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 3, textAlign: 'center' }}>
        <Button variant="contained" color="primary" onClick={generateTokens}>
          Generate
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={clearForm}
          sx={{ marginLeft: 2 }}
        >
          Clear
        </Button>
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" textAlign="center" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Blue Tokens
        </Typography>
        {bluePerRow > 0 && renderTokensInRows(blueTokens, Number(bluePerRow), 'blue')}
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" textAlign="center" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Red Tokens
        </Typography>
        {redPerRow > 0 && renderTokensInRows(redTokens, Number(redPerRow), 'red')}
      </Box>
    </Box>
  );
};

export default TokenGenerator;
