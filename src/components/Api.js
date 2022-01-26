import axios from "axios"

const BASE_URL = "https://pixabay.com/api/"
const key = "24436628-d6a54e94540eaccff236cce01"

const getPictures = async (search, page) => {
    try { 
        const response = await axios.get(`${BASE_URL}?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
        return response.data.hits
    } catch (error) {
        throw new Error(error.message)
    }

}
export {getPictures}



