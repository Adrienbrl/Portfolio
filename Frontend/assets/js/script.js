window.onload = () => {
    let filters = document.querySelectorAll(".filters button");

    for(let filter of filters){
        filter.addEventListener("click", function(){
            let tag = this.classList[0];

            let images = document.querySelectorAll(".gallery img");

            for(let image of images){
                image.classList.replace("active", "inactive");

                if (image.classList.contains(tag) || tag === "all") {
                    image.classList.replace("inactive", "active");
                }
            }
        });
    }
}