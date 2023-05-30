import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '555245da09msh600c4f5afad4e82p1659d0jsn5d926ad2b841',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert('There is an error fetching data')
        } finally {
            setIsLoading(false)
        }
    }

    const reFetchData = () => {
        setIsLoading(true)
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { data, isLoading, error, reFetchData }
}

export default useFetch