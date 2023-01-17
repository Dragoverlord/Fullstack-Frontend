import React from "react";
import $ from 'jquery';
import "./Sidebar.css"
import RoomChat from "./RoomChat";
import { useNavigate } from "react-router";

const Sidebar = () => {
    const navigate = useNavigate()
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

  $(document).on('submit','#post-form',function(e){
    e.preventDefault();

    $.ajax({
      type:'POST',
      url:'/chat/send',
      data:{
          room_id:$('#room_id').val(),
          message:$('#message').val(),
        csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
      },
      success: function(data){
         //alert(data)
      }
    });
    document.getElementById('message').value = ''
  });

  return (
    <div className="body">
      <div align="center">
        <h2>Home Chat</h2>
      </div>
      <div className="container">
        <form id="post-form" method="POST" action="checkview">
          {/* {csrf_token} */}
          <label>Room Name</label>
          <input type="text" name="room_name" id="room_name" width="100px" />
          <input type="submit" value="Enter Room"/>
        </form>
        <RoomChat/>
      </div>
    </div>
  );
};

export default Sidebar;
