import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import brijesh from './brijesh.jpg'
import doll from './github_octocat.png'
function FlipApp()
{
useEffect(()=>{
Aos.init({
duration:1000,
// once:true
repeat:true

});
},[])

return (
<>
<div className="doll">
    <img src={doll} />
</div>
<div className="clearfix"></div>
<div className="myapp">
<h1 align='center'>Flip the photo</h1>
<h2 align="center">↡</h2>
</div>
<div className="gallery-app" data-aos="flip-left">
<img src={brijesh} alt="brij" />
</div>


<div className="gallery-app"  data-aos="fade-up"
     data-aos-duration="5000">
<img src={brijesh} alt="brij" />
</div>

<div className="gallery-app" data-aos="zoom-in-down">
<img src={brijesh} alt="brij" />
</div>


<div className="gallery-app" data-aos="zoom-in-up">
<img src={brijesh} alt="brij" />
</div>


<div className="gallery-app" data-aos="zoom-in" data-aos-duration="5000">
<img src={brijesh} alt="brij" />
</div>
</>
)
}

export default FlipApp