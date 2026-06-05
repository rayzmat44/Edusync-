require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())
app.get('/api/health', function(req, res) {
    res.json({status: 'ok', version: '1.0.0'})
})

app.listen( process.env.PORT, function(){
    console.log('EduSync server running on port 3000')
})