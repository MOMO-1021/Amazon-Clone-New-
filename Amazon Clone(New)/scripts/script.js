// // It is a good practice to add DOMContentLoaded Event in your JavaScript Script before
// // writing the script:
document.addEventListener('DOMContentLoaded',function(){
    const panel2Link = document.querySelectorAll('.foot-panel2__link');
    panel2Link.forEach((link)=>{
        link.addEventListener('mouseover',()=>{
            if(!link.textContent.startsWith('-'))
                link.textContent = '- ' + link.textContent;
        })
        link.addEventListener('mouseout',()=>{
            if(link.textContent.startsWith('- '))
                link.textContent = link.textContent.slice(2);
        })
    })
})