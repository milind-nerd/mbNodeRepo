// !! Asynchronous approach !!
const {readFile, writeFile} = require('fs');

//callback function ==> starts from (err, result)
/*readFile('./content/first.txt','utf8', (err, result) => {
    if(err)
    {
        console.log(err);
        return null;
    }
    else
    {
        console.log(result); 
    }
});
*/

/* Another approach => I want to perform below asynchronous steps:
1) call first.txt, then
2) call second.txt, then
3) create new file and copy first.txt and second.txt into it
*/
readFile('./content/first.txt','utf8', (err, result) => {
    if(err)
    {
        console.log(err);
        return null;
    }
    else
    {
        const first = result;
        readFile('./content/second.txt','utf-8', (err, result) => {
        if(err)
        {  
            console.log(err);
            return null;
        }
        else
        {
            console.log("Second " + result); 
            const second = result;
/* 
Note difference between writeFile and writeFileSync (10-modules-FS.js)
We need to provide call back (err, result) in writeFile, since this is Asynchronous
*/
            writeFile('./content/third-sync.txt', second, (err, result) => 
            {
                if(err)
                {
                    console.log("error"+err);
                }
                else
                {
                    console.log(result)
                }
            });
        }
        }
        );
    }
});