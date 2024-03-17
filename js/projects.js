class Project{
  constructor(attr){
    this.title = attr['title']
    this.url = attr['url']
    this.preview = attr['preview']
    this.createContainer()
  }
  createContainer(){
    this.elem = document.createElement('div')
    this.elem.className = 'project'
    let previewImg = document.createElement('img')
    let title = document.createElement('span')
    let url = document.createElement('a')
    
    url.href = this.url
    url.innerText = 'visit'
    previewImg.src = this.preview
    title.innerText = this.title
    
    this.elem.append(previewImg, title, url)
  }
}