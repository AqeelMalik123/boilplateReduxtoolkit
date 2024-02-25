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

export default function AlignItemsList() {
  const dispatch=useDispatch()
    const {getclaimDataId}=useSelector((state)=>state.claims)
    console.log(getclaimDataId,"getclaimDataId")
    const data=getclaimDataId.slice(1,5)
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {data?.map((item:any)=>{
            return(<>
            
            
            
      <ListItem alignItems="flex-start" onClick={()=>{
         dispatch(modalFuc(true))
         dispatch(userGet(item?.login))
      }}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={item?.avatar_url} />
        </ListItemAvatar>
        <ListItemText
          // primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              {item?.login}
              </Typography>
              {/* {" — I'll be in your neighborhood doing errands this…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
            </>)
        })}
   
    </List>
  );
}
