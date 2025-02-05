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
                    <div className="w-[350px] h-[450px] bg-[#FFFFFF] rounded-xl mt-[25px]">
                      <p className="text-[#B3B5C6] font-bold text-lg pt-8">Basic</p>
                      <p className="text-[70px] text-[#494C5F] font-bold pb-4"><span className="text-[40px] bottom-2 relative">$</span>{basicPrice}</p>
                      <div className="w-[85%] h-[1.5px] bg-[#b3B5C6] ml-[30px]"></div>
                      <p className="text-[#B3B5C6] font-bold py-3">500 GB Storage</p>  
                      <div className="w-[85%] h-[1.5px] bg-[#b3B5C6] ml-[30px]"></div>
                      <p className="text-[#B3B5C6] font-bold py-3">2 Users Allowed</p>
                      <div className="w-[85%] h-[1.5px] bg-[#b3B5C6] ml-[30px]"></div>
                      <p className="text-[#B3B5C6] font-bold py-3">Send up to 3 GB</p>
                      <div className="w-[85%] h-[1.5px] bg-[#b3B5C6] ml-[30px]"></div>
                      <button>LEARN MORE</button>
                    </div>
                    {/* Professional Card */}
                    <div className="w-[380px] h-[500px] bg-gradient-to-b from-[#9b90ff] to-[#8689E2] rounded-xl pt-[22px]">
                        <div>
                        <p className="text-[#FFFFFF] font-bold text-lg pt-8">Professional</p>
                        <p className="text-[70px] text-[#FFFFFF] font-bold pb-4"><span className="text-[40px] bottom-2 relative">$</span>{professionalPrice}</p>
                        <div className="w-[85%] h-[1.5px] bg-[#b3B5C6] ml-[30px]"></div>
                        <p  className="text-[#FFFFFF] font-bold py-3">1 TB Storage</p>  
                        <div className="w-[85%] h-[1.5px] bg-[#b3B5C6] ml-[30px]"></div>
                        <p  className="text-[#FFFFFF] font-bold py-3">5 Users Allowed</p>
                        <div className="w-[85%] h-[1.5px] bg-[#b3B5C6] ml-[30px]"></div>
                        <p  className="text-[#FFFFFF] font-bold py-3">Send up to 10 GB</p>
                        <div className="w-[85%] h-[1.5px] bg-[#b3B5C6] ml-[30px]"></div>
                        <button>LEARN MORE</button>
                        </div>
                    </div>
                    {/* Master Card */}
                    <div className="w-[350px] h-[450px] bg-[#FFFFFF] rounded-xl mt-[25px]">
                        <div>
                        <p className="text-[#B3B5C6] font-bold text-lg pt-8">Master</p>
                        <p className="text-[70px] text-[#494C5F] font-bold pb-4"><span className="text-[40px] bottom-2 relative">$</span>{masterPrice}</p>
                        <div className="w-[85%] h-[1.5px] bg-[#b3B5C6] ml-[30px]"></div>
                        <p className="text-[#B3B5C6] font-bold py-3">2 TB Storage</p>  
                        <div className="w-[85%] h-[1.5px] bg-[#b3B5C6] ml-[30px]"></div>
                        <p className="text-[#B3B5C6] font-bold py-3">10 Users Allowed</p>
                        <div className="w-[85%] h-[1.5px] bg-[#b3B5C6] ml-[30px]"></div>
                        <p className="text-[#B3B5C6] font-bold py-3">Send up to 20 GB</p>
                        <div className="w-[85%] h-[1.5px] bg-[#b3B5C6] ml-[30px]"></div>
                        <button>LEARN MORE</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Home