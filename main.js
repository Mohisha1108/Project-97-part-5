function addUser()
{
    user_name = document.getElementById("user_name").value;
    password = document.getElementById("password").value;
    localStorage.setItem("user_name", user_name);
    localStorage.setItem("password", password);
    if (password = password)
    {
       window.location = "kwitter_room.html";
    }
    window.location.href = "kwitter_room.html";
}
function showPw()
{
    pw = document.getElementById("password").value;
    document.getElementById("sp").innerHTML = pw;
}