

function addExpense(event){
    event.preventDefault()

    const amount = event.target.amount.value;
    const category = event.target.category.value;
    const data = {
        amount,
        category
    }
    localStorage.setItem(data.category,JSON.stringify(data));
    showOnScreen(data);
    event.target.reset();
}

function showOnScreen(data){
    let parentEle = document.getElementById('lists');
    let childEle = document.createElement('li');
    childEle.innerHTML = `Amount you spent - ${data.amount} category - ${data.category}`;
    parentEle.appendChild(childEle);
    let deletbtn = document.createElement('button');
    deletbtn.innerHTML = 'delete';
    deletbtn.onclick = () => {
        localStorage.removeItem(data.category)
        parentEle.removeChild(childEle)
    }
    childEle.appendChild(deletbtn);
    let editBtn = document.createElement('button');
    editBtn.innerHTML = 'edit';
    editBtn.onclick = () => {
        localStorage.removeItem(data.category)
        parentEle.removeChild(childEle)
        document.getElementById('amt').value = data.amount
        document.getElementById('cat').value = data.category
    }
    childEle.appendChild(editBtn);
    parentEle.appendChild(childEle);
    
}