let container = document.getElementById('container')
let currentPage = 1;
let itemsPerPage = 8;
let url = 'https://api.tvmaze.com/shows'
let listMovie = []

async function getApi (){
    const response = await fetch(url)
    const data = await response.json()
    listMovie = data
}


async function displayItems (){
    await getApi()
    let startIndex = (currentPage - 1) * itemsPerPage
    let endIndex = startIndex + itemsPerPage
    let showItems = listMovie.slice(startIndex, endIndex)
    container.innerHTML = ""

    showItems.forEach(itemsMovie => {
        let card = document.createElement('div')
        // card.style.backgroundColor = 'blue'
        card.className = 'card'
        let header = document.createElement('h2')
        let image = document.createElement('img')
        image.className = 'cardImage'
        let innerDiv = document.createElement('div')
        innerDiv.className = 'innerDiv'
        let comment = document.createElement('p')
        let icon = document.createElement('p')
        comment.textContent = 'comment'
        comment.style.border = 'solid'
        comment.style.padding = '20px'
        // comment.style.border = 'solid'
        header.textContent = `${itemsMovie.name}`
        header.style.textAlign = 'center'
        image.src = `${itemsMovie.image.original}`
        image.style.cursor = 'pointer'
        
        innerDiv.append(comment, icon)
        card.append(header,image, innerDiv)
        container.appendChild(card)
        let showOverLay = overlay()
        image.addEventListener('click', ()=>{
          showOverLay.style.display = 'block'  
        })
    });
    // hideBtn()
}
// function hideBtn(){
//     let totalNumberOfPages = Math.ceil(listMovie.length/itemsPerPage)
//     if(currentPage === 1){
//         prevBtn.style.display = 'none'
//     } 
//     else{
//         prevBtn.style.display = 'inline=-lock'
//     }
//     if(currentPage === totalNumberOfPages){
//         nextBtn.style.display = 'none'
//     }
//     else{
//         nextBtn.style.display = 'initial'
//     }
// }
displayItems()


function overlay (){
    //containers
    let overlayContainer = document.createElement('div')
    let con1 = document.createElement('div')
    let con2 = document.createElement('div')
    let con3 = document.createElement('div')
    // overlayContainer.style.width = '100%'
    // overlayContainer.style.height = '100%'
    // overlayContainer.style.backgroundColor = 'black'
    //first div
    let conheader1 = document.createElement('h2')
    let innerImg = document.createElement('img')
    let firstPara = document.createElement('p')
    firstPara.textContent = 'welcoome to next level'
    con1.append(conheader1,innerImg, firstPara)

    //secon div
    let secondPara = document.createElement('p')
    con2.appendChild(secondPara)
    
    //third div
    overlayContainer.append(con1,con2,con3)
    let input = document.createElement('input')
    input.type = 'text'
    con3.appendChild(input)
    
    //classoverlayContainer.className = 'overlayCon'
    overlayContainer.className = 'overLaycon'
    con1.className = 'con1'
    con2.className = 'con2'
    con3.className = 'con3'
    conheader1.className = 'conheader1'
    innerImg.className = 'innerImg'
    firstPara.className = 'firstPara'
    secondPara.className ='secondPara'
    input.className = 'input'
    
    //close
    let closeBtn = document.createElement('button')
    closeBtn.textContent = 'X'
    overlayContainer.appendChild(closeBtn)
    closeBtn.addEventListener('click',() =>{
        overlayContainer.style.display = 'none'
    })
    
    
    
    document.body.appendChild(overlayContainer)
    return overlayContainer
}






let prevBtn = document.getElementById("prevBtn")
prevBtn.addEventListener("click", () => {
    currentPage--
    displayItems()
  });
let nextBtn = document.getElementById("nextBtn")
  document.getElementById("nextBtn").addEventListener("click", () => {
    currentPage++
    displayItems()
  });
  