import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'



const JobDetail = () =>{

    const {id} = useParams();
    const [matches, setMatches] = useState({});

    useEffect(() => {
        axios(`https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/matches`).then(({ data }) => {
           if (data) {
              setMatches(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setMatches({});
     }, [id]);
    
console.log(matches);

    return (
        <>
        
      

 
 <h2>matched</h2>

    
        

    </>
    )
};

export default JobDetail;


