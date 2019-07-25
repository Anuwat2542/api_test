const LineNotify = require("./src/client");

const ACCESS_TOKEN = "RjoWmBES0b9B7A8DEbVlL9gRl4NEJBvJsIv2n1tgdZd";
const notify = new LineNotify(`${ACCESS_TOKEN}`);

notify.sendText("tunwaเอง...");
notify.sendImage(
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYxsVaqBwQgHSh3kSwXl2HGH4um4FBCBs1bxZb8wI3CTR1UrE3g"
);
//notify.sendImage("Capture.jpg");
//notify.sendSticker(13, 1);

//notify.status()
//notify.revoke()
