import React from 'react'
import axios from "axios"
import {Bar, Pie} from "react-chartjs-2"


function Req() {
    const state = {
        labels: ['2017', '2018', '2019',
                 '2020'],
        datasets: [
          {
            label: 'Sales',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            borderRadius: 10,
            data: [65, 59, 80, 81, 56]
          }
        ]
      }

      axios.post("https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub", state)
      .then((res)=>{
          console.log(res);
      })
      .catch((err)=>err)
      
    return (
        <div>
            <div>
            <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Sales per month -Bar Chart',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
        <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Sales per month -Bar Chart',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
        </div>
    )
}

export default Req

