import { getAPI } from '../../utils/axios'


export function getBooks() {
    getAPI('./data.json')
        .then(({ data }) => {
            
        })
}