/*
import React from "react";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
*/

import React from "react";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  const ReactRedux = require("react-redux");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    // this is apparently broken: https://github.com/welldone-software/why-did-you-render/issues/85
    trackExtraHooks: [[ReactRedux, "useSelector"]],
  });
}
