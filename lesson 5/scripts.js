function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minute = now.getMinutes().toString().padStart(2,0);
    const second = now.getSeconds().toString().padStart(2,0);
    const timeString =`${hours}:${minute}:${second} WIB`
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000)