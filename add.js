function Login(){
    var x = document.getElementById('email').value
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf("."); 
    if(atposition < 1 || dotposition < atposition + 2 || dotposition || + 2 >= x.length){
        alert("please enter a valid e-mail address");
        return false;
    }
}