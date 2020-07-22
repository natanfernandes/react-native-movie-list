import traktApi from './index';

const makeRequest = async (method, endpoint) => {
    switch(method){
        case 'GET':
            try {
                const response = await traktApi.get(endpoint);
                const returnType = {
                    data: response.data,
                    error: false
                }
                return returnType;
                
            } catch (error) {
                const returnType = {
                    data: response.data,
                    error: true
                }
                return returnType;
            }
    }
}

export default makeRequest;