import myhttp from 'http';
import { configDotenv } from 'dotenv';
configDotenv();

const port =process.env.PORT || 8700;
const mypro = process;
console.log(mypro);

const myserver = myhttp.createServer((req,res)=>{
    res.write("this is response message this is web yes");
    res.end();
});

myserver.listen(port,()=>{
    console.log(`server is runing at port: ${port}`);
});


