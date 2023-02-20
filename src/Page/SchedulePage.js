import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import MySheet from "../Component/SubComponent/MySheet";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#00FFFF",
  },
});
const SchedulePage = () => {
  const [name, setName] = useState("");
  const [serviceType, setServiceType] = useState("");
  return (
    <>
    <Box display='flex' justifyContent='center'>
    <MySheet width='40%' height='500px' subject='Please Schedual'>
      <Grid container sx={{width:{xs: '90%'}}}  spacing={4}>
        <Grid item xs={12}>
          <CssTextField
            id="demo-helper-text-misaligned-no-helper"
            label="Your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="simple-select-label">Service</InputLabel>
            <Select
              labelId="simple-select-label"
              value={serviceType}
              label="Service"
              onChange={(e) => {
                setServiceType(e.target.value);
              }}
            >
              <MenuItem sx={{ color: "primary.main" }} value={"Coding Service"}>
                Coding Service
              </MenuItem>
              <MenuItem
                sx={{ color: "primary.main" }}
                value={"Car Brake Service"}
              >
                Car Brake Service
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item columns={12}>
        <FormControl fullWidth>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox />}
              value="Web Design"
              label="Web Design"
              labelPlacement="start"
              sx={{
                "& span.MuiTypography-root": {
                  color: "black",
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              value="Coding Assistant"
              label="Coding Assistant"
              labelPlacement="start"
              sx={{
                "& span.MuiTypography-root": {
                  color: "black",
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              value="Hardware Replace/Update"
              label="Hardware Replace/Update"
              labelPlacement="start"
              sx={{
                "& span.MuiTypography-root": {
                  color: "black",
                },
              }}
            />
            
          </FormGroup>
        </FormControl>
        </Grid>
      </Grid>
      </MySheet>
      </Box>
    </>
  );
};

export default SchedulePage;
