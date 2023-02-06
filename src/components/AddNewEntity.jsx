import Header from "components/Header";
import {
  Box,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import FlexBetween from "components/FlexBetween";
import BasicModal from "components/Modal";
import { PrimaryButton } from "components/Buttons";
import { useLocation } from "react-router-dom";

const titleModal = "Leave page?";
const descriptionModal =
  "If you leave the page, the changes will not be saved!";

const AddNewEntity = ({ inputs, title, subTitle, onSubmitMethod }) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [state, setState] = useState({});
  const location = useLocation();
  const onInputsChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onPhotoChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
  };

  const onSubmitState = (e) => {
    e.preventDefault();
    onSubmitMethod(state);
    setState({});
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title={title} subTitle={subTitle} />
      <Box
        component="form"
        onSubmit={onSubmitState}
        encType="multipart/form-data"
        sx={{
          padding: "20px",
          margin: "20px",
          backgroundColor: theme.palette.background.alt,
          backgroundImage: "none",
          borderRadius: "0.55rem",
        }}
      >
        <FlexBetween mb="20px">
          <Typography
            variant="h2"
            color={theme.palette.secondary[100]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
          >
            {subTitle}
          </Typography>
        </FlexBetween>
        {inputs.map(
          ({
            label,
            type,
            isMultiline,
            isFullWidth,
            isRequired,
            name,
            choices,
          }) =>
            type === "select" ? (
              <Select
                key={label}
                fullWidth={isFullWidth ? true : false}
                style={{ margin: "5px" }}
                label={label}
                name={name}
                onChange={onInputsChange}
              >
                {choices && choices.map((choice) => (
                  <MenuItem value={choice}>{choice}</MenuItem>
                ))}
              </Select>
            ) :
             (
              <TextField
                onChange={type !== "file" ? onInputsChange : onPhotoChange}
                name={name}
                key={label}
                fullWidth={isFullWidth}
                style={{ margin: "5px" }}
                type={type}
                label={label}
                variant="outlined"
                multiline={isMultiline}
                required={isRequired}
              />
            )
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <PrimaryButton
            text="Cancel"
            onHandleClick={handleOpen}
            style={{ marginRight: "20px" }}
          />
          <PrimaryButton text="Save" onHandleClick={onSubmitState} />
        </Box>
      </Box>
      {isOpen && (
        <BasicModal
          isOpen={isOpen}
          handleClose={handleClose}
          title={titleModal}
          description={descriptionModal}
          link={`/${location.pathname.split("/")[1]}`}
        />
      )}
    </Box>
  );
};

export default AddNewEntity;
