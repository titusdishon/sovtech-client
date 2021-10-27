import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_PEOPLE } from "../utils/graphql";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Grow,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Person } from "./types";
import LoadingSpinner from "../utils/Loader";
import { makeStyles } from "@mui/styles";
import DetailsPage from "./DetailsPage";
import Dialog from "@mui/material/Dialog";

const useStyles = makeStyles({
  root: {
    padding: "40px",
  },
  snackBar: {
    width: "max-content",
    float: "right",
    marginTop: "20px",
  },
  footer: {
    width: "100%",
    textAlign: "center",
  },
  progress: {
    zIndex: 11,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: "1.4em",
  },
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    minHeight: 400,
    backgroundColor: "#ffffff",
    borderRadius: "5px",
    border: "none",
    pt: 2,
    px: 4,
    pb: 3,
  },
});
function People() {
  const [page, setPage] = useState<number>(1);
  const { loading, data } = useQuery(GET_ALL_PEOPLE, {
    variables: { page },
  });
  const [selectedUserName, setSelectedUserName] = useState<string | null>(null);
  const classes = useStyles();
  const [showModel, setShowModel] = useState(false);
  return (
    <Grid container>
      {loading && <LoadingSpinner />}
      <Grow in={true} mountOnEnter unmountOnExit>
        <div style={{ width: "100%", justifyContent: "center" }}>
          <h3 className="header">PEOPLES RECORDS</h3>
          {data?.getPersons.results ? (
            <>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <div className={classes.headerText}>Name</div>
                      </TableCell>
                      <TableCell>
                        <div className={classes.headerText}>Height</div>
                      </TableCell>
                      <TableCell>
                        <div className={classes.headerText}>Mass</div>
                      </TableCell>
                      <TableCell>
                        <div className={classes.headerText}>Gender</div>
                      </TableCell>
                      <TableCell>
                        <div className={classes.headerText}>Home World</div>
                      </TableCell>
                      <TableCell>
                        <div className={classes.headerText}>Action</div>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.getPersons?.results?.map((person: Person, key) => (
                      <TableRow key={key}>
                        <TableCell>{person.name}</TableCell>
                        <TableCell>{person.height}</TableCell>
                        <TableCell>{person.mass}</TableCell>
                        <TableCell>{person.gender}</TableCell>
                        <TableCell>{person.homeworld}</TableCell>
                        <TableCell>
                          <Button
                            onClick={() => {
                              setShowModel(!showModel);
                              setSelectedUserName(person?.name);
                            }}
                            color="secondary"
                            variant="contained"
                          >
                            view
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className={classes.snackBar}>
                <Pagination
                  count={Math.ceil(data?.getPersons?.count / 10)}
                  variant="outlined"
                  color="secondary"
                  page={page}
                  onChange={(id, page) => setPage(page)}
                />
              </div>
            </>
          ) : (
            !loading && <>No records found</>
          )}
        </div>
      </Grow>
      <Dialog
        open={showModel}
        fullWidth={true}
        maxWidth="sm"
        onClose={() => setShowModel(!showModel)}
      >
        <DialogTitle>PERSON'S DETAILS</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <DetailsPage selectedUserName={selectedUserName} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowModel(!showModel)} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default People;
