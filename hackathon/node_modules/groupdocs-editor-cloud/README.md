# GroupDocs.Editor Cloud Node.js SDK
Node.js module for communicating with the GroupDocs.Editor Cloud API

GroupDocs.Editor Cloud allows you to edit documents across wide range of supported document types:
   * Microsoft Word documents - DOC, DOCX, DOCM, DOT, DOTM, DOTX, RTF, FlatOpc, WordML, TXT;
   * Microsoft Excel spreadsheets - XLS, XLSX, XLSM, XLT, XLTX, XLTM, XLSB, SpreadsheetML, CSV, TSV;
   * Microsoft PowerPoint presentations - PPT, PPTX, PPTM, POT, PPS etc.;
   * Open Document formats - ODT, OTT, ODS, ODP, OTP;
   * Markup - HTML, MHTML, XML.
## Installation

A package `groupdocs-editor-cloud` is available at [npmjs.com](https://www.npmjs.com/package/groupdocs-editor-cloud). You can install it with:

```shell
npm install groupdocs-editor-cloud
```    

## Getting Started

Please follow the [installation](#installation) procedure and then run the following JavaScript code:

```js
// load the module
var GroupDocs = require('groupdocs-editor-cloud');

// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
var appSid = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
var appKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// construct EditorApi
var infoApi = GroupDocs.InfoApi.fromKeys(appSid, appKey);

// retrieve supported file-formats
infoApi.getSupportedFileFormats()
    .then(function (response) {
        console.log("Supported file-formats:")
        response.formats.forEach(function (format) {
            console.log(format.fileFormat + " (" + format.extension + ")");
        });
    })
    .catch(function (error) {
        console.log("Error: " + error.message)
    });
```

Or compile and run same written in TypeScript:

```ts
// load the module
import { InfoApi } from "groupdocs-editor-cloud";

// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
const appSid: string = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const appKey: string = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// construct EditorApi
const infoApi: InfoApi = InfoApi.fromKeys(appSid, appKey);

// retrieve supported file-formats
infoApi.getSupportedFileFormats()
    .then((result) => {
        console.log("Supported file-formats:");
        result.formats.forEach((format) => {
            console.log(format.fileFormat + " (" + format.extension + ")");
        });
    })
    .catch((error) => {
        console.log("Error: " + error.message);
    });
```


## Licensing
GroupDocs.Editor Cloud Node.js SDK licensed under [MIT License](LICENSE).

## Resources
+ [**Website**](https://www.groupdocs.cloud)
+ [**Product Home**](https://products.groupdocs.cloud/editor)
+ [**Documentation**](https://docs.groupdocs.cloud/display/editorcloud/Home)
+ [**Free Support Forum**](https://forum.groupdocs.cloud/c/editor)
+ [**Blog**](https://blog.groupdocs.cloud/category/editor)

## Contact Us
Your feedback is very important to us. Please feel free to contact us using our [Support Forums](https://forum.groupdocs.cloud/c/editor).