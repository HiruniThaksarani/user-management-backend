const app=require('./app');

const hostname='localhost';
const port=5000;

const server=app.listen(port,hostname,()=>{
    console.log(`Server running at ${port}`)
});


