$(function () {

    $('.resbtn').on('click', function () {
        // let result = $('input').val();

        $.ajax({
            url: 'http://www.boredapi.com/api/activity/',
            type: 'get',   //post or get
            cache: false,        //cache(キャッシュ)を使うか使わないかを設定
            dataType: 'json',     //data type script・xmlDocument・jsonなど
        })
            .done(function (response) {
                $('.result').append(response.activity);
                console.log(response);
            })
            // 以下参照　https://okinawanpizza.hatenablog.com/entry/2020/05/05/224906
        $(".resbtn").prop("disabled", true);
        var select = document.querySelector(".result");
        select.addEventListener('change', function () {
            selectedCheck();
        })
    })

    $('doitbtn').hide();
    // $('doitbtn').on('click',function () {
        
    // })




}) //end of the function

