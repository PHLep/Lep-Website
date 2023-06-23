function Sample()

{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "password")
    {
        alert("Login Successful");
        return true;
    }
    else
    {
        alert("Invalid Username and Password");
        return true;
    }
  
}
