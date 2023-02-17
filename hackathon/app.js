const path=require("path")
const express=require('express')

const upload=require("./app/uploadTemplate.js")
const mongoAccess=require("./app/mongoAccess.js")
const fieldExtract=require("./app/extractFields.js");
const  editDocument=require("./app/fieldFill.js");
const download=require("./app/finalContract.js")


const app=express()

app.use(express.static("./")) 
app.use(express.json());

// to get data from word and upload same to group cloud
app.get("/saveinDB",(req,res)=>{
  //  filepath=req.query.filepath;
  //  filepath=req.query.filename;
   filepath="./doc.docx";
   filename="doc.docx";
  fieldExtract(filepath,(getField)=>{
    upload(filepath,filename).then(() => {

      console.log("Document uploaded successfully");
      
      }).catch((err) => {
      console.log("Error occurred while downloading the document:", err);
      })
      getField["filename"]=filename;
      console.log(getField);
      console.log("whtff")
      return res.send(getField)
    }
  )
    
})

// to add new record to  mongoDB
app.post("/addToMongoDb",(req,res)=>{
  data=req.body;
    mongoAccess.insertNew(data,(response)=>{

      return res.send(response)
    })
})
// to fetch all contracts names
app.get("/mainPage",(req,res)=>{

  mongoAccess.FindAll((data)=>{
    // console.log(data)
    return res.send(data)
  })
})
// to fetch specific contract details from MongoDB
app.get("/formFind",(req,res)=>{
  field=req.query.find;
  mongoAccess.FindSpecific(field,(result)=>{
    console.log(result);
    return res.send(result)
  })
})

app.get("/apiLink",(req,res)=>{
  // data=req.body
  data={filename:"trial.docx",
  "Contractor Name":"Vishesh singhal",
  "Business Address":"VIT Chennai",
  "Phone Number":987654321,
  "Fax Number":123456,
  "Email":"VIT.example@vitstudent.ac.in",
  "Client Name":"GIBOTS",
  "State":"Delhi"      
}
reg=data.filename;
// data["filename"]=undefined
  editDocument(reg,data)
.then((filepath) => {
console.log("Document edited successfully");
download(filepath)
.then(() => {
console.log("Document downloaded successfully");
})
.catch((err) => {
console.log("Error occurred while downloading the document:", err);
})
})
.catch((err) => {
console.log("Error occurred while editing the document:", err);
})
})


app.listen(3000,()=>{ //this is here to start express server 
    console.log("wtf")
})




