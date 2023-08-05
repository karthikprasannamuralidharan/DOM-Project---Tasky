const taskContainer = document.querySelector(".task_container");
console.log(taskContainer);

const globalStorage =[];

const generateHTML = (taskData) => {
  return `
<div id=${taskData.id} class="col-md-4">
                    <div class="card">
                        <h5 class="card-header d-flex justify-content-end">
                            <button type="button" class="btn btn-primary m-2"><i class="fa-solid fa-pencil"></i></button>
                            <button type="button" class="btn btn-danger m-2"><i class="fa-solid fa-trash"></i></button>
                        </h5>
                        <div class="container p-3">
                            <img src= ${taskData.imageurl} alt="Image">
                        </div>
                        <div class="card-body">
                          <h5 class="card-title text-primary d-flex justify-content-start">${taskData.tasktitle}</h5>
                          <div class="d-flex justify-content-start">
                            <p class="card-text">${taskData.taskdescription}</p>
                          </div>
                          
                          <div class="d-flex justify-content-start">
                            <a href="#" class="btn btn-primary">${taskData.tasktype}</a>
                          </div>
                          
                        </div>
                      </div>

                </div>
`;

};

const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,
        imageurl: document.getElementById("imgUrl").value,
        tasktitle: document.getElementById("taskTitle").value,
        tasktype: document.getElementById("taskType").value,
        taskdescription: document.getElementById("taskDescription").value
    };

    

globalStorage.push(taskData);

localStorage.setItem("tasky", JSON.stringify({cards:globalStorage}));



};

const loadInitialData = () => {
  //localStorage to get tasky card data
  const getCardData = localStorage.getItem("tasky");

  //convert string into object
  const {cards} = JSON.parse(getCardData);

  //loop over the array of tasky objects to create HTML card and inject it into our DOM
  cards.map((cardObject) => {
    taskContainer.insertAdjacentHTML("beforeend", generateHTML(cardObject));

    //update globalStore
    globalStorage.push(cardObject);
  })

};
