const uploadIcon = document.querySelector("#addImage");

uploadIcon.addEventListener("click", function(){
    this.previousElementSibling.click();
});

uploadIcon.previousElementSibling.addEventListener("change", (e) =>{
    const { files } = e.target;
    const body = document.querySelector("body");

    for(let file of files){
        const fileReader = new FileReader();

        fileReader.onloadend = (e) => {
            const { result } = e.target;
            const creatImg = document.createElement("img");
            creatImg.src = result;
            body.appendChild(creatImg);
        };
        
        fileReader.readAsDataURL(file);
    }
});