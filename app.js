const repositorios = document.querySelector('.content-main')

function ApiGithub(){
    fetch('https://api.github.com/users/mmajid7/repos')
        .then(async resposta =>{
         if(!resposta.ok){
            throw new Error(resposta.status)
         }

        let data = await resposta.json()
        data.map(item =>{
            let project = document.createElement('div')
            project.innerHTML = `
            <div class="project">
        
              <div>
                 <h4 class="titulo">${item.name}</h4>
               
              </div>
              <div>
                 <a href="${item.html_url}" class="link" target="_blank">${item.html_url}</a>
              </div>
            </div>
            `
            repositorios.appendChild(project)
        })
     })
}
ApiGithub()