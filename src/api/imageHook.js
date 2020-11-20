import { useState, useEffect } from 'react'
import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://api.imgflip.com',
  headers: {
    'Content-type': 'application/json'
  }
});

export const useGetImage = () => {
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState([])

  const getImages = async () => {
    setLoading(true)
    const res = await Axios.get('/get_memes').catch(err => console.error(err))

    setResults(res ? res.data.data.memes : [])
    setLoading(false)
  }

  useEffect(() => {
    getImages()
  }, [])

  return [loading, results]
}