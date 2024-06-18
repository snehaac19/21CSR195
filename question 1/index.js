const express = require('express');
const axios = require('axios');
const app=express();
const port=3000;

const api_key= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4NjkwODU5LCJpYXQiOjE3MTg2OTA1NTksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjhkNTAxZDA2LTk5OGEtNDU2Yy1iYzc0LTZhYWVmMjkyOGU0NCIsInN1YiI6InNuZWhhYWMuMjFjc2VAa29uZ3UuZWR1In0sImNvbXBhbnlOYW1lIjoiQWZmb3JkIE1lZGljYWwiLCJjbGllbnRJRCI6IjhkNTAxZDA2LTk5OGEtNDU2Yy1iYzc0LTZhYWVmMjkyOGU0NCIsImNsaWVudFNlY3JldCI6IldkZEJyZ3ZFbEtTY2RGSGoiLCJvd25lck5hbWUiOiJTbmVoYWEgYyIsIm93bmVyRW1haWwiOiJzbmVoYWFjLjIxY3NlQGtvbmd1LmVkdSIsInJvbGxObyI6IjIxQ1NSMTk1In0.GBSAduAw981zZvjZVeHXY0yiELaN-90mEM66fqeOJdU';
const api_url='http://20.244.56.144/test/even';

app.get('/test/primes' , async (req,res)=>
{
    try{
        const response=await axios.get(api_url,{
          headers: {
            'Authorization' : `Bearer ${api_key}`
          }
        });
        res.send(res.body);
    }
    catch (error)
    {
        console.error(error);
        res.status(500).send('error fetching data');
    }
});

app.listen(port, ()=>{
    console.log(`sever listening on port ${port}`);
})