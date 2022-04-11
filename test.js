  $(document).ready(function() {
  const forbiddenEmails = ["gmail","hotmail","yahoo","aol","msn","wanadoo","orange"];
  function containsForbiddenEmail(email){let exists = false;forbiddenEmails.forEach(forbiddenEmail => {if(email.includes(forbiddenEmail)) {exists= true;}});return exists;
  }
    $("#email-4").keyup(function() {
    var email = document.getElementById("email-4");
      if (!email.checkValidity()) {
      	if ($("#email-4-error").css('display') === 'none') {
          $("#email-error").css('display', 'block');
        } else {
          $("#email-error").css('display', 'none');
      	}
      } else {
          $("#email-error").css('display', 'none');
      }
    });  
    $("#next1").click(function(){
    var emailValue = document.getElementById("email-4").value;
  if(!containsForbiddenEmail(emailValue)){
    if ($("#request-access-form").valid()) {
      $("#page1").css('display', 'none');
      $("#page2").css('display', 'flex');
      $("#page3").css('display', 'none');
      $("#page4").css('display', 'none');
      $("#page5").css('display', 'none');
      $("#page6").css('display', 'none');
      $("#image2").css('display', 'block');
      $("#image3").css('display', 'none');
      $("#head1").css('display', 'none');
    } else {
      $("#request-access-form").valid();
    }} else {console.log("personal email detected");}
  });
    $("#next2").click(function(){
      if ($(".checkbox2").hasClass("w--redirected-checked")&& $(".checkbox3").hasClass("w--redirected-checked")){
       $("#error-2").css('display', 'none');
       $("#image2").css('display', 'block');
       $("#image3").css('display', 'none');
       $("#page1").css('display', 'none');
       $("#page2").css('display', 'none');
       $("#page3").css('display', 'flex');
       $("#page4").css('display', 'none');
       $("#page5").css('display', 'none');
       $("#page6").css('display', 'none');
       formCheckboxes = $('.description-checkbox');
       var checkVals = [];
       formCheckboxes.each(function(index, checkbox) {
        if ($(this).find('div').hasClass("w--redirected-checked")) {
        checkVals.push($(this).find('span').text());
         }
         });
         $("#DESC").val(checkVals.join(", "));
        formCheckboxes = $('.handle-checkbox');
        var checkVals = [];
        formCheckboxes.each(function(index, checkbox) {
        	if ($(this).find('div').hasClass("w--redirected-checked")) {
          	checkVals.push($(this).find('span').text());
          }
         });
         $("#HANDLE").val(checkVals.join(", "));
        }
         else {
        $("#error-2").css('display', 'block');
      }
    });  
    
    $("#next3").click(function(){
      if ($(".checkbox4").hasClass("w--redirected-checked") && $(".checkbox5").hasClass("w--redirected-checked") ){
        $("#error-2").css('display', 'none');
        $("#image2").css('display', 'none');
        $("#image3").css('display', 'block');
        $("#page1").css('display', 'none');
        $("#page2").css('display', 'none');
        $("#page3").css('display', 'none');
        $("#page4").css('display', 'flex');
        $("#page5").css('display', 'none');
        $("#page6").css('display', 'none');
         formCheckboxes3 = $('.engineer-checkbox');
        var checkVals = [];
        formCheckboxes3.each(function(index, checkbox) {
        	if ($(this).find('div').hasClass("w--redirected-checked")) {
          	checkVals.push($(this).find('span').text());
          }
         });
         $("#ENGINEER").val(checkVals.join(", "));
          formCheckboxes3 = $('.hours-checkbox');
        var checkVals = [];
        formCheckboxes3.each(function(index, checkbox) {
        	if ($(this).find('div').hasClass("w--redirected-checked")) {
          	checkVals.push($(this).find('span').text());
          }
         });
         $("#HOURS").val(checkVals.join(", "));
        }
         else {
        $("#error-3").css('display', 'block');
      }
    });
    $("#next4").click(function(){
      if ($(".checkbox6").hasClass("w--redirected-checked") && $(".checkbox7").hasClass("w--redirected-checked") ){
        $("#error-2").css('display', 'none');
        $("#image2").css('display', 'none');
        $("#image3").css('display', 'block');
        $("#page1").css('display', 'none');
        $("#page2").css('display', 'none');
        $("#page3").css('display', 'none');
        $("#page4").css('display', 'none');
        $("#page5").css('display', 'flex');
        $("#page6").css('display', 'none');
        formCheckboxes4 = $('.remote-checkbox');
        var checkVals = [];
        formCheckboxes4.each(function(index, checkbox) {
        	if ($(this).find('div').hasClass("w--redirected-checked")) {
          	checkVals.push($(this).find('span').text());
          }
         });
         $("#REMOTE").val(checkVals.join(", "));
        formCheckboxes5 = $('.agile-checkbox');
        var checkVals = [];
        formCheckboxes5.each(function(index, checkbox) {
        	if ($(this).find('div').hasClass("w--redirected-checked")) {
          	checkVals.push($(this).find('span').text());
          }
         });
         $("#AGILE").val(checkVals.join(", "));
        }
         else {
        $("#error-4").css('display', 'block');
      }
    });
    $("#next5").click(function(){
      if ($(".checkbox8").hasClass("w--redirected-checked") && $(".radio-size").hasClass("w--redirected-checked") ){
        $("#error-2").css('display', 'none');
        $("#image2").css('display', 'none');
        $("#image3").css('display', 'block');
        $("#page1").css('display', 'none');
        $("#page2").css('display', 'none');
        $("#page3").css('display', 'none');
        $("#page4").css('display', 'none');
        $("#page5").css('display', 'none');
        $("#page6").css('display', 'flex');
         formCheckboxes6 = $('.role-checkbox');
        var checkVals = [];
        formCheckboxes6.each(function(index, checkbox) {
        	if ($(this).find('div').hasClass("w--redirected-checked")) {
          	checkVals.push($(this).find('span').text());
          }
         });
         $("#ROLE").val(checkVals.join(", "));

         formCheckboxes6 = $('.size-checkbox');
        var checkVals = [];
        formCheckboxes6.each(function(index, checkbox) {
        	if ($(this).find('div').hasClass("w--redirected-checked")) {
          	checkVals.push($(this).find('span').text());
          }
         });
         $("#SIZE").val(checkVals.join(", "));
        }
         else {
        $("#error-5").css('display', 'block');
      }
    });
    $("#submit").click(function(){
      if ($(".checkbox").hasClass("w--redirected-checked")){
        
         appsCheckboxes = $('.apps-check');
        var appVals = [];
        appsCheckboxes.each(function(index, checkbox) {
        	if ($(this).find('div').hasClass("w--redirected-checked")) {
          	appVals.push($(this).find('span').text());
          }
        });
        $("#REQAPPS-2").val(appVals.join(", "));
        
        $("#request-access-form").submit();
      } else {
        $("#error-6").css('display', 'block');
      }
    });
    $("#back1").click(function(){
            $("#page1").css('display', 'flex');
            $("#page2").css('display', 'none');
            $("#page3").css('display', 'none');
            $("#page4").css('display', 'none');
            $("#page5").css('display', 'none');
            $("#page6").css('display', 'none');
            $("#image2").css('display', 'none');
            $("#image3").css('display', 'none');
            $("#head1").css('display', 'block');
        });
        $("#back2").click(function(){
        $("#image2").css('display', 'block');
        $("#image3").css('display', 'none');
        $("#head1").css('display', 'none');
          $("#page1").css('display', 'none');
          $("#page2").css('display', 'flex');
          $("#page3").css('display', 'none');
          $("#page4").css('display', 'none');
          $("#page5").css('display', 'none');
          $("#page6").css('display', 'none');  
      });
      $("#back3").click(function(){
        $("#image2").css('display', 'block');
        $("#image3").css('display', 'none'); 
          $("#page1").css('display', 'none');
          $("#page2").css('display', 'none');
          $("#page3").css('display', 'flex');
          $("#page4").css('display', 'none');
          $("#page5").css('display', 'none');
          $("#page6").css('display', 'none');
      });
      $("#back4").click(function(){
        $("#image2").css('display', 'none');
        $("#image3").css('display', 'block');
          $("#page1").css('display', 'none');
          $("#page2").css('display', 'none');
          $("#page3").css('display', 'none');
          $("#page4").css('display', 'flex');
          $("#page5").css('display', 'none');
      });
       $("#back4").click(function(){
        $("#image2").css('display', 'none');
        $("#image3").css('display', 'block');
          $("#page1").css('display', 'none');
          $("#page2").css('display', 'none');
          $("#page3").css('display', 'none');
          $("#page4").css('display', 'flex');
          $("#page5").css('display', 'none');
           $("#page6").css('display', 'none');
      });
      $("#back4").click(function(){
      $("#image2").css('display', 'none');
      $("#image3").css('display', 'block');
        $("#page1").css('display', 'none');
        $("#page2").css('display', 'none');
        $("#page3").css('display', 'none');
        $("#page4").css('display', 'none');
        $("#page5").css('display', 'flex');
        $("#page6").css('display', 'flex');
});
 }); 
