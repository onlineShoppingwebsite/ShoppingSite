import myhttp from 'http';
import { configDotenv } from 'dotenv';
configDotenv();

const port =process.env.PORT || 8700;

const myserver = myhttp.createServer((req,res)=>{
    
    switch(true)
    {
        case req.url=="/" : 
        res.write("this is home pageppppppppppp");
        res.end();
        break;

        case req.url=="/about" : 
        res.write("this is about page");
        res.end();
        break;

        default:
        res.write("Error page");
        res.end();
    }
        
    
});

myserver.listen(port,()=>{
    console.log(`server is runing at port: ${port}`);
});


