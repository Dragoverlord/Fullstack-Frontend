import React from "react";

const RoomChat = () => {
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
