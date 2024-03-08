
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const Card = (id) => {
    const [doggiePic, setDoggiePic] =  useState({})
    const [dogInfo, setDoggieInfo] = useState(useSelector((state)=> state.doggie))
  
    useEffect(() =>{
        const fetchDoggie = async() =>{
          try {
            const response = await fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${id.data}`);
            const data = await response.json();
            setDoggiePic(data);
            console.log(doggiePic)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchDoggie()
        },[])
console.log(dogInfo)


    return (
        <div className="max-w-xlg rounded overflow-hidden shadow-lg">
        <img className="w-full" src={doggiePic[0]?.url} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The {dogInfo.name}</div>
                <p className="text-gray-700 text-base">
                    From the breed group {dogInfo.breed_group}, this dogs are known for being {dogInfo.temperament}, usually they are about {dogInfo.height.metric}cm of height and {dogInfo.weight.metric}kg of weigth and they live for about {dogInfo.life_span}!
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{dogInfo.bred_for}</span>

            </div>
    </div>
    );
}

export default Card;