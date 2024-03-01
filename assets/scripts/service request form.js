// getting the file uploader container and input
var fileUploadContainer = document.getElementById("fileUploadContainer");
var requestServiceFile = document.getElementsByName("requestServiceFile");

// firing the upload file input
fileUploadContainer.addEventListener("click", function(){
    requestServiceFile[0].click();
});