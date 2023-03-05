
// **********Select Items ***********************
const form = document.querySelector(".grocery-form")
const alert = document.querySelector(".alert")
const submitBtn = document.querySelector(".submit-btn")
const input = document.getElementById("grocery")
const groceryContainer = document.querySelector(".grocery-container")
const groceryList = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn")

// **********Edit Items ***********************
let editItems
let editFlag = false
let editID = ""


// **********Add eventListener ***********************
form.addEventListener("submit", addItems)
clearBtn.addEventListener("click", clearItems)
window.addEventListener("DOMContentLoaded", createItem)
// **********Functions ***********************
function addItems(e) {
    e.preventDefault()
    const value = input.value
    const id = new Date().getTime().toString()

    if (value && !editFlag) {

        createItem(id, value)
        // show element in grocery container by adding class.------
        groceryContainer.classList.add("show-container")
        // display alert
        displayAlert("Item added successfully", "success")
        // set to defaults 
        setToDefault()
        // add to the local storage
        addToLocalStorage(id, value)
    }
    else if (value && editFlag) {
        editItems.textContent = value
        displayAlert("item edited successfully", "success")
        editLoacalStorage(editID, value)
        setToDefault()
    }
    else {
        displayAlert("Please enter a value", "danger")
    }
}

// ------alert function ----------------
function displayAlert(text, color) {
    alert.textContent = text
    alert.classList.add(`alert-${color}`)

    // ---------duration of alert function -----------
    setTimeout(() => {
        alert.textContent = ""
        alert.classList.remove(`alert-${color}`)
    }, 1000);
}

//  set to default function ============
function setToDefault() {
    input.value = ""
    editFlag = false
    editID = ""
    submitBtn.textContent = "submit"
}

// **********Clear Items ***********************
function clearItems(item) {
    const Items = document.querySelectorAll(".grocery-item")
    if (Items.length > 0) {
        Items.forEach(function (item) {
            groceryList.removeChild(item)
        })
    }
    displayAlert("All items removed", "danger")
    groceryContainer.classList.remove("show-container")
    setToDefault()
    localStorage.removeItem("list")
}

// **********  Edit && Delete functions  ***********************
// edit function=======
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement
    console.log(element)
    editItems = e.currentTarget.parentElement.previousElementSibling
    editFlag = true
    editID = element.dataset.id
    input.value = editItems.innerHTML
    submitBtn.textContent = "edit"

}
// delete functions =========
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement
    const id = element.dataset.id
    groceryList.removeChild(element)
    if (groceryList.children.length === 0) {
        groceryContainer.classList.remove("show-container")
    }
    displayAlert("item deleted", "danger")
    removeFromLocalStorage(id)
    setToDefault()
}
// **********Select Items ***********************

// ***********setting up local storage ******************
// setTo local storage ------
function addToLocalStorage(id, value) {
    const input = { id, value }
    let items = getToLocalStorage()
    items.push(input)
    localStorage.setItem("list", JSON.stringify(items))
}

function getToLocalStorage() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []
}

// remove from local storage : 
function removeFromLocalStorage(id) {
    let items = getToLocalStorage()
    items = items.filter(function (item) {
        if (item.id !== id) {
            return item
        }
    })
    localStorage.setItem("list", JSON.stringify(items))
}

// edit local storage --------------------
function editLoacalStorage(id, value) {
    let items = getToLocalStorage()
    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value
        }
        return item
    })
    localStorage.setItem("list", JSON.stringify(items))
}


// ********** setup Items ************
function setupItems() {
    let items = getToLocalStorage()
    if (items.length > 0) {
        items.forEach(function (item) {
            createItem(item.id, item.value)
        })
    }
    groceryContainer.classList.add("show-container")
}



function createItem(id, value) {
    const element = document.createElement("article")
    element.classList.add("grocery-item")
    const attr = document.createAttribute("data-id")
    attr.value = id
    element.setAttributeNode(attr)
    element.innerHTML = ` <p class="title">${value}</p>
   <div class="btn-container">
       <button class="edit-btn" type="button">
           <i class="fas fa-edit"></i>
       </button>
       <button class="delete-btn" type="button">
           <i class="fas fa-trash"></i>
       </button>
   </div> `

    //    select edit and delete buttons
    const editBtn = element.querySelector(".edit-btn")
    editBtn.addEventListener("click", editItem)
    const deleteBtn = element.querySelector(".delete-btn")
    deleteBtn.addEventListener("click", deleteItem)
    //    add event listener to the edit and delete buttons


    //    append(stitch in my words) to the grocery list-------
    groceryList.appendChild(element)
}