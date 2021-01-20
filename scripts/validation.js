// When form is submitted:
$("#volunteer-form").on("submit", function() {
  var validity = true;

//   if name component is valid:
//     hide name feedback
//   else:
//     show name feedback "Please enter a valid name."
  if ( $("#name").prop("validity").valid ) {
    $("#nameFeed").addClass("hidden");
  } else {
    $("#nameFeed").removeClass("hidden");
    $("#nameFeed").addClass("formFeed");
    validity = false;
  };


//   if email component is valid:
//     hide email feedback
//   else:
//     show email feedback "Please enter a valid email address."
    if ( $("#email").prop("validity").valid ) {
      $("#emailFeed").addClass("hidden");
    } else {
      $("#emailFeed").removeClass("hidden");
      $("#emailFeed").addClass("formFeed");
      validity = false;
    };

    //   if previous experience component is valid:
    //     hide previous experience feedback
    //   else:
    //     show previous experience feedback "Please indicate whether you have volunteered for us before. "
      if ( $("#yes").is(":checked") || $("#no").is(":checked")) {
        $("#prevFeed").addClass("hidden");
      } else {
        $("#prevFeed").removeClass("hidden");
        $("#prevFeed").addClass("formFeed");
        validity = false;
      };
//
//
// //   if time of day component is valid:
// //     hide time feedback
// //   else:
// //     show time feedback "Please select a preferred time."
  if ( $("#morning").is(":checked") || $("#afternoon").is(":checked")|| $("#night").is(":checked") ) {
    $("#timeFeed").addClass("hidden");
  } else {
    $("#timeFeed").removeClass("hidden");
    $("#timeFeed").addClass("formFeed");
    validity = false;
  };


//   if user data is invalid (not all previous components are valid):
//     show feedback messages
//   else:
//     send data to server
  return validity;
});
