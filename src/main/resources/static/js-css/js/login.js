
window.onload = function () {
    $("#userName").focus(function () {
        $("#name-tip").attr("style","display: block");
        $("#name-warn").attr("style","display: none");
    });

    $("#userName").blur(function () {
        $("#name-tip").attr("style","display: none");
        let regExp = new RegExp("[`~!@#$%^&*()\\-+=<>?:\"{}|,.\\/;'\\\\[\\]·~！@#￥%……&*（）——\\-+={}|《》？：“”【】、；‘'，。、]");
        if (regExp.test($("#userName").val())) {
            $("#name-warn").attr("style","display: block;color: red");
        }
    })

    $("#password").focus(function () {
        $("#password-tip").attr("style","display: block");
        $("#password-warn").attr("style","display: none");
    });

    $("#password").blur(function () {
        $("#password-tip").attr("style","display: none");
        if ($("#password").val() != "" && $("#password").val().length < 6) {
            $("#password-warn").attr("style","display: block;color: red");
        }
    })

    $("#password-again").focus(function () {
        $("#password-compare").attr("style","display: none");
    });

    $("#password-again").blur(function () {
        if ($("#password-again").val() != "" && $("#password-again").val() != $("#password").val()) {
            $("#password-compare").attr("style","display: block;color: red");
        }
    })


    document.getElementById("password").oninput = function () {
        if ($("#password-again").val() != "" && $("#password-again").val() == $("#password").val()) {
            $("#password-compare").attr("style","display: none");
        }
        else if ($("#password-again").val() != "" && $("#password-again").val() != $("#password").val()) {
            $("#password-compare").attr("style","display: block;color: red");
        }
    }


}

function registe() {
    let regExp = new RegExp("[`~!@#$%^&*()\\-+=<>?:\"{}|,.\\/;'\\\\[\\]·~！@#￥%……&*（）——\\-+={}|《》？：“”【】、；‘'，。、]");
    let userName = $("#userName").val();
    let password = $("#password").val();

    if (userName == "" || regExp.test(userName)) {
        document.getElementById("userName").focus();
        return;
    }
    if (password == "" || password.length < 6) {
        document.getElementById("password").focus();
        return;
    }
    if ($("#password-again").val() != $("#password").val()) {
        document.getElementById("password-again").focus();
        return;
    }

    $.ajax({
        url:"/registe",
        data:{
            "userName":userName,
            "password":password
        },
        dataType:"text",
        success:function (data) {
            if ("注册成功" == data) {
                alert(data);
            }
            else {
                $("#fail-msg").text(data);
                $("#fail").attr("style","display: block");
            }
        }

    })
}

function login() {

}