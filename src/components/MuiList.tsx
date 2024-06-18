import {
  Box,
  List,
  ListItem,
  Divider,
  ListSubheader,
  Grid,
} from "@mui/material";

export const MuiList = () => {
  const testItems = [...Array(100).keys()];
  return (
    <>
      <Box>
        <List
          sx={{
            width: "100%",
            position: "relative",
            overflow: "auto",
            maxHeight: "100vh",
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <ListSubheader key="a1">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  Class
                </Grid>
                <Grid item xs={3}>
                  PY Num
                </Grid>
                <Grid item xs={4}>
                  Finish Time
                </Grid>
              </Grid>
            </Box>
          </ListSubheader>
          <Divider />
          {testItems.map((item) => (
            <>
              <ListItem key={item}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      D Zero
                    </Grid>
                    <Grid item xs={2}>
                      1011
                    </Grid>
                    <Grid item xs={4}>
                      HH:mm:ss
                    </Grid>
                  </Grid>
                </Box>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Box>
    </>
  );
};
