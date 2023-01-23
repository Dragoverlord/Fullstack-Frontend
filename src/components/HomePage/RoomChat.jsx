import React from "react";
import $ from "jquery";

const RoomChat = () => {
    $(document).ready(function () {
        setInterval(function () {
          $.ajax({
            type: "GET",
            url: "/chat/getMessages/{{room}}/",
            success: function (response) {
              console.log(response);
              $("#display").empty();
              for (var key in response.messages) {
                var temp =
                  "<div class='container darker'><b>" +
                  response.messages[key].user +
                  "</b><p>" +
                  response.messages[key].value +
                  "</p><span class='time-left'>" +
                  response.messages[key].date +
                  "</span></div>";
                $("#display").append(temp);
              }
            },
            error: function (response) {
              alert("An error occured");
            },
          });
        }, 1000);
      });
    
      $(document).on("submit", "#post-form", function (e) {
        e.preventDefault();
    
        $.ajax({
          type: "POST",
          url: "/chat/send",
          data: {
            room_id: $("#room_id").val(),
            message: $("#message").val(),
            csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
          },
          success: function (data) {
            //alert(data)
          },
        });
        document.getElementById("message").value = "";
      });
  return (
    <div className="body">
      <div className="container">
        <h2>{/*{{ room }}  */}- Room Chat</h2>

        <div id="display"></div>

        <form id="post-form">
          {/* {csrf_token} */}
          <input
            type="hidden"
            name="room_id"
            id="room_id"
            value="{{room_details.id}}"
          />
          <input type="text" name="message" id="message" width="100px" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default RoomChat;