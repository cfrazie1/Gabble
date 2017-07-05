(function() {

  document.getElementById('message').onchange=changeEventHandler;

  function changeEventHandler(event) {
    if(this.value.length > 140) {
      document.getElementById("error").innerHTML="Messages must be 140 characters or less";
    } else {
      document.getElementById("error").innerHTML="";
    }
  }

}());
