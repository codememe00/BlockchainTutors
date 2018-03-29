module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 5555,
      network_id: "*" // Match any network id
    },
    ropsten: {
      host: "localhost",
      port: 9238,
      network_id: "*"
    }
  }
};