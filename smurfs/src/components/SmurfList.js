import React, { useContext } from 'react';
import SmurfContext from '../contexts/SmurfContext';
import SmurfCard from '../components/SmurfCard';

const SmurfList = () => {
const { smurf } = useContext(SmurfContext);
    return (
        <div>
            <img className='logo' src={require('../img/01.png')} width='200px' alt='logo'/>
            <div className='card-deck'>
                {smurf.map(item =>
                    <SmurfCard
                    key={item.id}
                    name={item.name}
                    age={item.age}
                    height={item.height}
                    />
                )}
            </div>
        </div>
    );
}
export default SmurfList;
