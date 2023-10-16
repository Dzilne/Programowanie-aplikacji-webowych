const express = require('express');
const app = express();
app.get('/', (req, res)=>{
    app.engine('html', require('ejs').renderFile);
})
app.get('/kontakt', (req, res)=>{

})
app.listen(3000, ()=>{
    console.log('server running');
})