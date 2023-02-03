import React, { useState } from 'react'
import { useEffect } from 'react'

const url = 'http://localhost:8000/api/article'
const Test = () => {
  const [datas, setData] = useState([])
  const getData = async () => {
    const response = await fetch(url)
    const datas = await response.json()
    setData(datas)
    // console.log(data);
  }
  useEffect(() => {
    // setData(data);
    getData()
  }, [])
  return (
    <div>
      {datas.map((data) => {
        return (
          <div key={data.id}>
            <li>{data.title}</li>
            <img src={data.photo} alt="" />
          </div>
        )
      })}
    </div>
  )
}
export default Test
