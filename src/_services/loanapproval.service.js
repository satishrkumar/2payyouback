import config from 'config';

export const loandApprovalService = {
    getAllLoansForApproval
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


function handleResponse(response) {

    return response.json()
}
