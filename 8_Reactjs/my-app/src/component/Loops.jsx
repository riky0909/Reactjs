import React, { Component } from 'react';

class Loops extends Component {
    render() {
        const Numbers = ['test',1,2,3,4]
        // console.log(Numbers);
        // for loop with array.
        // for(let index=0; index<Numbers.length; index++)
        // {
            // const element = Numbers[index];
            // console.log(element);
        // }

        // for in 
        // for(const my in Numbers)
        // {
            // if(Numbers.hasOwnProperty.call(Numbers,my))
            // {
                // const ele = Numbers[my]
                // console.log(ele);
            // }
        // }


        // for of
        // for(const data of Numbers)
        // {
            // console.log(data);
        // }

        // foreach
        // Numbers.forEach(ele=>{
            // console.log(ele);
        
        // })
        // map 
        const data = Numbers.map((res,j)=>{
            return <p key={j} class='p-3'>{res}</p>
        })

        return (
           <>
           {data}
           </>  
           
        );
 }
 }

export default Loops;