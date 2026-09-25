import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
function AnimApp()
{
useEffect(()=>{
Aos.init({
duration:1000,
// once:true
repeat:true
})

},[])
return(
<>
<div className="main">
<hr />
<h1 align="center">Flip</h1>
<hr/>
<div className="app">
<div className="box1" data-aos="fade-up">
data-aos="fade-up"
</div>
<div className="box2" data-aos="fade-down">
data-aos="fade-down"
</div>

<div className="box1" data-aos="fade-right">
data-aos="fade-up"
</div>
<div className="box2" data-aos="fade-left">
data-aos="fade-down"
</div>


<div className="box1" data-aos="flip-left">
data-aos="fade-up"
</div>
<div className="box2" data-aos="flip-right">
data-aos="fade-down"
</div>


<div className="box1" data-aos="flip-up">
data-aos="fade-up"
</div>
<div className="box2" data-aos="flip-down">
data-aos="fade-down"
</div>


<div className="box1" data-aos="flip-left">
data-aos="fade-up"
</div>
<div className="box2" data-aos="flip-right">
data-aos="fade-down"
</div>


<div className="box1" data-aos="zoom-in">
data-aos="fade-up"
</div>
<div className="box2" data-aos="zoom-in-up">
data-aos="fade-down"
</div>
</div>

</div>
</>
)
}

export default AnimApp