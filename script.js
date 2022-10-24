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
				$('.bg').css({
					'background-image': `url(${types['education']})`
				})
				console.log(response.type); //タイプの文字が取れてる
				console.log(types['education']); //3行目取れてる
			})

		// 以下参照　https://okinawanpizza.hatenablog.com/entry/2020/05/05/224906
		$(".resbtn").prop("disabled", true);
		var select = document.querySelector(".result");
		select.addEventListener('change', function () {
			selectedCheck();
		})

		$('.runBtn').fadeIn(1500);

	})

	$('.yes').click(function () {
		$('.charlieContens').removeClass('hide');
		// $('.charlieContens').show(1500);
		$(".no").prop("disabled", true);
	});

	$('.no').on('click', function () {
		$('.snoopyContents').removeClass('hide');
		// $('#character').show(1500);
		$(".yes").prop("disabled", true);
	});


	// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
	function TextTypingAnime() {
		$('.TextTyping').each(function () {
			var elemPos = $(this).offset().top - 50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			var thisChild = "";
			if (scroll >= elemPos - windowHeight) {
				thisChild = $(this).children(); //spanタグを取得
				//spanタグの要素の１つ１つ処理を追加
				thisChild.each(function (i) {
					var time = 100;
					//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
					$(this).delay(time * i).fadeIn(time);
				});
			} else {
				thisChild = $(this).children();
				thisChild.each(function () {
					$(this).stop(); //delay処理を止める
					$(this).css("display", "none"); //spanタグ非表示
				});
			}
		});
	}


	// 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function () {
		//spanタグを追加する
		var element = $(".TextTyping");
		element.each(function () {
			var text = $(this).html();
			var textbox = "";
			text.split('').forEach(function (t) {
				if (t !== " ") {
					textbox += '<span>' + t + '</span>';
				} else {
					textbox += t;
				}
			});
			$(this).html(textbox);

		});

		TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


}) //end of the function

