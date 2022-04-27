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
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiYw0lNjPryXanS_CVcAo_AboRQVJ2nPLyw&usqp=CAU" width="50%" height="10%" alt="" />
            </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Welcome to FakeStore
          </Typography>
          <Link to="/products">
          <Button color="inherit" sx={{mr : 1}}>Products</Button>
          </Link>
          <Link to="/search">
          <Button color="inherit">Search Products</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
    </>)
}