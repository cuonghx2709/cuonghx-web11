var character = 200;

// console.log($("#character"));

$(document).ready(() =>{
    console.log($("#character"));
    $('#questionInput').keyup( ()=>{
        var length = $('#questionInput').val().length;
        console.log($('#questionInput').val().length);
        var val = $('#questionInput').val();
       
        if (val.length > character){
           alert ("Max length is 200");
           val = val.substring(0, val.length - 1);
           $('#questionInput').val(val);
           $('#questionInput').focus();
           return false;
         }
         $('#character').text(character - length);
    }).keypress((event) => {
        if ($('#questionInput').val().length > character) {
            $('#character').text(0);
            return false;
           
        }
    });

    $('#button').click(()=>{
        if($('#questionInput').val().length == 0){
            alert("Không có câu hỏi");
        }
    });

});