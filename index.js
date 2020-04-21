const express = require("express");
const app = express();

const accountSid = "ENTER ACCOUNT SSID";
const authToken = "ENTER ACCOUNT AUTH TOKEN";
const client = require("twilio")(accountSid, authToken);

app.get("/test", (req, res) => {
  const testData = [
    {
      id: 1,
      name: "wasique",
    },
    {
      id: 2,
      name: "anwar",
    },
  ];
  return res.json(testData);
});

app.post("/createroom", (req, res) => {
  client.video.rooms
    .create({ uniqueName: "myTestRoom" })
    .then((room) =>
      res.json({ message: `Room Created Successfully ${room.sid}` })
    );
});

const PORT = 5000;

app.listen(PORT, () => console.log(`connected to port: ${PORT}`));
