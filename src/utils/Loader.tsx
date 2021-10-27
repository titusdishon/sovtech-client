import React from "react";
import {Box, CircularProgress, Slide, Snackbar} from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "#3a3a3a50",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  progress: {
    zIndex: 11,
  },
});
interface LoaderProps {
  color?: "primary" | "secondary";
}
const LoadingSpinner: React.FC<LoaderProps> = ({
  color = "secondary",
}: LoaderProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CircularProgress color={color} />
    </Box>
  );
};

LoadingSpinner.defaultProps = {
  color: "secondary",
};

interface RefreshingCardProps {
  message?: string;
}

export const RefreshingCard: React.FC<RefreshingCardProps> = ({
  message,
}: RefreshingCardProps) => (
  <Snackbar
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    open
    autoHideDuration={6000}
    TransitionComponent={Slide}
    onClose={() => {}}
    message={message}
  />
);

RefreshingCard.defaultProps = {
  message: "Refreshing ...",
};

export default LoadingSpinner;
