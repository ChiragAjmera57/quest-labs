export function getUserData() {
    const url = `https://staging.questprotocol.xyz/api/users/u-a2399489-9cd0-4c94-ad12-568379202b08`;
    const headers = {
        'apikey': 'k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be',
        'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc',
        'userid': 'u-a2399489-9cd0-4c94-ad12-568379202b08'
    };

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'GET',
            headers: headers
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
        });
    });
}

