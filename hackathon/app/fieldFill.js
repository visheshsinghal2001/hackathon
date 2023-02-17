download=require("./finalContract.js")

editor_cloud = require("groupdocs-editor-cloud");
 
const appSid = "7032f8eb-af01-430c-92ed-f20348d3c683"; // Get AppKey and AppSID from https://dashboard.groupdocs.cloud
const appKey = "db8742de40c66ac653f4fdb4eb65c61b"; // Get AppKey and AppSID from https://dashboard.groupdocs.cloud
  
const editDocument = async (filename,data) => {

// api initialization
editApi = editor_cloud.EditApi.fromKeys(appSid, appKey);
fileApi = editor_cloud.FileApi.fromKeys(appSid, appKey);
 
// The document already uploaded into the storage.

// Load it into editable state      
let fileInfo = new editor_cloud.FileInfo();
fileInfo.filePath = filename;
let loadOptions = new editor_cloud.WordProcessingLoadOptions();
loadOptions.fileInfo = fileInfo;
loadOptions.outputPath = "output";
let loadResult = await editApi.load(new editor_cloud.LoadRequest(loadOptions));
 
// Download html document
let downloadRequest = new editor_cloud.DownloadFileRequest(loadResult.htmlPath);
//let buf = await fileApi.downloadFile(new editor_cloud.DownloadFileRequest(loadResult.htmlPath));
let buf = await fileApi.downloadFile(downloadRequest);
let htmlString = buf.toString("utf-8");
 
for (const [key, value] of Object.entries(data)) {
    if(key=="filename")continue;
    htmlString= htmlString.replaceAll(`(${key})`,value);
 }
// Edit something...
// htmlString = htmlString.replace("State", "GUjarat");



 
// Upload html back to storage
await fileApi.uploadFile(new editor_cloud.UploadFileRequest(loadResult.htmlPath, new Buffer(htmlString, "utf-8")));
 
// Save html back to docx
let saveOptions = new editor_cloud.WordProcessingSaveOptions();
saveOptions.fileInfo = fileInfo;
saveOptions.outputPath = "output/"+ Date.now()+".pdf";
saveOptions.htmlPath = loadResult.htmlPath;
saveOptions.resourcesPath = loadResult.resourcesPath;
let saveResult = await editApi.save(new editor_cloud.SaveRequest(saveOptions));
 
// Done.
console.log("Document edited: " + saveResult.path);

return saveOptions.outputPath;
}

// ModelErr
module.exports=editDocument


// model.exports=editDocument