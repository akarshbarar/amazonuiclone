import React,{useState,useEffect} from 'react'
import './Home.css';

import db from './firebase'
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Product from './Product';


function Home() {


    const [data, setData] = useState([]);
    var x=[];
    db.ref("Amazon_Items").once("value").then(function(datas){
        console.log(datas.val())


        const iterate = (obj) => {
         Object.keys(obj).forEach(key => {
     
     

        
         if (typeof obj[key] === 'object') {
                 iterate(obj[key])
                 x.push(obj[key]);
                 setData(x);
             }
         })
     }

     iterate(datas.val());
       
    });

    useEffect(() => {
       

       
      }, []);


    return (
        <div className="home">
           <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
           
           <div className="home__row">

{
    console.log("X>>>>>>>>>",x)
}

            {    
            data.map(({title,description,imageLink,rate})=>(

                <Product
                    id={rate}
                    title={title}
                    price={description}
                    image={imageLink}

                />

            ))
            }
                        {/* <Product 
                id="1"
                title="jkbkjbjbjknkjf"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/81jCu7gcj9L._AC_UL320_.jpg"/>


            <Product 
                id="1"
                title="fffffff"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/81jCu7gcj9L._AC_UL320_.jpg"/> */}

           </div>

           {/* <div className="home__row">

            <Product 
                id="1"
                title="jkbkjbjbjknkjf"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/81jCu7gcj9L._AC_UL320_.jpg"/>


            <Product 
                id="1"
                title="fffffff"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/81jCu7gcj9L._AC_UL320_.jpg"/>

            <Product 
                id="1"
                title="fffffff"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/81jCu7gcj9L._AC_UL320_.jpg"/>

            </div>

            <div className="home__row">

                <Product 
                    id="1"
                    title="jkbkjbjbjknkjf"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81jCu7gcj9L._AC_UL320_.jpg"/>


                
                </div> */}
          
         
        </div>
    )
}

export default Home
