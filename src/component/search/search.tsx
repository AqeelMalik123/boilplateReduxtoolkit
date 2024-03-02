import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

export default function Search({handleSearchChange,query}:any) {
  return (
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
  )
}
