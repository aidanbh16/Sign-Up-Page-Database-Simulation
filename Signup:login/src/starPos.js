function setStar(){

    for (let i = 0; i < 120; i++){
        let star1 = document.createElement('div');
        star1.className = "star";
        document.getElementById('star').appendChild(star1);
    }

    const star = document.querySelectorAll(".star");

    for (let i = 0; i < star.length; i++) {
        let pos1 = Math.floor(Math.random() * (107 - 1) + 1);
        let pos2 = Math.floor(Math.random() * (99 - 1) + 1);
        let size = Math.floor(Math.random() * (10 - 2) + 2);
        let blur = Math.floor(Math.random() * (11 - 5) + 10);
        let blurSize = Math.floor(Math.random() * (5 - 2) + 2);
        let twinkle = Math.floor(Math.random() * (5 - 1) + 1);
        star[i].style.backgroundColor = "rgb(255, 255, 255, 1)";
        star[i].style.position = "fixed";
        star[i].style.borderRadius = "50px";
        star[i].style.zIndex = "0";
        star[i].style.top = pos1 + "vh";
        star[i].style.left = pos2 + "vw";
        star[i].style.width = size + "px";
        star[i].style.height = size + "px";
        star[i].style.boxShadow = "0px 0px " + blur + "px " + blurSize + "px rgb(255, 255, 255, 1)";
        if (twinkle === 3){
            star[i].style.animation = "twinkle 3s ease-in-out infinite";
        }
    }
}

window.onload = setStar();