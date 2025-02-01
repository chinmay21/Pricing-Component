import "./Home.css";
const Home = () => {
    return(
        //Parent Container
        <div className="w-[100vw] h-[100vh] flex flex-col items-center pr-[300px] py-2"> 
            <p>Our Pricing</p>
                {/* Toggle button */}
                <div className="flex">
                 <p>Annually</p>
                 <div>
                 <input type="checkbox" id="checkbox"></input>
                 <label htmlFor="checkbox" className="w-[70px] h-[35px] bg-[#848AE6] block rounded-[200px] relative before:absolute before:w-[30px] before:h-[30px] before:bg-[#f6f6fe] before:rounded-full m-1 pt-0.5 toggle" ></label>
                 </div>
                 <p>Monthly</p>         
                </div> 
                <div>
                    {/* Basic Card */}    
                    <div>

                    </div>
                    {/* Professional Card */}
                    <div>

                    </div>
                    {/* Master Card */}
                    <div>

                    </div>
                </div>
        </div>
    )
}

export default Home