import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home/Home";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Toolbar } from "@mui/material";
import { theme } from "./Const/theme";
import MyAppBar from "./Component/MyAppBar";
import CarServicePage from "./Page/CarServicePage";
import SchedulePage from "./Page/SchedulePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import { Box } from "@mui/system";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <MyAppBar />
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="car" element={<CarServicePage />}></Route>
          <Route path="schedule" element={<SchedulePage />}></Route>
        </Routes>
        <Footer />
    </ThemeProvider>
  </BrowserRouter>
);

reportWebVitals();
