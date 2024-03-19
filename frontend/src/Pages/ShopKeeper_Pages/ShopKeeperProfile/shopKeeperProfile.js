import {useState} from 'react';
import './shopKeeperProfile.css';

export default function ShopKeeperProfile() {

    const [shopkeeperName, setShopkeeperName] = useState('name of sk')
    const [shopkeeperEmail, setShopkeeperEmail] = useState('email of sk')
    const [shopkeeperPhone, setShopkeeperPhone] = useState('phone of sk')
    const [shopkeeperAge, setShopkeeperAge] = useState(25)
    const [numberOfShops, setNumberOfShops] = useState(1)
    const [enableForm, setEnableForm] = useState(true)

    const editTheForm = () => {
        setEnableForm(false)
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        setEnableForm(true)
    }

    return (
        <div className="shopkeeperprofile-container">
            <div className='header-shopkeeper-profile'>
                <div className="shopkeeper-profile-button">
                    Home
                </div>
                <div style={{fontSize: '3rem'}}>
                    Your Profile
                </div>
                <div className='shopkeeper-profile-button'>
                    Logout
                </div>
            </div>

            <div className='shopkeeper-profile-form' disabled={enableForm} onSubmit={handlesubmit}>
                <div className='shopkeeper-profile-input'>
                    <label htmlFor="name" >Name: </label>
                    <input style={{borderRadius:'0.5rem', height: '100%'}}  disabled={enableForm} type="text" id="name" name="name" value={shopkeeperName} onChange={(e) => setShopkeeperName(e.target.value)} />
                </div>
                <div className='shopkeeper-profile-input'>
                    <label htmlFor="email">Email: </label>
                    <input style={{borderRadius:'0.5rem', height: '100%'}} disabled={enableForm} type="text" id="email" name="email" value={shopkeeperEmail} onChange={(e) => setShopkeeperEmail(e.target.value)} />
                </div>
                <div className='shopkeeper-profile-input'>
                    <label htmlFor="phone">Phone: </label>
                    <input style={{borderRadius:'0.5rem', height: '100%'}} disabled={enableForm} type="text" id="phone" name="phone" value={shopkeeperPhone} onChange={(e) => setShopkeeperPhone(e.target.value)} />
                </div>
                <div className='shopkeeper-profile-input'>
                    <label htmlFor="age">Age: </label>
                    <input style={{borderRadius:'0.5rem', height: '100%'}} disabled={enableForm} type="text" id="age" name="age" value={shopkeeperAge} onChange={(e) => setShopkeeperAge(e.target.value)} />
                </div>
                <div className='shopkeeper-profile-input'>
                    <label htmlFor="shops">Number of Shops: </label>
                    <input style={{borderRadius:'0.5rem', height: '100%'}} disabled={enableForm} type="text" id="shops" name="shops" value={numberOfShops} onChange={(e) => setNumberOfShops(e.target.value)} />
                </div>
                {enableForm?<button style={{backgroundColor: 'blue', color:'white', padding:'0.5rem', fontSize: '1rem'}} onClick={editTheForm}>Edit</button>:
                <div style={{display: 'flex', displayDirection:'row', justifyContent:'space-between'}}>
                    <button style={{backgroundColor: 'blue', color:'white', padding:'0.5rem', fontSize: '1rem'}} type="submit">Submit</button>
                    <button style={{backgroundColor: 'red', color:'white', padding:'0.5rem', fontSize: '1rem'}} onClick={() => setEnableForm(true)}>Cancel</button>
                </div>}
            </div>
        </div>
    )
}