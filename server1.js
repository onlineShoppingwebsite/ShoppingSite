import myhttp from 'http';
import { configDotenv } from 'dotenv';
configDotenv();

const port =process.env.PORT || 8700;

const myserver = myhttp.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.write("this is home page");
        res.end();
    }
    else if(req.url==="/about")
    {
        res.write("this is about page");
        res.end();
    }
    else if(req.url==="/contact")
    {
        res.write("this is contact page");
        res.end();
    }
    else
    {
        res.write("Not Found Page");
        res.end();

    }
});

myserver.listen(port,()=>{
    console.log(`server is runing at port: ${port}`);
});


