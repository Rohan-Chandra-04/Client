
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import './shop.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function ProductCard() {
    return (
        <div className="product-card">
            <image src="" alt="Avatar" style={{width:"100%"}} />
            <div className="productInfo">
                <h4><b>Product Name</b></h4> 
                <p>Category</p>
                <p>Quantity</p>
                <Comment />
            </div>
        </div>
    );
}

function Comment(){
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Comment</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Comment on Product
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Eat 5star, do nothing!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default function Shop() {
  const [rating, setRating] = React.useState(2);

  return (

    <>
        <div className='container-shop'>
            <div className='header-shop'>
                <div>
                    <image alt='some image' />
                </div>
                <div style={{width: '50%'}}>
                    <h1>Shop Name</h1>
                    <p>Location</p>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Box sx={{'& > legend': { mt: 2 },}}>
                        <Typography component="legend">Rating:</Typography>
                        <Rating name="simple-controlled" value={rating}/>
                      </Box>

                      <Button style={{backgroundColor: 'lightblue', color: 'white', height: '50px', marginTop:'1.5rem'}}>Chat</Button>
                    </div>
                </div>
            </div>

            <div className='productList'>
                <ProductCard />
            </div>

        </div>
        
    </>
    
  );
}