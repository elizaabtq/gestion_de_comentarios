
function copiarNumero(){
  const numero="+52 722 232 2460";
  navigator.clipboard.writeText(numero).then(()=>{
    const noti= document.getElementById("noti");
    noti.style.display="block";
    setTimeout(()=>{
      noti.style.display="none";
    }, 2500);
  });
}