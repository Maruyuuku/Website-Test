//home.html
//for input[type="button"]
function gotosignup() {
    window.location.href = "signup.html";
}

//course.html
function unavailable_course() {
    window.alert("This Course is unavailable at this moment. Try again in a week.");
}



//signup.html

function redirect_to_login() {
    window.location.href = "log-in.html";
    return false;
}


function signup() {
    var signup_name = document.signup_form.signup_firstname.value;
    var signup_username = document.signup_form.signup_username.value;
    var signup_pwrd = document.signup_form.signup_password.value;

    //had to learn how to save to localstorage so it can be accessed later
    localStorage.setItem('user_username', signup_username);
    localStorage.setItem('user_password', signup_pwrd);
    localStorage.setItem('user_name', signup_name);

    window.alert("Sign-up done successfully! Your username is now " + signup_name + " and your password is " + signup_pwrd);
    window.location.href = "course.html";
    return false;
}


//log-in.html
var def_username = "olivia"; var def_name = "olivia";
var def_password = "1234";
function checkform() {
    var inputuser = document.login_form.username.value;
    var inputpwrd = document.login_form.password.value;


    //getting that signup value from the local storage ....
    var user_username = localStorage.getItem('user_username');
    var user_password = localStorage.getItem('user_password');
    var user_name = localStorage.getItem('user_name');

    //conditionals
    if (inputuser == user_username && inputpwrd == user_password) {
        window.alert("Welcome " + user_name + "!");
        window.location.href = "course.html";
        return false;
    }
        if (inputuser == def_username && inputpwrd == def_password) {
            window.alert("Welcome " + def_name + "!");
            window.location.href = "course.html";
            return false;
        }
 
    else {
        window.alert("Incorrect username or password.");
        window.location.href = "log-in.html";
    }
};

//PY_GETSTARTED HTML

function pypage() {
    window.alert("This Course is unavailable at this moment. Try again in a week.");
};

