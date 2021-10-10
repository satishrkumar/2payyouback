import config from 'config';

export const loandApprovalService = {
    getAllLoansForApproval,
    approveLoanById,
    rejectLoanById
};


function getHeaders() {
    return {'Content-Type': 'application/json', 'authorization': 'Basic ' + window.btoa('admin' + ":" + 'admin')};
}

function getAllLoansForApproval(email) {
    const requestOptions = {
        method: 'GET',
        headers: getHeaders(),
    };
    return fetch(`${config.apiUrl}/loan/findLoanByLenderEmailId/${encodeURIComponent(email)}`, requestOptions).then(handleResponse);
}


function approveLoanById(loanId) {
    const requestOptions = {
        method: 'GET',
        headers: getHeaders(),
    };
    return fetch(`${config.apiUrl}/loan/approveLoan/${loanId}`, requestOptions).then(handleResponse);
}


function rejectLoanById(loanId) {
    const requestOptions = {
        method: 'GET',
        headers: getHeaders(),
    };
    return fetch(`${config.apiUrl}/loan/rejectLoan/${loanId}`, requestOptions).then(handleResponse);
}


function handleResponse(response) {

    return response.json()
}
