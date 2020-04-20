const express = require("express");
const app = express();

const accountSid = "ACa725cb33d65faebe793f1ec68c2e4298";
const authToken = "d9d0e809f1598e2799b7369cfec92557";
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
