/* Author: 
Inayatullah
*/
//load more js start
let dataList = document.querySelector('.display-list'),
    loadBtn = document.querySelector('.load-btn');
let userData,
    limit = 10,
    start = 0;
requestAPI();
function requestAPI() {
    let xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function () {
        try {
            if (this.readyState == 4 && this.status == 200) {
                userData = JSON.parse(this.response);
                setData(userData);
            } else {
                throw this.status + ":" + this.statusText;
            }
        } catch (error) {
            alert(error);
        };
    };
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.send();
};

function setData(data) {
    userData = data;
}

function appendData() {
    for (let i = start; i < limit; i++) {
        let result = userData[i];
        const list = document.createElement('li');
        list.className = "data-item";
        list.innerHTML = `<ul class="data">
        <li class="userid">${result.id}</li>
        <li class="title">${result.title}</li>
        <li class="detail">${result.body}</li>
      </ul>`
      dataList.appendChild(list);
      if(i == 99){
        loadBtn.style.display = "none";
        break;
    }
    }
    start = limit;
    limit += 10;
}

    loadBtn.addEventListener('click',appendData);
//load more js start























