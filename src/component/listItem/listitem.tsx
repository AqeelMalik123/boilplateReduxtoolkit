import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from '../../store';
import { modalFuc, userGet } from '../../slices/claims';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

export default function AlignItemsList() {
  const dispatch=useDispatch()
    const {getclaimDataId}=useSelector((state)=>state.claims)
    console.log(getclaimDataId,"getclaimDataId")
    const data=getclaimDataId.slice(1,10)
    const [query,setQuery]=React.useState('')
  return (
    <>
    <Box mt={2}>
    <Box> <TextField fullWidth />
    </Box>
    <TableContainer component={Paper}>
    <Table sx={{ width:"50%"}} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Profile</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Location</TableCell>
          {/* <TableCell align="right">Following</TableCell>
          <TableCell align="right">Location</TableCell> */}
         
        </TableRow>
      </TableHead>
      <TableBody>
      {data?.map((item:any)=>{
        return(<>
            <TableRow
          //   key={row.name}
          
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            onClick={()=>{
              dispatch(userGet(item?.login))
              dispatch(modalFuc(true))
            }}
          >
            <TableCell component="th" scope="row">
            <Avatar alt="Remy Sharp" src={item?.avatar_url} />
            </TableCell>
            <TableCell align="right">{item?.login}</TableCell>
            <TableCell align="right">{item?.url}</TableCell>
            {/* <TableCell align="right">{item?.followers}</TableCell>
            <TableCell align="right">{item?.following}</TableCell> */}
          </TableRow>
        </>)
      })}
      
      
      </TableBody>
    </Table>
  </TableContainer>
  </Box>
  </>
  );
}
