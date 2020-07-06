import axios from 'axios' // promise-based HTTP async code

const api = axios.create({
      baseURL: 'http://localhost:3000/api'
})

export const createSpot = payload => api.post(`/dogspotting`, payload)
export const updateSpot = (id, payload) => api.put(`/dogspotting/${id}`, payload)
export const deleteSpot = id => api.delete(`/dogspotting/${id}`)
export const getSpotById = id => api.get(`/dogspotting/${id}`)
export const getDogSpots = () => api.get(`/dogspotting`)

const apis = {
      createSpot,
      updateSpot,
      deleteSpot,
      getSpotById,
      getDogSpots,
}

export default apis