$(document).ready(function () {



    $("#createPost").hover(
        function () {
            $("#hintText").text("Create New Post");
            $("#contolHint").show();
        },
        function () {
            $("#contolHint").hide();
        }
    );


    $("#showPosts").hover(
        function () {
            $("#hintText").text("Show All Posts");
            $("#contolHint").show();
        },
        function () {
            $("#contolHint").hide();
        }
    );

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

    $("#createPost").click(
        function () {
            $("#addPostForm").show();
        }
    );

    $("#closeAddPost").click(
        function () {
            $("#addPostForm").hide();
        }
    );

    $("#showPosts").click(function () {

        window.location.href = "allPostsDisplay.html";

    });





});