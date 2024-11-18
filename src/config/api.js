import axios from 'axios'

async function fetchAPI(method, endpoint) {
    try {
        const response = await axios.request({
            method: method,
            maxBodyLength: Infinity,
            url: endpoint.includes('http') || endpoint.includes('https')
                ? endpoint
                : import.meta.env.VITE_API_BASE_URL + endpoint,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        return response
    } catch (error) {
        throw error
    }
}

export default fetchAPI