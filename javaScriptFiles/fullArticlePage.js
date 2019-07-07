$(document).ready(function () {

    var likesCount = 0;


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


    $("#commentButton").click(function () {

        $("#commentEntryDiv").show();

    });

    $("#submitComment").click(function () {

        $("#commentEntryDiv").hide();
        var text = document.getElementById("comment").value;
        document.getElementById("comment").value = "";
        var newDiv = document.createElement("div");
        newDiv.className = "alert alert-primary";
        newDiv.innerHTML = text;
        document.getElementById("showComments").appendChild(newDiv);
    });


    $("#likeButton").click(function () {

        var count = document.getElementById("likeCount");

        if(likesCount === 0)
        {
            count.innerHTML = "You liked this post";
            likesCount++;
        }
        else if(likesCount === 1)
        {
            count.innerHTML = "You and 1 other person liked this post";
            likesCount++;
        }
        else
        {
            likesCount++;
            count.innerHTML = "You and "+(likesCount-1)+" other people this post";
        }

    });

    $("#navTitle").click(function () {
        window.location.href = "index.html";
    });

});