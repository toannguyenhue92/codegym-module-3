let searchInput = document.getElementById("search");
let findButton = document.getElementById("find");
let message = document.getElementById("message");
let resultTable = document.getElementById("result-table");
findButton.addEventListener("click", () => {
    let searchString = searchInput.value;
    let url = `https://api.github.com/search/repositories?q=${searchString}`;
    findButton.disabled = true;
    message.hidden = false;
    message.textContent = "Please wait";
    httpGet(url).then(function (value) {
        console.log(value);
        showFirst10Repositories(JSON.parse(value));
        findButton.disabled = false;
        message.textContent = "Done";
    }, function (reason) {
        console.error('Something went wrong', reason);
    });
});
function httpGet(url) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        request.onload = function () {
            if (this.status === 200) {
                // Success
                resolve(this.response);
            }
            else {
                // Something went wrong (404 etc.)
                reject(new Error(this.statusText));
            }
        };
        request.onerror = function () {
            reject(new Error('XMLHttpRequest Error: ' + this.statusText));
        };
        request.open('GET', url);
        request.send();
    });
}
function showFirst10Repositories(data) {
    if (data.total_count == 0) {
        resultTable.innerHTML = "Not found!";
    }
    else {
        let result = `<table><thead><tr><th>#</th><th>Full name</th><th>Description</th><th>Repository</th><th>Language</th></tr></thead><tbody>`;
        for (let index = 0; index < 10; index++) {
            const element = data.items[index];
            result += `<tr><td>${index + 1}</td>`;
            result += `<td>${element.full_name}</td>`;
            result += `<td>${element.description}</td>`;
            result += `<td><a href="${element.html_url}">${element.html_url}</a></td>`;
            result += `<td>${element.language}</td></tr>`;
        }
        result += `</tbody></table>`;
        resultTable.innerHTML = result;
    }
}
