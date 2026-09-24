export const errorInterceptor = {
    onResponse: (response) => response,
    onError: (error) => {
        let message;
        if (error.response) {
            console.error('Data:', error.response.data);
            console.error('Status:', error.response.status);
            console.error('Headers:', error.response.headers);
            message = error.response.data['message'] || `Error ${error.response.status}: ${error.response.statusText}`;
        } else if (error.request) {
            console.log('Request:', error.request);
            message = 'No response received from the server. Please check your network connection or try again later.';
        } else {
            console.error('Error message:', error.message);
            message = error.message;
        }
        return Promise.reject(message);
    }
};