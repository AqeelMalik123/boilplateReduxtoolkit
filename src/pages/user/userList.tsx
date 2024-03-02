import React, { useEffect } from 'react'
import AlignItemsList from '../../component/listItem/listitem'
import { useDispatch, useSelector } from '../../store'
import {   userlist } from '../../slices/users'

import { Box, Typography } from '@mui/material'
import UserDialog from '../../component/modal/modal'
import CircularIndeterminate from '../../component/circularProgress/circleProgress'


export default function UserList() {
  const {getuserLoading}=useSelector((state)=>state.users)
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(userlist())
    }, [])
    
  return (
    <div style={{display:"flex",justifyContent:"center",padding:"15px 0px 0px 0px",backgroundColor:"#eefcfc"}}>
      <Box sx={{width:"40%"}}>
   
        <AlignItemsList/></Box>
       
        <UserDialog/>
    </div>
  )
}
