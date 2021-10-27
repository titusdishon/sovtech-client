import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_A_PERSON } from "../utils/graphql";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import LoadingSpinner from "../utils/Loader";
import PersonIcon from "@mui/icons-material/Person";
import WcIcon from "@mui/icons-material/Wc";
import HeightIcon from "@mui/icons-material/Height";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import HomeIcon from "@mui/icons-material/Home";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  icon: {
    color: "#000000",
  },
});
type Props = {
  selectedUserName: string | null;
};
function DetailsPage({ selectedUserName }: Props) {
  const { loading, data } = useQuery(GET_A_PERSON, {
    variables: { searchKey: selectedUserName },
  });
  const classes = useStyles();
  const person = data?.getPerson;
  console.log("Data", data?.getPerson);
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {data ? (
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon className={classes.icon} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Name:" secondary={person?.name} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WcIcon className={classes.icon} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Gender:" secondary={person?.gender} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <HeightIcon className={classes.icon} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Height" secondary={person?.height} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MonitorWeightIcon className={classes.icon} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Mass" secondary={person?.mass} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <HomeIcon className={classes.icon} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Home world"
                  secondary={person?.homeworld}
                />
              </ListItem>
            </List>
          ) : (
            <>User details not found</>
          )}
        </>
      )}
    </>
  );
}

export default DetailsPage;
