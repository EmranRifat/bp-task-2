import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    return (
        <div className='pb -12'>
           <h1 className='text-2xl font-bold'>Where you’ll be</h1> 

<div className="pt-8" style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>

    </div>
<h1 className='text-2xl font-bold my-6'>Valencia, Spain</h1>
<h1>
In the center , next to the historic Cathedral, Garden tambén building on the river , and close to the beach. ideal for rest and go out and enjoy without having to move location. 
</h1>
       <Link to="/comingsoon" className=" underline font-semibold py-4">Show More</Link>    
 </div>
    );
};

export default Map;