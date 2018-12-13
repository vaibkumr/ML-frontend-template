var feature1_ ,feature2_, feature3_;

$(document).ready(function(){
  // fetch all DOM elements for the input
  feature1_ = document.getElementById("feature1");
  feature2_ = document.getElementById("feature2");
  feature3_ = document.getElementById("feature3");
})

$(document).on('click','#submit',function(){
    // on clicking submit fetch values from DOM elements and use them to make request to our flask API
    var feature1 = feature1_.value;
    var feature2 = feature2_.value;
    var feature3 = feature3_.value;
    if(feature1 == "" || feature2 == "" || feature3 == ""){
      // you may allow it as per your model needs
      // you may mark some fields with * (star) and make sure they aren't empty here
      alert("empty fields not allowed");
    }
    else{
      // replace <username> with your pythonanywhere username
      // also make sure to make changes in the url as per your flask API argument names
      var requestURL = "https://<username>.pythonanywhere.com/?feature1="+feature1+"&feature2="+feature2+"&feature3="+feature3;
      console.log(requestURL); // log the requestURL for troubleshooting
      $.getJSON(requestURL, function(data) {
        console.log(data); // log the data for troubleshooting
        prediction = data['json_key_for_the_prediction'];
      });
      // following lines consist of action that would be taken after the request has been read
      // for now i am just changing a <h2> tag's inner html using jquery
      // you may simple do: alert(prediction);
      $(".result").html("Prediction is:" + prediction);
    }
  });
