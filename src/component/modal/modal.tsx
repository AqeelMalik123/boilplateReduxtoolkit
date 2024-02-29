import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from '../../store';
import { modalFuc, userGet } from '../../slices/users';
// import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import UserListItem from '../table/table';
// import { modalFuc } from '../../slices/claims';
// import { modalFuc } from '../../slices/claims';

export default function FormDialog() {
  // const [open, setOpen] = React.useState(false);
  const {modalToggle,userData}=useSelector((state)=>state.claims)

const dispatch=useDispatch()
  const handleClickOpen = () => {
    // setOpen(true);
  dispatch(modalFuc(true))
  };

  const handleClose = () => {
    // setOpen(false);
    dispatch(modalFuc(false))

  };
// React.useEffect(() => {

// }, [userData])

  return (
    <React.Fragment>

      <Dialog
        open={modalToggle}
        onClose={handleClose}
      
      >
      
        <DialogContent sx={{padding:"0px"}}>
    
    <UserListItem/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
      
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
