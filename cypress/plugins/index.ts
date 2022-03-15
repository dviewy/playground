import { config } from "dotenv";
config();

const { HOST, PORT } = process.env;

export default (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) => {
  config.env = {
    BASE_HOST: `http://${HOST}:${PORT}`,
  };

  return config;
};
