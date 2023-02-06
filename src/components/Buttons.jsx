import { AddOutlined } from "@mui/icons-material";
import { Box, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export const PrimaryButton = ({ text, onHandleClick, ...props }) => {
  const theme = useTheme();
  return (
    <Button
      onClick={onHandleClick}
      sx={{
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.background.alt,
        fontSize: "14px",
        fontWeight: "bold",
        padding: "10px 20px",
        "&:hover": { color: theme.palette.neutral.main },
      }}
      {...props}
    >
      {text}
    </Button>
  );
};

export const AddButton = ({to, text}) => {
  const theme = useTheme();
  return (
    <Box>
          <Link
            to={to}
            style={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              textDecoration: "none",
              "&:hover": { color: theme.palette.neutral.main },
            }}
          >
            <AddOutlined sx={{ mr: "10px" }} />
            {text}
          </Link>
        </Box>
  )
}
