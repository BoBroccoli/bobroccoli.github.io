import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
  Snackbar,
  styled,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MySheet from "../Component/SubComponent/MySheet";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { ServiceCatArrays } from "../MenuGroup/ServiceCatArrays";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#3AA14F",
  },
});

const SchedulePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [serviceType, setServiceType] = useState("");
  useEffect(() => {
    setChipAdded([]);
    switch (serviceType) {
      case "Coding Service":
        setChipCandidate(ServiceCatArrays[0]);
        break;
      case "Car Brake Service":
        setChipCandidate(ServiceCatArrays[1]);
        break;
      default:
        break;
    }
  }, [serviceType]);
  const [chipCandidate, setChipCandidate] = useState([]);
  const [chipAdded, setChipAdded] = useState([]);
  const handleChipAdd = (chipToAdd) => () => {
    setChipCandidate((chips) =>
      chips.filter((chip) => chip.key !== chipToAdd.key)
    );
    setChipAdded([...chipAdded, chipToAdd]);
  };
  const handleChipDelete = (chipToDelete) => () => {
    setChipAdded((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
    setChipCandidate([...chipCandidate, chipToDelete]);
  };
  const handleReset = () => {
    setName("");
    setServiceType("");
    setChipCandidate([]);
    setChipAdded([]);
  };
  const handleSubmit = () => {
    setSnackbarOpen(true);
  };
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        paddingTop="60px"
        backgroundColor="#dcdcdc"
      >
        <MySheet
          sx={{ width: { xs: "80%", md: "40%" } }}
          subject="Schedule A Call"
        >
          <Grid container sx={{ width: { xs: "90%" } }} spacing={4}>
            <Grid item xs={12}>
              <CssTextField
                id="demo-helper-text-misaligned-no-helper"
                label="Your Name *"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                id="demo-helper-text-misaligned-no-helper"
                label="Your Email *"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="simple-select-label" color="secondary">
                  Service *
                </InputLabel>
                <Select
                  labelId="simple-select-label"
                  value={serviceType}
                  label="Service"
                  onChange={(e) => {
                    setServiceType(e.target.value);
                  }}
                >
                  <MenuItem
                    sx={{ color: "primary.main" }}
                    value={"Coding Service"}
                  >
                    Coding Service
                  </MenuItem>
                  <MenuItem
                    sx={{ color: "primary.main" }}
                    value={"Car Service"}
                  >
                    Car Service
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                {chipCandidate.map((item) => {
                  return (
                    <Grid key={item.key} item>
                      <Chip
                        key={item.key}
                        label={item.label}
                        onClick={handleChipAdd(item)}
                        icon={
                          <ControlPointIcon
                            sx={{ color: "#3AA14F!important" }}
                          />
                        }
                      ></Chip>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <MySheet
                  sx={{ width: { xs: "100%", md: "70%" } }}
                  height="wrap-content"
                  subject="Let's discuss"
                >
                  {chipAdded.map((item) => {
                    return (
                      <Grid key={item.key} item>
                        <Chip
                          key={item.key}
                          label={item.label}
                          onDelete={handleChipDelete(item)}
                        ></Chip>
                      </Grid>
                    );
                  })}
                </MySheet>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <ListItem sx={{ justifyContent: "center" }}>
                <Button variant="outlined" onClick={handleReset}>
                  <RestartAltIcon />
                  {"Reset"}
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleSubmit}
                  color="secondary"
                >
                  <ArrowUpwardIcon />
                  {"Submit"}
                </Button>
              </ListItem>
            </Grid>
          </Grid>
        </MySheet>
        {name !== "" &&
        serviceType !== "" &&
        email !== "" &&
        chipAdded.length > 0 ? (
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            sx={{
              "& .MuiSnackbarContent-root": {
                background: "#3AA14F",
              },
            }}
            open={snackbarOpen}
            autoHideDuration={2000}
            onClose={() => setSnackbarOpen(false)}
            message="Success Scheduled!"
          />
        ) : (
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            sx={{
              "& .MuiSnackbarContent-root": {
                background: '#D32F2F',
              },
            }}
            sever
            open={snackbarOpen}
            autoHideDuration={2000}
            onClose={() => setSnackbarOpen(false)}
            message="Please Fill All Reqired Fields!"
          />
        )}
      </Box>
    </>
  );
};

export default SchedulePage;
