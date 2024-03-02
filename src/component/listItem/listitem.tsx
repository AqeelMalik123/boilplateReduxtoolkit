import * as React from 'react';

import Avatar from '@mui/material/Avatar';

import { useDispatch, useSelector } from '../../store';
import { modalFuc, userGet } from '../../slices/users';
import { Box, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

export default function AlignItemsList() {
  const dispatch = useDispatch();
  const { getclaimDataId } = useSelector((state) => state.claims);
  const [query, setQuery] = React.useState<string>('');
  const [filteredData, setFilteredData] = React.useState<any[]>([]);
  const [unfilteredData, setUnfilteredData] = React.useState<any[]>([]);
  const [searchTimeout, setSearchTimeout] = React.useState<NodeJS.Timeout | null>(null);

  // Update unfiltered data when getclaimDataId changes
  React.useEffect(() => {
    setUnfilteredData(getclaimDataId || []);
  }, [getclaimDataId]);

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
        // Filter data based on the query
        const filtered = unfilteredData.filter((item: any) =>
          item?.login?.toLowerCase().includes(value?.toLowerCase())
        ).slice(0, 10);
        // Update state with filtered data
        setFilteredData(filtered);
      }, 1000)
    );
  };

  return (
    <>
      <Box mt={2}>
        <Box sx={{ width: "100%" }}>
          <TextField fullWidth
          placeholder='search by Name'
            value={query}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 
                </InputAdornment>
              ),
            }}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ width: "50%", whiteSpace: "wrap" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Profile</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Github Profile</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ whiteSpace: "wrap" }}>
              {(query.length === 0 ? unfilteredData : filteredData)?.map((item: any) => {
                return (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 },'&:hover':{
                      backgroundColor:"lightgrey"
                    },cursor:"pointer" }}
                    // onClick={() => {
                    //   dispatch(userGet(item?.login));
                    //   dispatch(modalFuc(true));
                    // }}
                  >
                    <TableCell component="th" scope="row"   onClick={() => {
                      dispatch(userGet(item?.login));
                      dispatch(modalFuc(true));
                    }}>
                      <Avatar alt="Remy Sharp" src={item?.avatar_url} />
                    </TableCell>
                    <TableCell align="right">{item?.login}</TableCell>
                    <TableCell align="right">{item?.url}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}



