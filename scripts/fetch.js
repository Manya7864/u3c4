let searchnews=async (query,url)=>
{
    try{
        let res=await fetch(url)
    
    let data=await res.json()
    return data



    }
    catch (err)
    {
        console.log("err",err)
    }



}
let appenddata=async (data,container)=>
{
    container.innerHTML=null
    data.map(({urlToImage,title,description,source:{id}})=>
    {
        let box=document.createElement("div")
        box.setAttribute("class","news")
        box.style.cursor="pointer"
        box.onclick=()=>
        {
            shownews(single)
        }
        let single=
        {
            urlToImage,title,description

        }
        function shownews(single)
        {
            window.location.href="news.html"
            localStorage.setItem("news",JSON.stringify(single))
        }
        let div1=document.createElement("div")
        let image=document.createElement("img")
        image.src=urlToImage
        div1.append(image)
        let div2=document.createElement("div")
        let news1=document.createElement("h4")
        news1.innerText=title
        let desc=document.createElement("p")
        desc.innerText=description
        div2.append(news1,desc)
        box.append(div1,div2)
        container.append(box)
    })

}
export {searchnews,appenddata}