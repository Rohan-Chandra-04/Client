
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './addProducts.css';

export default function AddProduct() {
  return (
    <div className='container'>

        <div className='inputForm'>
            <div className="header-addProducts">
                <h1>Add Product</h1>
            </div>

            <div className="productInput">
                <Box sx={{ width: 500, maxWidth: '100%', padding:'15px'}}>
                  <TextField fullWidth label="Product Name" id="fullWidth" />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', padding:'15px'}}>
                <TextField fullWidth label="Product Category" id="fullWidth" />
                </Box>

                <div className='imageInput'>
                    <label for="movie" >Choose an image to upload:</label>

                    <input type="file" id="productImage" name="imageFile" accept="image/png, image/jpeg" />
                </div>
            </div>

        </div>
    </div>
  );
}
