var character = 200;

// console.log($("#character"));

$(document).ready(() =>{
    console.log($("#character"));
    $('#questionInput').keyup( ()=>{
        let length = $('#questionInput').val().length;
        console.log(character - length);
        $('#character').text(character - length);
    });
});