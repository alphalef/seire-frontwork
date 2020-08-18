// JavaScript Document

$(document).ready(function(){
//	메뉴바 그림자 제거
	$('nav').addClass('removeShadow');
	
// 	스크롤에 따라 메뉴바 모양 변경
	$(window).scroll(function(){
		if($(window).scrollTop()>50){
			$('nav').addClass('orange accent-2 transition');
			$('nav').removeClass('removeShadow');
		}else{
			$('nav').removeClass('orange accent-2');
			$('nav').addClass('removeShadow');
		}
		
		$('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > bottom_of_object/2 ){
                $(this).animate({'opacity':'1'},500);
            }
        }); 
	});

	
//	모바일 메뉴 로드
	$('.sidenav').sidenav();
});