import {
  Box,
  List,
  ListItem,
  Divider,
  ListSubheader,
  Grid,Typography
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
           
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
        <ListItem>  <Grid container spacing={2}>
                <Grid item xs={5}>
                  Boat Class 
                </Grid>
                <Grid item xs={3}>
                 <Typography align="left">PY</Typography>
                </Grid>
                <Grid item xs={4}>
                  Finish Time
                </Grid>
              </Grid> </ListItem>
        </List>
    
    
    </Box>
      <Box>
        <List
          sx={{
            width: "100%",
            position: "relative",
            overflow: "auto",
            maxHeight: "100vh",
            paddingTop: 0,
            paddingBottom: 0}}>
        
          <Divider />
          {testItems.map((item) => (
            <>
              <ListItem key={item}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      D Zero
                    </Grid> 
                    <Grid item xs={3}>
                                       <Typography align="left">1101</Typography>
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


