let acc = document.getElementsByClassName("accordion");
let i;
let links=[]
let delBtn=document.getElementById("deleteBtn")
let listContainer=document.getElementById("listUrl")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("links") )
const tabBtn = document.getElementById("tabBtn")

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

if (leadsFromLocalStorage) {
    links = leadsFromLocalStorage
    render(links)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        links.push({"title":tabs[0].title,"url":tabs[0].url,"icon":tabs[0].favIconUrl})
        localStorage.setItem("links", JSON.stringify(links) )
        render(links)
    })
})

delBtn.addEventListener("click", function() {
    localStorage.clear()
    links = []
    render(links)
})

function render(listOFlinks){
  let savedTabs=document.getElementById("savedTabs")
  // savedTabs.innerHTML=`<a>${listOFlinks[0].title}</a>`
    let listItems = ""
    for (let i = 0; i < listOFlinks.length; i++) {
        listItems += `
            <div>
                <a class="urlLink" target='_blank' href='${listOFlinks[i].url}'>
                <img src="pin.png" alt="" class="service-icon">
                    ${listOFlinks[i].title}
                </a>
            </div>
        `
        // let linkBlock=document.createElement("div")
        // let link=document.createElement("a")
        // link.setAttribute("href",`${listOFlinks[i].url}`)
        // linkBlock.appendChild(link)
        // savedTabs.appendChild(linkBlock)

    }
    savedTabs.innerHTML = listItems
}
