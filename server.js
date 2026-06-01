const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/signals', (req, res) => {
    const day = new Date().getDay();
    // 0 = Sunday, 6 = Saturday
    if (day === 0 || day === 6) {
        return res.json({ signal: "MARKET CLOSED", status: "CLOSED" });
    }
    
    // Yahan technicalindicators ka use karke calculation hogi
    // Example logic placeholder:
    res.json({
        signals: { "1m": { "EURUSD": "UP" } },
        metrics: { "EURUSD": { "1m": { callPct: 70, putPct: 30, confluence: "RSI & EMA Match" } } }
    });
});

app.listen(PORT, () => console.log('Server running on port ' + PORT));
