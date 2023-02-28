$(document).ready(function() {
    $("#signUp").validate(
        {
            // Under rules assign name as key
            rules: {
                firstname: "required",
                lastname: "required",
                username: {
                    required:true,
                    minlength:2
                },
                password: {
                    required:true,
                    minlength:8
                },
                confirmPassword: {
                    required:true,
                    minlength:8,
                    equalTo: "#password" // under rules of particular key pass id as value if required

                },
                email: {
                    required:true,
                    email:true
                },
                policy:{
                    required:true,
                },
                newsletter: {
                    required:true,
                }
        
            }
        });
});