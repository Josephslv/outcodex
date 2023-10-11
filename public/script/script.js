const downloadButton = document.getElementById("myform");
downloadButton.addEventListener("click", (e) => {
    let linkDeDownload = document.createElement("a");
    // Configurar o URL do link e o nome do arquivo
    linkDeDownload.setAttribute('target', ' _blank')
    linkDeDownload.href = '/json/template_app.json';
    setTimeout(() => {
        linkDeDownload.click();
    }, 10)
})

document.addEventListener('DOMContentLoaded', function() {

  //// json models
  let templateJSON = {};
  
  let navbar_model_1_json =  {
      "pageNavigation": {
          "template":"A",
          "background": "",
          "color": "#fff",
          "title": "Título da página",
          "left": {
            "actions": [
              {
                "order": "2",
                "name": "home",
                "icon": "ea88",
                "title": "Texto 3"
              }
            ]
          },
          "right": {
            "actions": [
              {
                "order": "2",
                "name": "home",
                "icon": "ea88",
                "title": "Texto 3"
              }
            ]
          }
        },
  }
  let navbar_model_2_json =  {
      "pageNavigation": {
          "template":"B",
          "background": "",
          "color": "#fff",
          "title": "Título da página",
          "left": {
            "actions": [
              {
                "order": "2",
                "name": "home",
                "icon": "ea88",
                "title": "Texto 3"
              }
            ]
          },
          "right": {
            "actions": [
              {
                "order": "2",
                "name": "home",
                "icon": "ea88",
                "title": "Texto 3"
              }
            ]
          }
      }
  }
  let header_model_1_json =  {
      "pageHeader": {
          "template": "A",
          "background": "#fff",
          "logo": "https://mobilex.blob.core.windows.net/files/campinagrande/Banner%20consultas%202.png",
          "color": "#EE8113",
          "item": {
            "publishLevel": 1,
            "details": [
              {
                "order": 0,
                "value": ""
              }
            ],
            "actionDefault": 0,
            "actions": [
              {
                "order": "0",
                "name": "home",
                "icon": "ea39",
                "title": "Texto 1"
              }
            ]
          }
      }
  }
  let header_model_2_json =  {
      "pageHeader": {
          "template": "B",
          "background": "#fff",
          "logo": false,
          "color": "#EE8113",
          "item": {
            "publishLevel": 1,
            "details": [
              {
                "order": 0,
                "value": ""
              }
            ],
            "actionDefault": 0,
            "actions": [
              {
                "order": "0",
                "name": "home",
                "icon": "ea39",
                "title": "Texto 1"
              }
            ]
          }
      }
  }
  let content_model_1_json = {
      "pageContent": {
          "background": "#FFF",
          "totalPages": 1,
          "currentPage": 1,
          "hasGroupBy": false,
          "groupList": null
      }
  }
  let footer_model_1_json =  {
      "pageFooter": {
          "color": "#000",
          "background": "#FFF"
        }
  }
  ////
  
  
  
  ////// Application
  const options  = document.querySelectorAll('.option')
  const dropzone = document.querySelector('.dropzone')
  
  // áreas de drop do painel
  const navbar_zone  = document.querySelector('.navbar-zone')
  const header_zone  = document.querySelector('.header-zone')
  const content_zone = document.querySelector('.content-zone')
  const footer_zone  = document.querySelector('.footer-zone')
  
  
  options.forEach(option => {
      option.addEventListener('dragstart', dragstart)
      option.addEventListener('drag', drag)
      option.addEventListener('dragend', dragend)
  })
  
  // captura do evento da opção
  function dragstart() {
      // adiciona highlights nas áreas possíveis de drop!
      dropzone.classList.add('highlight')
  
      // identificador de movimento
      this.classList.add('is-dragging')
  
      if(this.classList.contains('nav-custom')){navbar_zone.classList.add('highlight')}
      if(this.classList.contains('header-custom')){header_zone.classList.add('highlight')}
      if(this.classList.contains('content-custom')){content_zone.classList.add('highlight')}
      if(this.classList.contains('footer-custom')){footer_zone.classList.add('highlight')}
  }
  
  function drag() {
      // animação de movimento
      this.classList.add('animation-move')
  }
  
  let newElementDropping;
  function dragend() { //console.log('> Dragging stop!')
      // remove as classes do card (opções de costomizalçao)
      this.classList.remove('is-dragging')
      this.classList.remove('animation-move')
  
      dropzone.classList.remove('highlight')
      navbar_zone.classList.remove('highlight')
      header_zone.classList.remove('highlight')
      content_zone.classList.remove('highlight')
      footer_zone.classList.remove('highlight')
  
      // remove as classes do card pós drop!
      if(newElementDropping != undefined){
        // áreas de drop do painel
          const navbar_editzone  = document.querySelector('.navbar-editzone')
          const header_editzone  = document.querySelector('.header-editzone')
          const content_editzone = document.querySelector('.content-editzone')
          const footer_editzone  = document.querySelector('.footer-editzone')
  
          //// Lógica da criação da template.json - II
          function jsonModelListener(classe) {
              if(classe == 'nav-model-1'){
                  if(newElementDropping.classList.contains(classe)){
                      templateJSON.pageNavigation_settings  = navbar_model_1_json.pageNavigation
                  }
              }
              if(classe == 'nav-model-2'){
                  if(newElementDropping.classList.contains(classe)){
                      templateJSON.pageNavigation_settings  = navbar_model_2_json.pageNavigation
                  }
              }
              if(classe == 'header-model-1'){
                  if(newElementDropping.classList.contains(classe)){
                      templateJSON.pageHeader_settings  = header_model_1_json.pageHeader
                  }
              }
              if(classe == 'header-model-2'){
                  if(newElementDropping.classList.contains(classe)){
                      templateJSON.pageHeader_settings  = header_model_2_json.pageHeader
                  }
              }
              if(classe == 'content-model-1'){
                  if(newElementDropping.classList.contains(classe)){
                      templateJSON.pageContent_settings  = content_model_1_json.pageContent
                  }
              }
              if(classe == 'footer-model-1'){
                  if(newElementDropping.classList.contains(classe)){
                      templateJSON.pageFooter_settings  = footer_model_1_json.pageFooter
                  }
              }
          }
          ////
  
  
          newElementDropping.classList.remove('option')
          newElementDropping.classList.remove('is-dragging')
          newElementDropping.classList.remove('animation-move')
      
      

          // lógica de adicição não repetida
          if(newElementDropping.classList.contains('nav-custom')){
              if(!document.querySelector('.navbar-zone .nav-custom')){
                  navbar_zone.appendChild(newElementDropping)
  
                  jsonModelListener('nav-model-1');
                  jsonModelListener('nav-model-2');
              } else {
                  //dropzone.removeChild(document.querySelector('.nav-custom'))
                  navbar_zone.removeChild(navbar_zone.children[0])
                  navbar_zone.appendChild(newElementDropping)
                  jsonModelListener('nav-model-1');
                  jsonModelListener('nav-model-2');
              }
          }
          if(newElementDropping.classList.contains('header-custom')){
              if(!document.querySelector('.header-zone .header-custom')){
                  header_zone.appendChild(newElementDropping)
                  jsonModelListener('header-model-1');
                  jsonModelListener('header-model-2');
              } else {
                  //dropzone.removeChild(document.querySelector('.nav-custom'))
                  header_zone.removeChild(header_zone.children[0])
                  header_zone.appendChild(newElementDropping)
                  jsonModelListener('header-model-1');
                  jsonModelListener('header-model-2');
              }
          }
          if(newElementDropping.classList.contains('content-custom')){
              if(!document.querySelector('.content-zone .content-custom')){
                  content_zone.appendChild(newElementDropping)
                  jsonModelListener('content-model-1');
              } else {
                  //dropzone.removeChild(document.querySelector('.nav-custom'))
                  content_zone.removeChild(content_zone.children[0])
                  content_zone.appendChild(newElementDropping)
                  jsonModelListener('content-model-1');
              }
          }
          if(newElementDropping.classList.contains('footer-custom')){
              if(!document.querySelector('.footer-zone .footer-custom')){
                  footer_zone.appendChild(newElementDropping)
                  jsonModelListener('footer-model-1');
              } else {
                  //dropzone.removeChild(document.querySelector('.nav-custom'))
                  footer_zone.removeChild(footer_zone.children[0])
                  footer_zone.appendChild(newElementDropping)
                  jsonModelListener('footer-model-1');
              }
          }
      }








      // lógica - Edit Template
      
  }
  
  //// Envio de dados pro servidor
  const myform = document.getElementById('myform')
  myform.addEventListener('submit', (event) => {
    event.preventDefault();
    
    fetch(`${(window.location.href).toString()}savetemplate`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({templateJSON:templateJSON}),
    }).then(res => {
      // let data = response
    }).catch(err => {
      console.log(`*.catch()* fetch api: ${err}`)
    })
  })
  
  
  
  
  // dropzone
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
  
  // captura do evento da zona de drop //
  function dragenter() {
      //console.log('> entrou na zona!')
  }
  
  function dragover() {
      this.classList.add('over')
      // pega a opção que está sendo arrastada
      const optionBeingDragged = document.querySelector('.is-dragging')
      // adiciona a opção arrastada (selecionada) na zona de drop
      if(optionBeingDragged){
          newElementDropping = optionBeingDragged.cloneNode(true)
      }
  }
  
  function dragleave() {
      //console.log('> saiu da zona de drop!')
      this.classList.remove('over')
  }
  
  function drop() {
      //console.log('> DROP!')
      this.classList.remove('over')
  }


    console.log(`
          ／l、  Outcode ャ MobileX
        （ﾟ､ ｡ ７  - by. Joseph
        ⠀ l、ﾞ~ヽ
          じしf_,  )ノ
    `)
})
