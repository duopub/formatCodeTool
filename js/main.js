$(".gooey-menu-item").click(function () {
  if ($(this).data("value") === undefined) {
    // return;
  } else if ($(this).data("value") === "encodeURIComponent") {
    $("#text2").text(encodeURIComponent($("#text1").val().toString()));
  } else if ($(this).data("value") === "decodeURIComponent") {
    $("#text2").text(decodeURIComponent($("#text1").val().toString()));
  } else if ($(this).data("value") === "python") {
    $.post({
      url: "http://www.zafuswitchout.com:3001/python",
      contentType: "text/plain;charset=utf-8",
      data: $("#text1").val().toString(),
      success: function (data) {
        $("#text2").text(decodeURIComponent(data));
      },
    });
  } else if ($(this).data("value") === "swift") {
    $.post({
      url: "http://www.zafuswitchout.com:3001/swift",
      contentType: "text/plain;charset=utf-8",
      data: $("#text1").val().toString(),
      success: function (data) {
        $("#text2").text(decodeURIComponent(data));
      },
    });
  } else if ($(this).data("value") === "ruby") {
    $.post({
      url: "http://www.zafuswitchout.com:3001/ruby",
      contentType: "text/plain;charset=utf-8",
      data: $("#text1").val().toString(),
      success: function (data) {
        $("#text2").text(decodeURIComponent(data));
      },
    });
  } else {
    $.post({
      url: "http://aozozo.com:600/" + $(this).data("value"),
      contentType: "text/plain;charset=utf-8",
      data: $("#text1").val().toString(),
      success: function (data) {
        $("#text2").text(decodeURIComponent(data));
      },
    });
  }
});
