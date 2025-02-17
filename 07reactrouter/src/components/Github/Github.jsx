import React from 'react'
import { useEffect , useState} from 'react'

function Github() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => {
        console.log(data);
        setData(data)
     })

    },[])
    return (
        <div className='text-center bg-green-500 text-white p-4 text-3xl'>Github followers: {data.followers}
         <img src={data.avatar_url} alt="Git picture" width={300} /></div>
    )
}

export default Github
