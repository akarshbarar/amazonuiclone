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
   
    useEffect(() => {
       

        db.ref("Amazon_Items").on('value',function(snap){
            let products = snap.val();
            let newProduct=[];

            for(let product in products){
                newProduct.push({
                    title:products[product].title,
                    description:products[product].description,
                    imageLink:products[product].imageLink,
                    rate:products[product].rate,
                    price:products[product].price,

                });

            }
            setData(newProduct);
        })
        

       
      }, []);


    return (
        <div className="home">
           <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
           
           {
               console.log(data.length)
           }
           <div className="home__row">
               
                {
                data.map((product)=>{
                    return (
                        <div>
                        <Product 
                                id="1"
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
