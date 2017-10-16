require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      network_id: "3",
      gasPrice: 40000000000
    },
    main: {
        host: "localhost",
        port: 8545,
        network_id: "1",
        gasPrice: 20000000000
    }
  }
};
