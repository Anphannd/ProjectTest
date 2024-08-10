import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Img from '../assets/img/map.jpg';
import classNames from 'classnames/bind';
import styles from './Map.module.scss';
const cx = classNames.bind(styles);
const containerStyle = {
    width: '100%',
    height: '100vh',
    position: 'relative',
};

const center = {
    lat: 10.762622,
    lng: 106.660172,
};

const Map = () => {
    const [opacity, setOpacity] = useState(1);
    const handleOpacityChange = (value) => {
        setOpacity(value / 100);
    };

    return (
        <div>
            <LoadScript googleMapsApiKey="AIzaSyBa7UlmsSGVz7NA2HkBdfevTBiwIPP2mdY">
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
            </LoadScript>
            <div className={cx('GoogleMap')}>
                <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', opacity: opacity }}>
                    <img src={Img} alt="img" className={cx('img')} />
                </div>
            </div>
            <div className={cx('slider')}>
                <Slider min={0} max={100} defaultValue={100} onChange={handleOpacityChange} />
            </div>
        </div>
    );
};

export default React.memo(Map);
