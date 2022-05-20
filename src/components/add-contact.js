import React from 'react';
import {
    Button,
    TextField
} from '@mui/material';

const AddContact = () => {
  return (
    <div>
        <h2 className='text-lg font-bold my-3'>Add Contact</h2>
        <form className='w-300 h-500'>
            <div>
                {/* <label>Name</label> */}
                <div>  <TextField sx={{height: 'auto', width: '300px'}} id="outlined-basic" label="Name" variant="outlined" /></div>
            </div>
            <div>
                {/* <label>Email</label> */}
                <div className='py-2'>
                    <TextField sx={{height: 'auto', width: '300px'}} id="outlined-basic" label="Email" variant="outlined" />
                </div>
            </div>
            <Button variant="contained">Submit</Button>
        </form>
    </div>
  )
}

export default AddContact