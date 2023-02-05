import detect from "detect-port";
require("dotenv").config();

export const backendPort = process.env.PORT || 3001;

export const getBackendPort = async () => {
  return detect(Number(backendPort))
    .then((_port) => {
      if (Number(backendPort) === _port) {
        console.log(
          `Backend server running at ${process.env.REACT_APP_BACKEND_URL}:${backendPort}`
        );
        return Number(backendPort);
      }

      console.log(
        `Failed to start the backend server on port ${backendPort}. \n Starting the backend server on port ${_port}. \n Please update REACT_APP_BACKEND_PORT in the .env file and 'apiUrl' in cypress.json to ${_port}.`
      );
      return _port;
    })
    .catch((err) => {
      console.log(err);
    });
};
