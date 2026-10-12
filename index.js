import myhttp from 'http';
const myserver = myhttp.createServer((req,res)=>{
    res.write("welcome");
    res.end();
});

myserver.listen(7000,()=>{
    console.log("server is runing at port 8000");
});


