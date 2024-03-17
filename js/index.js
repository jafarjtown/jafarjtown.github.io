let projects = [
    {
      title: "calculator",
      url: "google.com",
      preview: "google.com"
    },
    {
      title: "Todo",
      url: "Facebook.com",
      preview: "google.com"
    }
  ]
const projectContainer = document.querySelector('.projects-container')
  projects.forEach(pr=>{
    let elem = new Project(pr)
    projectContainer.appendChild(elem.elem)
  })
  
  
  let words = [
      'Software Developer',
      'Fullstack Developer',
      'Python Programmer',
      'Backend Developer',
      'Computer Guru',
      'Web developer'
    ]
    
    let index = 0
    let sp = document.querySelector('h3.sp')
    setInterval(()=>{
      sp.innerText = words[index]
      index++
      if(index === words.length) index = 0
    }, 3000)