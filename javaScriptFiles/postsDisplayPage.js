$(document).ready(function () {


    $("#navLoginButton").click(
        function () {
            $("#signInForm").show();
        }
    );

    $("#closeSiginIn").click(
        function () {
            $("#signInForm").hide();
        }
    );

    $("#navSignUpButton").click(
        function () {
            $("#signUpForm").show();
        }
    );

    $("#closeSignUp").click(
        function () {
            $("#signUpForm").hide();
        }
    );

    $(".btn-open").click(function () {
        window.location.href = "fullArticle.html";
    });

    $(".deletePost").click(function () {
        $("#confirmDelete").show();
    });

    $("#cancelDelete").click(function () {
        $("#confirmDelete").hide();
    });

    $("#navTitle").click(function () {
        window.location.href = "index.html";
    });

});