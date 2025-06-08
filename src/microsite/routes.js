"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrositeRoutes = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const MicrositeLayout_1 = require("./components/MicrositeLayout");
const Home_1 = require("./pages/Home");
const Processes_1 = require("./pages/Processes");
const FAQ_1 = require("./pages/FAQ");
const MicrositeRoutes = () => {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(MicrositeLayout_1.MicrositeLayout, {}), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(Home_1.HomePage, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "processes", element: (0, jsx_runtime_1.jsx)(Processes_1.ProcessesPage, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "faq", element: (0, jsx_runtime_1.jsx)(FAQ_1.FAQPage, {}) })] }) }));
};
exports.MicrositeRoutes = MicrositeRoutes;
