const express = require('express');
//const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// Fetch data from public API
async function fetchData() {
  try {
    const response = await fetch('https://api.publicapis.org/entries');
    const data = await response.json();
    return data.entries;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// API endpoint to get entries with optional category and limit
app.get('/api', async (req, res) => {
  try {
    const { category, limit } = req.query;
    let entries = await fetchData();

    // Filter by category if provided
    if (category) {
      entries = entries.filter(entry =>
        entry.Category.toLowerCase() === category.toLowerCase()
      );
    }

    // Limit the number of entries if provided
    if (limit) {
      entries = entries.slice(0, parseInt(limit));
    }

    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
