import axios from 'axios';



axios.defaults.timeout= 10000;
axios.defaults.baseURL= "http://localhost:3000";



export function test(){
    axios.get().then(res=>{
        console.log(res.data);
    })
}