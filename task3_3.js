window.addEventListener("scroll",()=>{
 const canBeScroll = document.documentElement.scrollHeight - window.innerHeight
 const scrolled = window.scrollY;
 const scrollPercentage =(100-((canBeScroll-scrolled)/canBeScroll)*100)
 document.getElementById("myBar").style.width = `${scrollPercentage}%`;
 document.getElementById("progressValue").innerText = `${Math.round(scrollPercentage)}%`;
})