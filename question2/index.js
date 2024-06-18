
const express = require('express');
const app=express();
const joi=require('joi');
app.use(express.json());

const products = [
{
"productName": "Laptop 1",
"price": 2236,
"rating": 4.7,
"discount": 63,
"availability": "yes"
},


{
"productName": "Laptop 13",
"price": 1244,
"rating": 4.5,
"discount": 45,
"availability": "out-of-stock"
},


{
"productName": "Laptop 3",
"price": 9102,
"rating": 4.44,
"discount": 98,
"availability": "out-of-stock"},
{
"productName": "Laptop 4",
"price": 1258,
"rating": 3.8,
"discount": 33,
"availability": "yes"
}, {
"productName": "Laptop 7",
"price": 8686,
"rating": 3.22,
"discount": 24,
"availability": "out-of-stock"
},
{
    "productName": "Laptop 8",
    "price": 8686,
    "rating": 3.22,
    "discount": 24,
    "availability": "out-of-stock"
    },
    {
        "productName": "Laptop 9",
        "price": 8686,
        "rating": 3.22,
        "discount": 24,
        "availability": "out-of-stock"
        },
        {
            "productName": "Laptop 10",
            "price": 8686,
            "rating": 3.22,
            "discount": 24,
            "availability": "out-of-stock"
            },
            {
                "productName": "Laptop 5",
                "price": 8686,
                "rating": 3.22,
                "discount": 24,
                "availability": "out-of-stock"
                },
                {
                    "productName": "Laptop 6",
                    "price": 8686,
                    "rating": 3.22,
                    "discount": 24,
                    "availability": "out-of-stock"
                    }
];

app.get('/', (req,res)=> {
res.send("hello world")
});
app.get('/api/products', (req,res)=>
{
    res.send(products);
});


    




    app.post('/api/courses' ,(req,res)=>
    {

       if(!req.body.name || req.body.name.length<3)  
        {
            
            res.status(400).send('name required atleast 3 letters');
            
            return;
        }

     const course = {
       id: courses.length +1,
       
       name: req.body.name
     };
     courses.push(course);
     res.send(course);
    });




app.put('/api/products/:id' ,(req,res)=>
{
    
    const product= products.find(c => c.id === parseInt(req.params.id));
    if(!course)
        {
    res.status(404).send('the course with  guven id is not found');
    return;
        }
    
    if(!req.body.name || req.body.name.length<3)  
        {
            
            res.status(400).send('name required atleast 3 letters');
            
            return;
        }
    
    course.name=req.body.name;
    res.send(course);
});




const port=process.env.PORT || 3000
app.listen(port, ()=>{console.log(`listening on port ${port}`)});

