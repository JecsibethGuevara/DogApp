import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setDog } from '../../redux/reducer';


function Table() {
  const dogs = useSelector((state) => state.dogs);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiKey = 'live_oPYEchkWzuKbWhr4U3paf29Bh1eVQ0BMQ6Cw078TeQBuuxs78q601JMv0mvw7P3y'
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchDoggies = async () => {
      try {
        const response = await fetch(`https://api.thedogapi.com/v1/breeds/`);
        let data = await response.json();
        filter == 'all' ?  true : data =  data.filter(item => item.name.includes(filter));
        console.log(data)
        setData(data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDoggies()
  },
    [filter])

  const handleClick = (doggie) => {
    dispatch(setDog(doggie));
    
    navigate(`/details/${doggie.id}`);
    
  };
  let dog = useSelector((state) => state.filter)
  console.log(dog, 'ahdkja')
  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Buddies</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className=" w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Group</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Purpose</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Years on Earth</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Vibes</div>
                </th>

              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {
                data.map(doggie => {
                  return (


                    <tr key={doggie.id} onClick={() => { handleClick(doggie) }}>

                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{doggie.name}</div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">{doggie.breed_group}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">{doggie.bred_for}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">{doggie.life_span}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">{doggie.temperament}</div>
                      </td>

                    </tr>

                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default Table;
