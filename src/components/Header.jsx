import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

// можна зробити фыльтри і кнопку додати новий товар, нову опцію і тд
const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.secondary[300]}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
