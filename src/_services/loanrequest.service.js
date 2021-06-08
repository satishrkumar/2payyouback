import config from 'config';
import { authHeader } from '../_helpers';

export const loanRequestService = {
    calculateMonthlyPayment,
    calculateQuarterlyPayment,
    calculateDailyPayment,
    calculateYearlyPayment
};


function getHeaders() {
    return { 'Content-Type': 'application/json', 'authorization': 'Basic ' + window.btoa('admin' + ":" + 'admin') };
}
function calculateMonthlyPayment(loan) {
    debugger;
    const requestOptions = {
        method: 'POST',
        headers: getHeaders(),calculateMonthlyPayment,
        body: loan
    };

    return fetch(`${config.apiUrl}/repayment/calculateMonthlyPayment`, requestOptions).then(handleResponse);
      
}

function calculateQuarterlyPayment(loan) {
    const requestOptions = {
        method: 'POST',
        headers: getHeaders(),
        body: loan
    };

    return fetch(`${config.apiUrl}/repayment/calculateQuarterlyPayment`, requestOptions).then(handleResponse);
}

function calculateDailyPayment(loan) {
    debugger;
    const requestOptions = {
        method: 'POST',
        headers: getHeaders(),
        body: loan
    };

    return fetch(`${config.apiUrl}/repayment/calculateDailyPayment`, requestOptions).then(handleResponse);
}

function calculateYearlyPayment(loan) {
    const requestOptions = {
        method: 'POST',
        headers: getHeaders(),
        body: loan
    };

    return fetch(`${config.apiUrl}/repayment/calculateYearlyPayment`, requestOptions).then(handleResponse);;
}


function handleResponse(response) {
    debugger;
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            if (response.status === 404) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}