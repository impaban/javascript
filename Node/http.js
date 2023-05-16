/*const http = require ("https");
const request =http.request("https//www.facebook.com",(res)=>{
    res.on("data",(chunk)=>{
        console.log(`data chunk: ${chunk}`);

    });
    res.on("end",()=>{
        console.log("no more data ");

    });
});
request.end();
*/
const {get} = require("https");

const request = get ("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`data chunk: ${chunk}`);
  });

  res.on("end", () => {
    console.log("no more data");
  });
});

