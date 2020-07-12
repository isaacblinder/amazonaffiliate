import React, { useState } from 'react';
import './App.css';
import image01 from './american-flag.jpg'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Pagination from '@material-ui/lab/Pagination';

import RecipeCard from './RecipeCard'


var companies = [
  {"name": "360 Cookware", "href": "https://amzn.to/2BRJ2B3"},
  {"name": "50 Strong", "href": "https://amzn.to/2AVe5LO"},
  {"name": "Anne Clark Cookie Cutters", "href": "https://amzn.to/3eomncy"},
  {"name": "Weber Grills", "href": "https://amzn.to/2WaBvUE"},
  {"name": "Gibson Guitars", "href": "https://amzn.to/300Jftt"},
  {"name": "Wilson Footballs", "href": "https://amzn.to/38OfPCV"},
  {"name": "Chesapeake Bay Candles", "href": "https://amzn.to/38OfPCV"},
  {"name": "KitchenAid Mixers", "href": "https://amzn.to/301SVE7"},
  {"name": "Allen Edmonds Shoes", "href": "https://amzn.to/3gNBOwD"},
  {"name": "Aquasana Water Filters", "href": "https://amzn.to/3gP4qFJ"},
  {"name": "Crayola Crayons", "href": "https://amzn.to/304lDnZ"},
]

const colors = {
  redOne: "#d42729",
  redTwo: "#ff0000",
  blueOne: "#0157ae",
  blueTwo: "#000654",
  white: "#ffffff",
  background: "#e5e5e5"
}

function App() {
  var [page, setPage] = useState(1)
  console.log("page: ", page)
  return (
    <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background}}>
    <div style={{minWidth: 1366, maxWidth: 1366, backgroundColor: colors.background}}>
        <div 
        style={{
          display: 'flex',
          width: '100%', 
          height: 300, 
          backgroundImage: `url(${image01})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
          justifyContent: 'center'
        }}>
          <div style={{
            alignSelf: 'flex-end',
            justifyContent: 'center',
            width: '80%', 
            backgroundColor: colors.white,
            borderRadius: 5,
            margin: 10,
            overflow: 'hidden',
            padding: 10,
          }}>
          <p style={{
            paddingLeft: 15,
            fontSize: 21,
            fontWeight: '600'
          }}>
            Only Made in the USA
          </p>
          <p style={{
            fontSize: 17,
          }}>
            Our goal is to promote American businesses and brands, period. No self-promotion, no corporate BS. Search through the brands below to learn more and find the right one for you!
          </p>
          </div>
        </div>
        
        <div style={{fontSize: 27, fontFamily: 'Futura', marginBottom: 25, padding: 20, paddingLeft: 50}}>Certified American Made Brands</div>
        <div style={{display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', paddingBottom: 20}}>
        {companies.map((company, index) => {
          if (Math.ceil(index / 10) !== page) {
            return null
          }
          return (
          <div key={index} 
            style={{
              display: 'flex', 
              width: '40%', 
              borderBottom: '1px solid black',
              flexDirection: 'column', 
              alignItems: 'center', 
              padding: 20
            }}>
            <div style={{fontSize: 20, padding: 5}}>{company.name}</div>
            <a style={{fontSize: 20, fontFamily: 'Futura', textDecoration: 'none', color: colors.white, backgroundColor: colors.blueOne, padding: 7, borderRadius: 5}} href={company.href}>Shop Now on Amazon</a>
          </div>)
        })}
        </div>
        <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          
          <Pagination style={{marginTop: 70, marginBottom: 20}} count={Math.ceil(companies.length / 10)} color="primary" 
          onChange={(event, newValue) => {
            setPage(newValue)
          }}
          />
        </div>
      <BottomNavigation
      value={''}
      onChange={(event, newValue) => {
      }}
      showLabels
      style={{width: '100%', backgroundColor: colors.background}}
    >
      <BottomNavigationAction label="User Agreement" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Brands We Love" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
    </div>
    </div>
  );
}

export default App;
