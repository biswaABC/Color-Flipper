const colors = ["#32C1C2","#009888","#3E49BB","#3B3B3B","#526EFF","#7F4FC9","#87C735","#CDE000","#00A5F9","#00BCD9","#682CBF","#FFEF00","#FF9A00","#7C5547","#5F7D8E","#FFCD00","#FF5500","#D40C00","#50342C","#9E9E9E","#EE82EE","#C71585","#8806CE","#D6B4FC","#6A5ACD","#330066","#B284BE","#702963","#FFE5B4","#FA8072","#B7410E","#551606","#893F45","#EB5406",];

const Btn = document.getElementById("btn");
const Color = document.querySelector(".color");

Btn.addEventListener("click", () => {
    const RandomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[RandomNumber];
    Color.textContent = colors[RandomNumber];
});

getRandomNumber = () =>{
    return Math.floor(Math.random() * colors.length);
};
