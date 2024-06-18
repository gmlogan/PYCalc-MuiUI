import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

export const Test = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Typography>Hello and away</Typography>
    </Box>
  );
};
