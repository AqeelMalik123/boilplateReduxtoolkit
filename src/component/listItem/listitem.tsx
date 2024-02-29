import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from '../../store';
import { modalFuc, userGet } from '../../slices/users';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

export default function AlignItemsList() {
  const dispatch=useDispatch()
    const {getclaimDataId}=useSelector((state)=>state.claims)
    const [query, setQuery] = React.useState<string>('');
    const [searchTimeout, setSearchTimeout] = React.useState<NodeJS.Timeout | null>(null);

    const handleSearchChange = (value: string) => {
      setQuery(value);
  
      // Clear previous timeout
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
  
      // Set new timeout
      setSearchTimeout(
        setTimeout(() => {
          // Perform search action after 1 second of inactivity
          console.log("Performing search...");
          // Add your search action here
        }, 1000)
      );
    };
  
    // // Function to debounce search
    // const debounce = (func: Function, delay: number) => {
    //   let timeoutId: NodeJS.Timeout;
    //   return (...args: any[]) => {
    //     clearTimeout(timeoutId);
    //     timeoutId = setTimeout(() => {
    //       func(...args);
    //     }, delay);
    //   };
    // };
  
    // // Function to handle search with debounce
    // const delayedSearch = debounce((searchQuery: string) => {
    //   setQuery(searchQuery);
    // }, 1000);
  
    // Filter data based on the query
    const filteredData = getclaimDataId?.filter((item:any) => item?.login?.toLowerCase().includes(query?.toLowerCase())).slice(0, 10);
  
  return (
    <>
    <Box mt={2}>
    <Box sx={{width:"100%",}}>    
    <TextField fullWidth
            value={query}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
    </Box>
    <TableContainer component={Paper}>
    <Table sx={{ width:"50%",whiteSpace:"wrap"}} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Profile</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Github Profile</TableCell>
          {/* <TableCell align="right">Following</TableCell>
          <TableCell align="right">Location</TableCell> */}
         
        </TableRow>
      </TableHead>
      <TableBody sx={{whiteSpace:"wrap"}}>
      {filteredData?.map((item:any)=>{
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
