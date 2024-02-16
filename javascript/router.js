function navigateToDept(name){
    window.location.href='./department.html?dept='+name
}

function navigateToProf(id){
    let branch = window.location.href.split("?dept=")[1]
    window.location.href="./prof.html?dept="+branch+"?id="+id
}