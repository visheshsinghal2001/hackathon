groupdocs_editor_cloud = require("groupdocs-editor-cloud");
fs=require("fs");
const path=require("path")

global.clientId = "7032f8eb-af01-430c-92ed-f20348d3c683";
global.clientSecret = "db8742de40c66ac653f4fdb4eb65c61b";
global.myStorage = "";

const configuration = new groupdocs_editor_cloud.Configuration(clientId, clientSecret);
configuration.apiBaseUrl = "https://api.groupdocs.cloud";


const upload=async(filepath,filename)=>{
  // const viewPath=path.join(__dirname,+"../"+filepath)

  let fileApi = groupdocs_editor_cloud.FileApi.fromConfig(configuration);
let resourcesFolder = filepath;
// console.log(viewPath)
fs.readFile(resourcesFolder, (err, fileStream) => {
  if(err) console.log(err)
  // console.log("running")
  let request = new groupdocs_editor_cloud.UploadFileRequest(filename, fileStream, myStorage);
  // console.log(request)
  fileApi.uploadFile(request);
});

}
module.exports=upload