import React, { useEffect } from 'react'
import AlignItemsList from '../../component/listItem/listitem'
import { useDispatch } from '../../store'
import { getClaimId, userGet } from '../../slices/claims'
import FormDialog from '../../component/modal/modal'

export default function UserList() {
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(getClaimId())
    }, [])
    // useEffect(() => {
    //   dispatch(userGet("mojombo"))
    // }, [])
    
  return (
    <div>
        <AlignItemsList/>
        <FormDialog/>
    </div>
  )
}
