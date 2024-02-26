import React, { useEffect } from 'react'
import AlignItemsList from '../../component/listItem/listitem'
import { useDispatch } from '../../store'
import { getClaimId, userGet } from '../../slices/claims'
import FormDialog from '../../component/modal/modal'
import BasicTable from '../../component/table/table'
import { Box } from '@mui/material'
// import BasicTable from '../../component/table/table'

export default function UserList() {
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(getClaimId())
    }, [])
    // useEffect(() => {
    //   dispatch(userGet("mojombo"))
    // }, [])ddsdsdsdasdasdasdassdasdsadasdasd
    // fsdfhsdfhsbdfsd
  return (
    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
      <Box sx={{display:"flex",justifyContent:"center",}}>
        <AlignItemsList/></Box>
        {/* <BasicTable/> */}
        <FormDialog/>
    </div>
  )
}
