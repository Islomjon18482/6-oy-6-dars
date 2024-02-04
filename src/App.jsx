import './App.css'
import Form from './components/Form'
import Table from './components/Table'
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(0)
  
  useEffect(()=>{
    fetch("https://auth-rg69.onrender.com/api/products/all")
    .then(res => res.json())
    .then(res =>{
      setData(res)
    })
    .catch(err => console.log(err))
  })
  return (
    <>
      <Form resfresh={setRefresh}></Form>
      <Table setData={setData} data={data}></Table>
    </>
  )
}

export default App
