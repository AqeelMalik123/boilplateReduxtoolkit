import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from '../../store';
import { modalFuc, userGet } from '../../slices/claims';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
// import { modalFuc } from '../../slices/claims';
// import { modalFuc } from '../../slices/claims';

export default function FormDialog() {
  // const [open, setOpen] = React.useState(false);
  const {modalToggle,userData}=useSelector((state)=>state.claims)
  console.log(userData?.login,"userData")
const dispatch=useDispatch()
  const handleClickOpen = () => {
    // setOpen(true);
  dispatch(modalFuc(true))


  };

  const handleClose = () => {
    // setOpen(false);
    dispatch(modalFuc(false))

  };
React.useEffect(() => {

}, [userData])

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog
        open={modalToggle}
        onClose={handleClose}
        // PaperProps={{
        //   component: 'form',
        //   onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
        //     event.preventDefault();
        //     const formData = new FormData(event.currentTarget);
        //     const formJson = Object.fromEntries((formData as any).entries());
        //     const email = formJson.email;
        //     console.log(email);
        //     handleClose();
        //   },
        // }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        
            
            
            
      <ListItem alignItems="flex-start" onClick={()=>{
        //  dispatch(modalFuc(true))
        //  dispatch(userGet(item?.login))
      }}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={userData?.avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary=  {userData?.login}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              {`Followers ${userData?.followers}`}
              </Typography>
           
            </React.Fragment>
          }
        />
<Typography>{userData?.location}</Typography>
<Typography>Dsda</Typography>
<Typography>Dsda</Typography>
      </ListItem>
      <Divider variant="inset" component="li" />
       
    </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
