const { HomePage } = require("./api/indexPage");

const router = require("express").Router();

router.use("/", HomePage);

module.exports = {
  allRouter: router,
};
