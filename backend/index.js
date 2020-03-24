const express = require('express');

const app = express(); 

app.get('/',(request, response) => {
    return response.json({ 
        evento: 'Learn Xpress',
        aluno:'Matheus'
     });
})

app.listen(3333);