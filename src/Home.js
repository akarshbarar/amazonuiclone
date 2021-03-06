import React,{useState,useEffect} from 'react'
import './Home.css';

import db from './firebase';

import Product from './Product';
import {addMessage} from './action'

import {useDispatch} from 'react-redux'

import {addAdmin} from './action'
function Home() {

   
    const dispatch=useDispatch();

    const [data, setData] = useState([]);

    // TODO : THIS WILL RUN ONLY ONCE WHEN HOME LOADS
    useEffect(() => {

        dispatch(
            addAdmin(null)
        )
        dispatch(addMessage(""));

        db.database().ref("Amazon_Items").on('value',(snap)=>{
           
            //? THIS WILL RETURN A ARRAY
           
            let products = snap.val();
            let newProduct=[];

            for(let product in products){
                newProduct.push(
                    {
                        title:products[product].title,
                        description:products[product].description,
                        imageLink:products[product].imageLink,
                        rate:products[product].rate,
                        price:products[product].price,

                    }
                );

            }
            setData(newProduct);
        })       
      }, []);


    
    return (
        <div className="home">
           <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
          
           <div className="home__row">
              {/* JSX JavaScript with XML */}      
                {
                    data.map((product)=>{
                        return (
                            <div>
                                
                            <Product 
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rate}
                                    image={product.imageLink} />


                            </div>
                        )
                    })
                }

           </div>
         
        </div>
    )
}

export default Home
