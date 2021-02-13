



 function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#blah').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

$("#imageInput").change(function() {
  readURL(this);
});

$('button').on('click', function () {
    let name = $("#name").val();
    let location = $("#location").val();
    let college = $("#college").val();
    // alert(name);
    // $("#idCard").addClass('idClass');
    let src= $("#blah").attr('src');
   
    $(".image").css('background-image', "url(" + src + ")");
    

    $(".idContent").html("<b>Name:</b>  "+ name+"<br><br><b>College:</b> "+ college+"<br><br><b>Location:  </b>"+ location );
    $(".idContent").addClass("idContentAfter");
    $(".idImage").addClass("idImageAfter");
    $(".idClass").addClass("idClassAfter");

    return false;

});

