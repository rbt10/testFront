fetch('data.json')
  .then(response => response.json())
  .then(data => {
      data.slice(0, 10).forEach(job => {
      let jobElement = document.createElement('div');
      jobElement.classList.add('job');

      let title = document.createElement('h2');
      title.classList.add('expand-icon');
      title.textContent = job.jobTitle;
      jobElement.appendChild(title);

      title.addEventListener("click", function() {
        let details = this.nextElementSibling;
        details.classList.toggle("show");
        jobElement.classList.toggle("expanded"); 
      });

      let details = document.createElement('div');
      details.classList.add('details');

      let company = document.createElement('p');
      company.innerHTML = `<i class="fas fa-building"></i> Company: ${job.company}`;
      details.appendChild(company);

      let startDate = document.createElement('p');
      startDate.innerHTML = `<i class="far fa-calendar-alt"></i> Date début: ${new Date(job.startDate).toLocaleDateString()}`;
      details.appendChild(startDate);

      let salary = document.createElement('p');
      salary.textContent = "Salaire: " + job.salary + " " + job.currency;
      details.appendChild(salary);

      let city = document.createElement('p');
      city.textContent = "City: " + job.city;
      details.appendChild(city);

      let about = document.createElement('p');
      about.textContent = job.about;
      details.appendChild(about);

      let applyMail = document.createElement('p');
      applyMail.textContent = "Apply mail: " + job.applyMail;
      details.appendChild(applyMail);

      jobElement.appendChild(details);

      document.querySelector('.main_content').appendChild(jobElement);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });


   

const selectBtn =  document.querySelector(".select-btn"),
        items = document.querySelectorAll(".item")

        selectBtn.addEventListener("click", () =>{
            selectBtn.classList.toggle("open")
        })
        
        items.forEach(item => {
            item.addEventListener("click" ,() => {
                item.classList.toggle("checked")
            })
        });
        

const textDev =  document.querySelector(".text-dev")
const lorem = document.querySelector(".lorem")

textDev.addEventListener("click", () =>{
    lorem.classList.toggle("is-visible")
})



