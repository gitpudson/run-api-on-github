import express from 'express';
import core from 'cors'


//app config
const app = express();
const port = process.env.PORT || 8080;

//middleware
app.use(express.json())
// app.use(core());

// app.get("/",(req,res)=>{
//     res.send("API Working");
// });

app.use(express.static('dist'));

app.get("/api/users",(req,res)=>{
    res.send([
        {
            id:1,
            name:'John Doe',
            age:32
        },
        {
            id:2,
            name:'Jane Doe',
            age:30
        },
        {
            id:2,
            name:'Jack Doe',
            age:39
        },
    ])
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
    
});
