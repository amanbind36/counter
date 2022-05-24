import React from "react"

var style={
    color:"red"
}
var style1={
    color:"green"
}



const Counter=(props)=>{
    const [count,setCount]=React.useState(props.initialvalue)
   
//  const isodd=(num)=>{
//      let color="red";
//      if(num%2===1){
//        color="red"
//         console.log("raam")
//      }
//      else{
//           color="green";
//           console.log("raam")
//      }
//  }
   
   

    const incrementcount=()=>{
        
       setCount(count+1) ;
     
    //    if(count%2==0){
    //     var style1={
    //         color:"green"
    //     }
    //        console.log("raam")
    //    }
       
    }
    const decrementcount=()=>{
        
        setCount(count-1) ;
        
       
    }

    const double=()=>{
     setCount(count*2);
     console.log("count",count)
    }
    return (
        <div>
               {/* if(count%2==0){
         <h1 style="color=`red`">Counter App:{count}</h1>
    }
    else{
         <h1 style="color=`green`">Counter App:{count}</h1>
    } */}
            <h1>Counter App:{count}`</h1>
        <button onClick={incrementcount}>Incremen</button>

        <button onClick={decrementcount}>decremen</button>
        <button onClick={double}>Double</button>

        </div>
    )
}

export default Counter;