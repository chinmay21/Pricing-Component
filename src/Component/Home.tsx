import "./Home.css";
import { ChangeEvent, useState } from "react";
const Home = () => {
    
    const [basicPrice, setBasicPrice] = useState(19.99);
    const [professionalPrice, setProfessionalPrice] = useState(24.99);
    const [masterPrice, setMasterPrice] = useState(39.99);

    function clickHandler(event:ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        if(target.checked) {
           setBasicPrice(199.99);
           setProfessionalPrice(249.99);
           setMasterPrice(399.99);
        }
        else{
            setBasicPrice(19.99);
            setProfessionalPrice(24.99);
            setMasterPrice(39.99);  
        }
    }

    return(
        //Parent Container
        <div className="w-[100vw] h-[100vh] flex flex-col items-center pr-[300px] py-2"> 
            <p className="font-bold text-3xl text-[#6d708d] pb-5">Our Pricing</p>
                {/* Toggle button */}
                <div className="flex justify-center items-center gap-x-5">
                 <p className="font-bold">Annually</p>
                 <div>
                 <input onChange={clickHandler} type="checkbox" id="checkbox"></input>
                 <label htmlFor="checkbox" className="w-[70px] h-[35px] bg-[#848AE6] block rounded-[200px] relative before:absolute before:w-[30px] before:h-[30px] before:bg-[#f6f6fe] before:rounded-full m-1 pt-0.5 toggle" ></label>
                 </div>
                 <p className="font-bold">Monthly</p>         
                </div> 
                {/* Cards Parent Conatiner */}
                <div className="flex mt-[50px]">
                    {/* Basic Card */}    
                    <div className="w-[450px] h-[400px] bg-[#FFFFFF] rounded-xl mt-[50px]">
                      <p className="text-[#B3B5C6] font-bold text-lg pt-8">Basic</p>
                      <p><span>$</span>{basicPrice}</p>
                      <div></div>
                      <p>500 GB Storage</p>  
                      <div></div>
                      <p>2 Users Allowed</p>
                      <div></div>
                      <p>Send up to 3 GB</p>
                      <div></div>
                      <button>LEARN MORE</button>
                    </div>
                    {/* Professional Card */}
                    <div className="w-[450px] h-[500px] bg-[#9ea3ee] rounded-xl">
                        <div>
                        <p>Professional</p>
                        <p><span>$</span>{professionalPrice}</p>
                        <div></div>
                        <p>1 TB Storage</p>  
                        <div></div>
                        <p>5 Users Allowed</p>
                        <div></div>
                        <p>Send up to 10 GB</p>
                        <div></div>
                        <button>LEARN MORE</button>
                        </div>
                    </div>
                    {/* Master Card */}
                    <div className="w-[450px] h-[400px] bg-[#FFFFFF] rounded-xl mt-[50px]">
                        <div>
                        <p>Master</p>
                        <p><span>$</span>{masterPrice}</p>
                        <div></div>
                        <p>2 TB Storage</p>  
                        <div></div>
                        <p>10 Users Allowed</p>
                        <div></div>
                        <p>Send up to 20 GB</p>
                        <div></div>
                        <button>LEARN MORE</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Home