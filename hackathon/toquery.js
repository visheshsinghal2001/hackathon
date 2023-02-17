function fetchData(data){
    data={filename:"test123.docx"}
    fetch(`/formFind?=`+data.filename).then((response)=>{
        response.json().then((data)=>{
            // console.log(data)
            return data
            
        })
    })
}

function Insert(){
    data={filename:"test123.docx",
            variables:[1,2,3,4,5]
        }

    fetch(`/addToMongoDb`,{
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((response)=>{
        response.json().then((data)=>{
            // console.log(data)
            return data
            
        })
    })
}
/////////////////////////////////////////////////////
function fetchData(){
    data={filename:"test123.docx"}

    fetch(`/formFind?find=`+data.filename).then((response)=>{
        response.json().then((data)=>{
            console.log(data)
            return data
            
        })
    })
}
////////////////////////////////////////////////////
function FindAll(){
    

    fetch(`/mainPage`).then((response)=>{
        response.json().then((data)=>{
            console.log(data)
            // return data
            
        })
    })
}