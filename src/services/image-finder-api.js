import axios from "axios";

const API_KEY = '21328560-05cd5dc1340cc7c21280a8fdd';

const imagesApi = ({ searchQuery = '', currentPage = 1 }) => {
    return axios
        .get(
            `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
        )

        .then(({ data }) => data.hits);
};

export default imagesApi;