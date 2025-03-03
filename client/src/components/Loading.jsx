import React from 'react'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css';
import '../App.css'
const Loading = () => {
    let load = async () => {
        nProgress.start();
    
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log("helli");
                resolve();
            }, 5000);
        });
    
        nProgress.done();
    };
    let click = async()=>{
        await load();
    }
    return (
        <button onClick={click}>Click</button>
    )
}

export default Loading
