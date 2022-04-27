import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"

export const Homepage = () => {
    return (<>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Link to="/">
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiYw0lNjPryXanS_CVcAo_AboRQVJ2nPLyw&usqp=CAU" width="50%" height="10%" alt="" />
            </div>
            </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Welcome to FakeStore
          </Typography>
          <Link to="/">
          <Button color="inherit" sx={{mr : 2}}>Home</Button>
          </Link>
          <Link to="/products">
          <Button color="inherit" sx={{mr : 2}}>Products</Button>
          </Link>
          <Link to="/search">
          <Button color="inherit">Search</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
    </>)
}