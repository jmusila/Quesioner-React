module.exports = {
    get: () => {
      return Promise.resolve({
        data: [
          {
            id: 0,
            name: "go home now"
          },
          {
            id: 1,
            name: "do something at Andela"
          }
        ]
      });
    }
  };