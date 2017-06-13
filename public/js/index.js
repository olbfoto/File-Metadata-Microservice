var file;
$("document").ready(function(){
   file = document.getElementById("myFile");
  file.multiple = false;
});
  function uploadClick(){
    if (file.files.length!==0){
      var formData = new FormData();
      formData.append('fileToUpload', file.files[0]);
      var XHR = new XMLHttpRequest();
        // Define what happens on successful data submission
      XHR.addEventListener('load', function(event) {
        alert(XHR.response);
      });
    
      // Define what happens in case of error
      XHR.addEventListener('error', function(event) {
        alert('Oups! Something went wrong.');
      });
    
      XHR.open('POST', 'https://file-upload-fcc-olbfoto.herokuapp.com/up');
      XHR.send(formData);
    
    };  
}