const { Module } = require("module");

groupdocs_editor_cloud = require("groupdocs-editor-cloud");
fs=require("fs");

global.clientId = "7032f8eb-af01-430c-92ed-f20348d3c683";
global.clientSecret = "db8742de40c66ac653f4fdb4eb65c61b";
global.myStorage = "";

const configuration = new groupdocs_editor_cloud.Configuration(clientId, clientSecret);
configuration.apiBaseUrl = "https://api.groupdocs.cloud";

let fileApi = groupdocs_editor_cloud.FileApi.fromConfig(configuration);
const download = async (filename) => {
    // create file download request
    let request = new groupdocs_editor_cloud.DownloadFileRequest(filename, myStorage);

// download file
let response =await fileApi.downloadFile(request);

// save image file in working directory
fs.writeFile("app/output/"+ Date.now()+".pdf", response, "binary", function (err) { });

}
module.exports=download
// Module.exports=download;S

