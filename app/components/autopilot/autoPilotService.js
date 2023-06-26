angular.module("APService", []).factory("APContent", function () {
  var newMessage = "auto pilot file content";

  return {
    newMessage: newMessage,
  };
});
