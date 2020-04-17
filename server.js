const mosca = require("mosca");
const dataStore = {
  type: "mongo",
  url: "mongodb://rahul:F3F6BhQR4Y0zd9bC@ds029381.mlab.com:29381/mqtt",
  pubsubCollection: "mqtt",
  mongo: {},
};
const settings = {
  port: 1883,
  backend: dataStore,
  persistence: {
    factory: mosca.persistence.Mongo,
    url: "mongodb://rahul:F3F6BhQR4Y0zd9bC@ds029381.mlab.com:29381/mqtt",
  },
};
const server = new mosca.Server(settings);

server.on("clientConnected", function (client) {
  console.log("client connected", client.id);
});

server.on("published", function (packet, client) {
  console.log("Published", packet.payload);
});

server.on("ready", setup);

// fired when the mqtt server is ready
function setup() {
  console.log("econsult mosca server is up and running");
}
