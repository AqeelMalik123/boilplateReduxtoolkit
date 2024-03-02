import React, { useEffect } from 'react'
import AlignItemsList from '../../component/listItem/listitem'
import { useDispatch, useSelector } from '../../store'
import {   userlist } from '../../slices/users'

import { Box } from '@mui/material'
import UserDialog from '../../component/modal/modal'
import CircularIndeterminate from '../../component/circularProgress/circleProgress'


export default function UserList() {
  const {getuserLoading}=useSelector((state)=>state.users)
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(userlist())
    }, [])
    
  return (
    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
      <Box sx={{display:"flex",justifyContent:"center",}}>
    
        <AlignItemsList/></Box>
       
        <UserDialog/>
    </div>
  )
}
