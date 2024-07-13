import { Box, Grid, TextField, Typography } from "@mui/material"

const CreateForm=()=>{

    return(
      <>
      
       <Grid container sx={{backgroundColor:"pink"}}>
      

            <Grid item xs={12} md={6}>
                <Box>

                   <Typography sx={{ fontfamily:' Questrial',
fontSize: "32px",
fontWeight: "400",
lineHeight: "39.84px",
textAlign: "left"}} >
                    Join Our Job Portal
                   </Typography>
                   <Typography sx={{ fontfamily:' Questrial',
fontSize: "14px",
fontWeight: "400",
lineHeight: "21.35px",
}} >

                     job Seeker apply, Employers post ,search,manage
                   </Typography>
                   <Box>
                   <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                   </Box>
                </Box>

           
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>

                  <img src="/login.png"/>
                  <Typography>
                  Here, you can find the right fit for your career or hire talent that fits your company's requirements.
                  </Typography>

              </Box>

            </Grid>
       

       </Grid>
      </>
    )
}
export default CreateForm