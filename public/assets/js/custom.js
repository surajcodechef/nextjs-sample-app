$(document).ready(function () {
	$(window).scroll(function () {
	    var sticky = $(window).scrollTop() + 1;
	    if(sellwithus==0){
		    if (sticky > 50) {
		      $('.header').addClass('sticky_header');
		    } else {
		      $('.header').removeClass('sticky_header');
		    }
	    }
	});
  	/* LEFT DRAWER MENU */
	$('.l1').on('click',function(){
	     var tag = $(this).attr('data-text');
	     var tag1 = $(this).text();
	    var back_link="#layer"+tag;
	    $("#layer"+tag).removeClass('hide-menu'); 
	    $(".layer1").removeClass('show-menu');
	     $("#layer"+tag).toggleClass('show-menu'); 
	});
	$('.nav-link').on('click',function(){
	     var tag = $(this).attr('href');
	    var val= $(this).attr('data-text');
	     $(tag).removeClass('show-menu'); 
	     var back_link="#layer"+(val);
	     $('.nav-link').attr('href',back_link);
	    $('.nav-link').attr('data-text',val);
	});
	/*ON HEADER  FOCUS SHOW OPACITY*/
	$('.inputfocus input.searchbar').focus(function(){
	     $('.focus-opacity').addClass('bg-opacity');
	});
	$('.inputfocus input.searchbar').focusout(function(){
	     $('.focus-opacity').removeClass('bg-opacity');
	});


	$('.adv-button').click(function () {
	     // body...
	     if ($('.focus-opacity').hasClass('op-show')) 
	     {
	          $('.focus-opacity').addClass('bg-opacity').removeClass('op-show');
	     }
	     else
	     {
	          $('.focus-opacity').removeClass('bg-opacity').addClass('op-show');
	     }
	})

	$('.focus-opacity').click(function(){
	     /*body*/
	     $(this).removeClass('bg-opacity').addClass('op-show');
	    
	});

	/*$('.count').prop('disabled', true);*/
	$(document).on('click','.plus',function(){
		$('.count').val(parseInt($('.count').val()) + 1 );
	});
	$(document).on('click','.minus',function(){
		$('.count').val(parseInt($('.count').val()) - 1 );
		if ($('.count').val() == 0) {
			$('.count').val(1);
		}
	});
    
	$('#search_text').keyup(function(){
		    var text = $(this).val();
		    $('.searchcontent').hide();
		    $('.searchcontent:contains("'+text+'")').closest('.searchcontent').show();
	    
	});
	$.expr[":"].contains = $.expr.createPseudo(function(arg) {
            return function( elem ) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
            };
        });
        
        // Handle removal of bullet points
        $('.close-point').click(function(e){
             e.preventDefault();
             $(this).closest('.input-group').remove();
         })
        
        // Handle adding new bullet points
        $('#add_bullet_point').click(function(event) {
            event.preventDefault();
            var bulletPointsContainer = $('.add_bullet');
            var newBulletPoint = `
                <div class="input-group my-2">
                    <label class="w-100">Bullet Point Text</label>
                    <input type="text" name="aplus[other_content][point][]" value="" class="form-control rounded-0" placeholder="Enter your bullet point">
                    <button type="button" class="dynamic-close-point btn btn-danger">X</button>
                </div>
            `;
            bulletPointsContainer.append(newBulletPoint);
        });
        
        $(document).on('click','.dynamic-close-point',function(){
           $(this).closest('.input-group').remove();
         });
});


/*ON HEADER  FOCUS SHOW OPACITY END JQUERY*/

/*product-slider*/


/*DETAIL PAGE*/

/*product quantity*/
function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(name) {
	let cookieArr = document.cookie.split(";");
	for(let i = 0; i < cookieArr.length; i++) {
		let cookiePair = cookieArr[i].split("=");
		if(name == cookiePair[0].trim()) {
			return decodeURIComponent(cookiePair[1]);
		}
	}
	return '';
}

function adv_search(){ if($('#searchtext').val()=="" &&  $('#p_title').val()=="" && $('#p_code').val()==""){alert("Please enter search text"); return false; }else{ return true; } }

function filltosearchbox(txt){
	$("#searchtext").val(txt);
	$("#tosearch").submit();
	
}
$("#searchtext").keyup(function(){
	$.ajax({
	type: "GET",
	url: ajax_search_autocomplete,
	data:'q='+$(this).val(),
	beforeSend: function(){
		$("#searchtext").css("background","#FFF url(LoaderIcon) no-repeat 565px");
	},
	success: function(data){
		if(data.length>0){
			$("#suggesstion-box").show();
			$("#suggesstion").html(data);
			$("#searchtext").css("background","#FFF");
		}else{
			$("#suggesstion-box").hide();
		}
	}
	});
});

$(".suggesstion-close").click(function(){
	$("#suggesstion-box").hide();
		
});
$(document).click(function(){
	$("#suggesstion-box").hide();

		
});

$(".show_hide").on("click", function () {
        var txt = $(".moreshow").is(':visible') ? 'Read More' : 'Read Less';
        $(".show_hide").text(txt);
        $('.moreshow').toggleClass('hideli');
});


$("#price_min").mouseup(function(){
	//$("#product_price" ).val($("#price_min").val() + " to " + $("#price_max").val());
	price_range();
	price_change();
	//$('#page').val("");
	//$("#search_frm").submit();
});
$("#price_max").mouseup(function(){
	//$("#product_price" ).val($("#price_min").val() + " to " + $("#price_max").val());
	price_range();
	
	//$('#page').val("");
	//$("#search_frm").submit();
});

function price_range(){
	$("#product_price" ).html($("#price_min").val() + " to " + $("#price_max").val());
	$("#product_price" ).val($("#price_min").val() + " to " + $("#price_max").val());
	$("#hidden_price" ).val($("#price_min").val() + " to " + $("#price_max").val());
	price_change();
}

$("#discount_min").mouseup(function(){
	//$("#product_discount" ).val($("#discount_min").val() + " to " + $("#discount_max").val());
	discount_range();
	
});
$("#discount_max").mouseup(function(){
	//$("#product_discount" ).val($("#discount_min").val() + " to " + $("#discount_max").val());
	discount_range();
	discount_change();
});

function discount_range(){
	$("#product_discount" ).html($("#discount_min").val() + " to " + $("#discount_max").val());
	$("#product_discount" ).val($("#discount_min").val() + " to " + $("#discount_max").val());
	$("#hidden_discount" ).val($("#discount_min").val() + " to " + $("#discount_max").val());
	discount_change();
}

$("#size_min").mouseup(function(){
	//$("#product_size" ).val($("#size_min").val() + " to " + $("#size_max").val());
	size_range();
	size_change();
	//$('#page').val("");
	//$("#search_frm").submit();
});
$("#size_max").mouseup(function(){
	//$("#product_size" ).val($("#size_min").val() + " to " + $("#size_max").val());
	size_range();
	
	//$('#page').val("");
	//$("#search_frm").submit();
});

function size_range(){
	$("#product_size" ).html($("#size_min").val() + " to " + $("#size_max").val());
	$("#product_size" ).val($("#size_min").val() + " to " + $("#size_max").val());
	$("#hidden_size" ).val($("#size_min").val() + " to " + $("#size_max").val());
	size_change();
}

function addtowish(t){t="#"+t;var a=$(t).attr("data-action");"2"==a?""!=$(t).attr("data-url")&&($.ajax({type:"POST",url:$(t).attr("data-url"),data:"",success:function(t){$("#wishquantity").text(t)}}),$(t).addClass("addedtowish"),$(t).removeClass("addtowish"),$(t).attr("data-action","1")):""!=$(t).attr("removeurl")&&($.ajax({type:"POST",url:$(t).attr("removeurl"),data:"",success:function(t){$("#wishquantity").text(t)}}),$(t).removeClass("addedtowish"),$(t).addClass("addtowish"),$(t).attr("data-action","2"))}
$("#addtowishlist").click(function(){$(this).attr("disabled","disabled"),$.ajax({type:"POST",url:$(this).attr("data-url"),data:"",success:function(t){ if(parseInt(t)>0){ $("#wishquantity").text(t);$("#messagebox").text("Added to Wish List.");}}})});
$(".updatecart").on("input",function(){""!=$(this).val()&&($("#add_more_product").attr("disabled","disabled"),$("#update_basket").attr("disabled","disabled"),$("#checkout").attr("disabled","disabled"),$("#inquiry").attr("disabled","disabled"),$.ajax({type:"POST",url:$(this).attr("url"),data:"qty="+$(this).val(),success:function(msg){$("#errordisplay").html(msg),$("#add_more_product").removeAttr("disabled"),$("#update_basket").removeAttr("disabled"),$("#checkout").removeAttr("disabled"),$("#inquiry").removeAttr("disabled")}}))});


$("#checkshipping").click(function(){
	$("#act").val("Shipping");
	$("#basket").submit();
});
$("#update_basket").click(function(){
	$("#act").val("Calculate");
	$("#basket").submit();
});
$("#checkout").click(function(){
	$("#act").val("CheckOut");
	$("#basket").submit();
});
$("#placeorder").click(function(){
	$("#act").val("PlaceOrder");
	$("#basket").submit();
});
$("#inquiry").click(function(){
	$("#act").val("inquiry");
	$("#basket").submit();
});
$("#go").click(function(){
	$("#act").val("coupon");
	$("#basket").submit();
});
$(".couponlist").click(function(){
	var radioValue = $(".couponlist:checked").val();
  	if(radioValue){
      		$('#coupon').val(radioValue);
      		$('#act').val("coupon");
      		$('#basket').submit();
  	}
});
$("#product_option input:checkbox").click(function(){
	if($("#product_option input:checkbox:checked").length >0){
		$("#option_error").html("");
	}

});

$("#addtocart").click(function(){
	var requirement="";
	if($('#cart_requirement').length){
		requirement=$('#cart_requirement').val();
		if(requirement.trim()==""){
			$("#message_error").html("Please enter customization details.");
			return false;
		}else{
			$("#message_error").html("");
		}
	}
	var colorIDs = $("#product_option input:checkbox:checked").map(function(){
		return $(this).val();
	}).get(); 
	//if($("#product_option input:checkbox:checked").length == 0){
	//	$("#option_error").html("Please select checkbox.");
	//	return false;
	//}
	//$("input[name='cart[color_id]']:checked").val()
	$.ajax({
		type:"POST",
		url:ajax_addtocart_url,
		data:"act=addtocart&color_id="+$("input[name='cart[color_id]']:checked").val()+"&qty="+$("#cartqty").val() + "&requirement=" + requirement,
		success:function(msg){
			var a=$.parseJSON(msg);
			$("#cartquantity").text(a.cartquantity);
			$("#cartquantitym").text(a.cartquantity);
			$("#messagebox").html(a.message);
			if(a.error!=""){
				$("#messagebox").html(a.error);
			}else{
				if($('#cart_requirement').length){
					$('#cart_requirement').val("");
				}
			}
			//e=document.getElementById("vpost_id");
			//for(e.options.length=0,i=0;i<a.length;i++){
			//	e.options[i]=new Option(a[i].title,a[i].post_id)
			//}
		}
	})
});
$("#addtocartfix").click(function(){
	$.ajax({
		type:"POST",
		url:ajax_addtocart_url,
		data:"act=addtocart&color_id="+$("input[name='cart[color_id]']:checked").val()+"&qty="+$("#cartqty").val(),
		success:function(msg){
			var a=$.parseJSON(msg);
			$("#cartquantity").text(a.cartquantity);
			$("#cartquantitym").text(a.cartquantity);
			$("#messagebox").html(a.message);
			if(a.error!=""){
				$("#messagebox").html(a.error);
			}
			//e=document.getElementById("vpost_id");
			//for(e.options.length=0,i=0;i<a.length;i++){
			//	e.options[i]=new Option(a[i].title,a[i].post_id)
			//}
		}
	})
});

$(".add_to_cart").click(function(){	
	var url=$(this).attr("href");
	var buttonid=$(this).attr("id");
	$.ajax({
		type:"POST",
		url:url,
		data:"",
		success:function(msg){
			var a=$.parseJSON(msg);
			$("#cartquantity").text(a.cartquantity);
			$("#cartquantitym").text(a.cartquantity);
			if(a.status==1){
	  			$("#"+buttonid).addClass("clicked");
  			}
  			if(a.status1=1){
				if(a.error!=""){
					$("#message-alert").html(a.error);
					$("#message-alert").show();
				}
			}
		}
	})
});
$("#product-other-info").on("click", '.add_to_cart', function() {
	var url=$(this).attr("href");
	var buttonid=$(this).attr("id");
	$.ajax({
		type:"POST",
		url:url,
		data:"",
		success:function(msg){
			var a=$.parseJSON(msg);
			$("#cartquantity").text(a.cartquantity);
			$("#cartquantitym").text(a.cartquantity);
			if(a.status==1){
	  			$("#"+buttonid).addClass("clicked");
  			}
  			if(a.status1=1){
				if(a.error!=""){
					$("#message-alert").html(a.error);
					$("#message-alert").show();
				}
			}
		}
	})
 });
$("#addtocustomercart").click(function(){
	var requirement="";
	if($('#cart_requirement').length){
		requirement=$('#cart_requirement').val();
		if(requirement.trim()==""){
			$("#message_error").html("Please enter customization details.");
			return false;
		}else{
			$("#message_error").html("");
		}
	}
	var colorIDs = $("#product_option input:checkbox:checked").map(function(){
		return $(this).val();
	}).get(); 
	//if($("#product_option input:checkbox:checked").length == 0){
	//	$("#option_error").html("Please select checkbox.");
	//	return false;
	//}
	//$("input[name='cart[color_id]']:checked").val()
	$.ajax({
		type:"POST",
		url:ajax_addtocustomercart_url,
		data:"act=addtocart&color_id="+$("input[name='cart[color_id]']:checked").val()+"&qty="+$("#cartqty").val() + "&requirement=" + requirement,
		success:function(msg){
			var a=$.parseJSON(msg);
			$("#cartquantity").text(a.cartquantity);
			$("#cartquantitym").text(a.cartquantity);
			$("#messagebox").html(a.message);
			if(a.error!=""){
				$("#messagebox").html(a.error);
			}else{
				if($('#cart_requirement').length){
					$('#cart_requirement').val("");
				}
			}
			//e=document.getElementById("vpost_id");
			//for(e.options.length=0,i=0;i<a.length;i++){
			//	e.options[i]=new Option(a[i].title,a[i].post_id)
			//}
		}
	})
});

//<![CDATA[
$('.optionimage').on('click', function() {
	$("#xzoom-fancy").attr("src",$(this).attr("src"));
	$("#xzoom-fancy").attr("xoriginal",$(this).attr("xoriginal"));
	
	$('#productvideo').get(0).pause();
	$("#productbigvideo").hide();
	$("#productbigimage").show();
	$("#productprice").html($(this).attr("data-price"));
	$("#productoriginalprice").html($(this).attr("data-original-price"));
	$("#producttitle").html($(this).attr("data-title"));
	$("#productdescription").html($(this).attr("data-description"));
});



$('#details-magninfier .item a').on('click', function() {
	if($(this).attr("data")=="image"){
		//$("#xzoom-fancy").attr("src",$(this).attr("href"));
		//$("#xzoom-fancy").attr("xoriginal",$(this).attr("xoriginal"));
		
		$("#productbigimage").show();
		$("#productbigvideo").hide();
		$('#productvideo').get(0).pause();
		
	}
	if($(this).attr("data")=="video"){
		$("#productbigimage").hide();
		$("#productbigvideo").show();
		$('#productvideo').get(0).play();
	}
	});
	
	


    /*STICKY HEADER*/
 $(window).scroll(function () {
    var sticky1 = $(window).scrollTop() + 1;
    if(sellwithus==1){
	    if (sticky1 > 10) {
	      $('.bottomMenu').addClass('indianshop-header animated fadeInDown');
	      $('#shop-btn').css('display','block');
	    } else {
	      $('.bottomMenu').removeClass('indianshop-header animated fadeInDown');
	      $('#shop-btn').css('display','none');
	    }
    }
});

if($('.shop-by-category').length>0){
	$('.shop-by-category').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    dots:false,
	    autoplay:false,
	    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	    responsive:{
	        320:{
	            items:2
	        },
	        481:{
	            items:3
	        },
	        769:
	        {
	        items:5
	        },
	        1025:{
	            items:4
	        },
	        1201:{
	            items:4
	        },
	        1824:{
	            items:8
	        }
	    }
	});
}

if($('.main-product-slider,.main-product-slider1').length>0){
$('.main-product-slider,.main-product-slider1').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots:false,
    autoplay:false,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
        320:{
            items:2
        },
        481:{
            items:3
        },
        769:
        {
        items:5
        },
        1025:{
            items:4
        },
        1201:{
            items:6
        },
        1824:{
            items:8
        }
    }
});

}

/*cetegoris banner slider*/
if($('.categories-slider').length>0){
$('.categories-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    dots:false,
    autoplay:false,
    responsive:{
        0:{
            items:2

        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});
}


  /*cetegoris banner slider*/
if($('#details-magninfier').length>0){  
var owl = $('#details-magninfier');
owl.owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots:false,
    autoPlay:false,
    responsive:{
        0:{
            items:4

        },
        600:{
            items:6
        },
        1000:{
            items:6
        }
    }
});
}


if($('#mobile-product-detail').length>0){
$('#mobile-product-detail').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    autoplay:false,
    smartSpeed:200,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
        320:{
            items:1
        },
        481:{
            items:1
        },
        769:
        {
        items:1
        },
        1025:{
            items:1
        },
        1201:{
            items:1
        },
        1824:{
            items:1
        }
    }
});

}
if($('.ad-owl-carousel').length>0){
          $('.ad-owl-carousel').owlCarousel({
             items:1,
             loop:true,
             margin:2,
             nav:false,
             autoplay:true,
             dots:true,
             animateOut: 'fadeOut'
         });
}

if($('.three-column-ad').length>0){
          $('.three-column-ad').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoplay:true,
		dots:true,
		 
		responsive:{
			0:{
				items:2
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
         });
}

$('.mobileoptionimage').on('click', function() {
	$("#mobilefirstslide").attr("src",$(this).attr("src"));
	$('#mobile-product-detail').trigger('to.owl.carousel', 0);
});

$('.cartoptionchange').on('change', function() {
	$("#act").val("Calculate");
	$("#basket").submit();
	return true;	
	var option=$(this).val();
	var image_id=$(this).attr("img");
	var loader_id=$(this).attr("loader");
	$("#"+image_id).hide();
	$("#"+loader_id).show();
	$.ajax({
	type: "GET",
	url: ajax_option_image,
	data:'color_id='+option,
	beforeSend: function(){
		//$("#searchtext").css("background","#FFF url(LoaderIcon) no-repeat 565px");
	},
	success: function(data){
		$("#"+image_id).attr("src",data);
		$("#"+image_id).show();
		$("#"+loader_id).hide();
	}
	});
	//$("#mobilefirstslide").attr("src",$(this).attr("src"));
	//$('#mobile-product-detail').trigger('to.owl.carousel', 0);
});
 

 
//]]>
$("#rate_1").hover(function() {
		$("#ratemsg").text("I hate it");
		$("#sratemsg").hide();
		$("#rate_1").addClass("text-primary");
		$("#rate_1").removeClass("text-secondary");
	});
	$("#rate_2").hover(function() {
		$("#ratemsg").html("I don't like it");
		$("#sratemsg").hide();
		for(var i=1;i<=2;i++){
			$("#rate_" + i).addClass("text-primary");
			$("#rate_" + i).removeClass("text-secondary");
		}
	});
	$("#rate_3").hover(function() {
		$("#ratemsg").html("It's okay");
		$("#sratemsg").hide();
		for(var i=1;i<=3;i++){
			$("#rate_" + i).addClass("text-primary");
			$("#rate_" + i).removeClass("text-secondary");
		}
	});
	$("#rate_4").hover(function() {
		$("#ratemsg").html("I like it");
		$("#sratemsg").hide();
		for(var i=1;i<=4;i++){
			$("#rate_" + i).addClass("text-primary");
			$("#rate_" + i).removeClass("text-secondary");
		}
	});
	$("#rate_5").hover(function() {
		$("#ratemsg").html("I love it");
		$("#sratemsg").hide();
		for(var i=1;i<=5;i++){
			$("#rate_" + i).addClass("text-primary");
			$("#rate_" + i).removeClass("text-secondary");
		}
	});
	$("#rate_1").mouseout(function() {
		$("#sratemsg").show();
		$("#ratemsg").text("");
		$("#rate_1").removeClass("text-primary");
		$("#rate_1").addClass("text-secondary");
	});
	$("#rate_2").mouseout(function() {
		$("#sratemsg").show();
		$("#ratemsg").html("");
		for(var i=1;i<=2;i++){
			$("#rate_" + i).removeClass("text-primary");
			$("#rate_" + i).addClass("text-secondary");
			
		}
	});
	$("#rate_3").mouseout(function() {
		$("#sratemsg").show();
		$("#ratemsg").html("");
		for(var i=1;i<=3;i++){
			$("#rate_" + i).removeClass("text-primary");
			$("#rate_" + i).addClass("text-secondary");
		}
	});
	$("#rate_4").mouseout(function() {
		$("#sratemsg").show();
		$("#ratemsg").html("");
		for(var i=1;i<=4;i++){
			$("#rate_" + i).removeClass("text-primary");
			$("#rate_" + i).addClass("text-secondary");
		}
	});
	$("#rate_5").mouseout(function() {
		$("#sratemsg").show();
		$("#ratemsg").html("");
		for(var i=1;i<=5;i++){
			$("#rate_" + i).removeClass("text-primary");
			$("#rate_" + i).addClass("text-secondary");
		}
	});
	$("#rate_1").click(function() {
		$("#ratemsg").text("I hate it");
		$("#sratemsg").text("I hate it");
		$("#rating").val(1);
		for(var i=1;i<=5;i++){
			$("#rate_" + i).removeClass("text-warning");
		}
		for(var i=1;i<=1;i++){
			$("#rate_" + i).addClass("text-warning");
		}
	});
	$("#rate_2").click(function() {
		$("#ratemsg").html("I don't like it");
		$("#sratemsg").html("I don't like it");
		$("#rating").val(2);
		for(var i=1;i<=5;i++){
			$("#rate_" + i).removeClass("text-warning");
		}
		for(var i=1;i<=2;i++){
			$("#rate_" + i).addClass("text-warning");
		}
	});
	$("#rate_3").click(function() {
		$("#ratemsg").html("It's okay");
		$("#sratemsg").html("It's okay");
		$("#rating").val(3);
		for(var i=1;i<=5;i++){
			$("#rate_" + i).removeClass("text-warning");
		}
		for(var i=1;i<=3;i++){
			$("#rate_" + i).addClass("text-warning");
		}
	});
	$("#rate_4").click(function() {
		$("#ratemsg").html("I like it");
		$("#sratemsg").html("I like it");
		$("#rating").val(4);
		for(var i=1;i<=5;i++){
			$("#rate_" + i).removeClass("text-warning");
		}
		for(var i=1;i<=4;i++){
			$("#rate_" + i).addClass("text-warning");
		}
	});
	$("#rate_5").click(function() {
		$("#ratemsg").html("I love it");
		$("#sratemsg").html("I love it");
		$("#rating").val(5);
		for(var i=1;i<=5;i++){
			$("#rate_" + i).addClass("text-warning");
		}
	});
	
/*	
(function() {
  'use strict';
 
  const stickyContainer = document.getElementById('sticky-container');
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5
  });
 
  document.querySelectorAll('[data-hide-sticky]').forEach(target => {
    observer.observe(target);
  })
 
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stickyContainer.classList.add('u-hidden');
      }
      else {
        stickyContainer.classList.remove('u-hidden');
      }
    })
  }
})()
*/

$("#basketcheckout").submit(function(){
	$("#message-alert").show();
	$(':button[type="submit"]').prop('disabled', true);
});

$("#search_frm").submit(function(){
	$(':button[type="button"]').prop('disabled', true);
	$(':button[type="submit"]').prop('disabled', true);
	$("#spinner_submitfrm").show();
});
$("#filter_frm").submit(function(){
	$(':button[type="button"]').prop('disabled', true);
	$(':button[type="submit"]').prop('disabled', true);
	$("#spinner_submitfrm").show();
});
$("#converttocod").click(function(){
	$("#message-alert").show();
	$(this).prop('disabled', true);
});

var SearchArray=new Array();

if($('#searchdata').length>0){
	if($('#searchdata').val()!=""){
		SearchArray=$('#searchdata').val().split(",");
	}
} 	


if($('#product_color').length>0){
$('#product_color').selectpicker();
}
$("#product_color").on("changed.bs.select", function(e, clickedIndex, isSelected, oldValue) {
	if(!SearchArray.includes("product_color")){
		SearchArray.push("product_color");
	}
 	//var data = {'product[product_color][]':[]};
 	//var color = $('#product_color.selectpicker').selectpicker('val');
 	//$.each(color, function(index, value) { 
  	//	data['product[product_color][]'].push(value);
	//});
	var txt=SearchArray.join();
	$('#searchdata').val(txt);
	
	$("#spinner_color").show();
	var data = $('#search_frm,#filter_frm').serialize();
	$.ajax({
		type:"POST",
		url:ajaxfiltter_data,
		data:data,
		success:function(msg){
			$("#spinner_color").hide();
			filter_update(msg, "color");
			
		}
	});
});
$("#product_material").on("changed.bs.select", function(e, clickedIndex, isSelected, oldValue) {
	if(!SearchArray.includes("material")){
		SearchArray.push("material");
	}
 	//var data = {'product[product_color][]':[]};
 	//var color = $('#product_color.selectpicker').selectpicker('val');
 	//$.each(color, function(index, value) { 
  	//	data['product[product_color][]'].push(value);
	//});
	var txt=SearchArray.join();
	$('#searchdata').val(txt);
	
	$("#spinner_material").show();
	var data = $('#search_frm,#filter_frm').serialize();
	$.ajax({
		type:"POST",
		url:ajaxfiltter_data,
		data:data,
		success:function(msg){
			$("#spinner_material").hide();
			filter_update(msg, "material");
			
		}
	});
});
$('.product-material').click(function(){
	if(!SearchArray.includes("material")){
		SearchArray.push("material");
	}
        //var data = {'product[material][]':[]};
        //$(':checkbox:checked').each(function(){
        //	data['product[material][]'].push($(this).val());
        //});
        var txt=SearchArray.join();
	$('#searchdata').val(txt);
	
        $("#spinner_material").show();
        var data = $('#search_frm,#filter_frm').serialize();
        $.ajax({
		type:"POST",
		url:ajaxfiltter_data,
		data:data,
		success:function(msg){
			$("#spinner_material").hide();
			filter_update(msg, "material");
			
		}
	});
});

function price_change(){
	//var data = {'product[price]':$("#product_price").val()};
	if(!SearchArray.includes("price")){
		SearchArray.push("price");
	}
	var txt=SearchArray.join();
	$('#searchdata').val(txt);
	
	$("#spinner_price").show();
	var data = $('#search_frm,#filter_frm').serialize();
        $.ajax({
		type:"POST",
		url:ajaxfiltter_data,
		data:data,
		success:function(msg){
			$("#spinner_price").hide();
			filter_update(msg, "price");
			
		}
	});
}
function size_change(){
	if(!SearchArray.includes("size")){
		SearchArray.push("size");
	}
	//var data = {'product[size]':$("#product_size").val()};
	var txt=SearchArray.join();
	$('#searchdata').val(txt);
	
	$("#spinner_size").show();
	var data = $('#search_frm,#filter_frm').serialize();
        $.ajax({
		type:"POST",
		url:ajaxfiltter_data,
		data:data,
		success:function(msg){
			$("#spinner_size").hide();
			filter_update(msg, "size");
		}
	});
}

function discount_change(){
	if(!SearchArray.includes("discount")){
		SearchArray.push("discount");
	}
	var txt=SearchArray.join();
	$('#searchdata').val(txt);
	
	//var data = {'product[discount]':$("#product_discount").val()};
	$("#spinner_discount").show();
	var data = $('#search_frm,#filter_frm').serialize();
        $.ajax({
		type:"POST",
		url:ajaxfiltter_data,
		data:data,
		success:function(msg){
			$("#spinner_discount").hide();
			filter_update(msg, "discount");
		}
	});
}

function filter_update(msg, ignore){
	var a=$.parseJSON(msg);
	var tr=0;
	var option="";
	
	if(ignore!="color"){
		$("#product_color > option").each(function() {
	    		option=this.value;
	    		tr=0;
	    		$.each(a.color, function(key,value) {
			 	if(option.toLowerCase()==value.product_color.toLowerCase()){
			 		tr=1;
			 	}
			});
	    		if(tr==0){
	    			$(this).hide();
	    			//$(this).prop('selected', false);
	    		}else{
	    			$(this).show();
	    		}
		});
		$('#product_color').selectpicker('refresh');
	}
	var container="";
	if(ignore!="material"){
		$(".product-material:checkbox").each(function() {
			container=$(this).attr("container");
			option=$(this).val();
			tr=0;
			$.each(a.material, function(key,value) {
			 	if(option.toLowerCase()==value.material.toLowerCase()){
			 		tr=1;
			 	}
			});
			
			if(tr==0){
				$("#"+container).hide();
				//$(this).prop('checked', false);
			}else{
				$("#"+container).show();
				//$(this).prop('checked', true);
			}
		});
		
		
		
		$("#product_material > option").each(function() {
	    		option=this.value;
	    		tr=0;
	    		$.each(a.material, function(key,value) {
			 	if(option.toLowerCase()==value.material.toLowerCase()){
			 		tr=1;
			 	}
			});
	    		if(tr==0){
	    			$(this).hide();
	    		}else{
	    			$(this).show();
	    		}
		});
		$('#product_material').selectpicker('refresh');
	}
	if(ignore!="price"){
		$('#price_min').attr("value",a.price.min);
		$('#price_min').attr("min",a.price.min);
		$('#price_min').attr("max",a.price.max);
		$('#price_max').attr("value",a.price.max);
		$('#price_max').attr("min",a.price.min);
		$('#price_max').attr("max",a.price.max);
		$('#hidden_price').val(a.price.min+" to "+a.price.max);
		$('#product_price').html(a.price.min+" to "+a.price.max);
		
	}
	if(ignore!="size"){
		$('#size_min').attr("value",a.size.min);
		$('#size_min').attr("min",a.size.min);
		$('#size_min').attr("max",a.size.max);
		$('#size_max').attr("value",a.size.max);
		$('#size_max').attr("min",a.size.min);
		$('#size_max').attr("max",a.size.max);
		$('#hidden_size').val(a.size.min+" to "+a.size.max);
		$('#product_size').html(a.size.min+" to "+a.size.max);
	}
	if(ignore!="discount"){
		$('#discount_min').attr("value",a.discount.min);
		$('#discount_min').attr("min",a.discount.min);
		$('#discount_min').attr("max",a.discount.max);
		$('#discount_max').attr("value",a.discount.max);
		$('#discount_max').attr("min",a.discount.min);
		$('#discount_max').attr("max",a.discount.max);
		$('#hiden_discount').val(a.discount.min+" to "+a.discount.max);
		$('#product_discount').html(a.discount.min+" to "+a.discount.max);
	}
}

function filter_init(msg, ignore){
	var a=$.parseJSON(msg);
	var tr=0;
	var option="";
	$.each(a.color, function(key,value) {
		$("#product_color").append('<option value="'+value.product_color+'">' + value.product_color + '</option>');
	});
	$("#product_color").selectpicker("refresh");
	$.each(a.material, function(key,value) {
		$("#product_material").append('<option value="'+value.material+'">' + value.material + '</option>');
	});
	$("#product_material").selectpicker("refresh");
	
	$('#price_min').attr("value",a.price.min);
	$('#price_min').attr("min",a.price.min);
	$('#price_min').attr("dmin",a.price.min);
	$('#price_min').attr("max",a.price.max);
	$('#price_min').attr("dmax",a.price.max);
	$('#price_max').attr("value",a.price.max);
	$('#price_max').attr("min",a.price.min);
	$('#price_max').attr("dmin",a.price.min);
	$('#price_max').attr("max",a.price.max);
	$('#price_max').attr("dmax",a.price.max);
	$('#hidden_price').val(a.price.min+" to "+a.price.max);
	$('#product_price').html(a.price.min+" to "+a.price.max);
	
	$('#size_min').attr("value",a.size.min);
	$('#size_min').attr("min",a.size.min);
	$('#size_min').attr("dmin",a.size.min);
	$('#size_min').attr("max",a.size.max);
	$('#size_min').attr("dmax",a.size.max);
	$('#size_max').attr("value",a.size.max);
	$('#size_max').attr("min",a.size.min);
	$('#size_max').attr("dmin",a.size.min);
	$('#size_max').attr("max",a.size.max);
	$('#size_max').attr("dmax",a.size.max);
	$('#hidden_size').val(a.size.min+" to "+a.size.max);
	$('#product_size').html(a.size.min+" to "+a.size.max);
	
	$('#discount_min').attr("value",a.discount.min);
	$('#discount_min').attr("min",a.discount.min);
	$('#discount_min').attr("dmin",a.discount.min);
	$('#discount_min').attr("max",a.discount.max);
	$('#discount_min').attr("dmax",a.discount.max);
	$('#discount_max').attr("value",a.discount.max);
	$('#discount_max').attr("min",a.discount.min);
	$('#discount_max').attr("dmin",a.discount.min);
	$('#discount_max').attr("max",a.discount.max);
	$('#discount_max').attr("dmax",a.discount.max);
	$('#hidden_discount').val(a.discount.min+" to "+a.discount.max);
	$('#product_discount').html(a.discount.min+" to "+a.discount.max);
	
	
}

$('.reset').click(function(){
	$("#product_sorting > option").prop('selected', false);
	
	$('#price_min').attr("min",$('#price_min').attr("dmin"));
	$('#price_min').attr("max",$('#price_min').attr("dmax"));
	
	$('#price_max').attr("min",$('#price_max').attr("dmin"));
	$('#price_max').attr("max",$('#price_max').attr("dmax"));
	
	$('#price_min').val($('#price_min').attr("dmin"));
	$('#price_max').val($('#price_max').attr("dmax"));
	
	$('#product_price').val($('#price_min').attr("dmin")+" to "+$('#price_max').attr("dmax"));
	$('#product_price').html($('#price_min').attr("dmin")+" to "+$('#price_max').attr("dmax"));
	$('#hidden_price').val("");
	
	
	$('#size_min').attr("min",$('#size_min').attr("dmin"));
	$('#size_min').attr("max",$('#size_min').attr("dmax"));
	
	$('#size_max').attr("min",$('#size_max').attr("dmin"));
	$('#size_max').attr("max",$('#size_max').attr("dmax"));
	
	$('#size_min').val($('#size_min').attr("dmin"));
	$('#size_max').val($('#size_max').attr("dmax"));
	$('#product_size').val($('#size_min').attr("dmin")+" to "+$('#size_max').attr("dmax"));
	$('#product_size').html($('#size_min').attr("dmin")+" to "+$('#size_max').attr("dmax"));
	$('#hidden_size').val("");
	
	
	$('#discount_min').attr("min",$('#discount_min').attr("dmin"));
	$('#discount_min').attr("max",$('#discount_min').attr("dmax"));
	
	$('#discount_max').attr("min",$('#discount_max').attr("dmin"));
	$('#discount_max').attr("max",$('#discount_max').attr("dmax"));
	
	
	$('#discount_min').val($('#discount_min').attr("dmin"));
	$('#discount_max').val($('#discount_max').attr("dmax"));
	$('#product_discount').val($('#discount_min').attr("dmin")+" to "+$('#discount_max').attr("dmax"));
	$('#product_discount').html($('#discount_min').attr("dmin")+" to "+$('#discount_max').attr("dmax"));
	$('#hidden_discount').val("");
	
	$(".material-checkbox").show();
	$(".product-material").prop('checked', false);
	
	$("#product_color > option").show();
	$("#product_color > option").prop('selected', false);
	$('#product_color').selectpicker('refresh');
	SearchArray=[];
	$('#searchdata').val("");
	
});

$("#search-box").keyup(function(){
	$.ajax({
	type: "GET",
	url: ajax_autocomplete,
	data:'code='+$(this).val(),
	beforeSend: function(){
		$("#search-box").css("background","#FFF url(LoaderIcon) no-repeat 565px");
	},
	success: function(data){
		if(data.length>0){
			$("#code-suggesstion-box").show();
			$("#code-suggesstion").html(data);
			$("#search-box").css("background","#FFF");
		}else{
			$("#code-suggesstion-box").hide();
		}
	}
	});
});
function filltosearchbox(txt){
	$("#search-box").val(txt);
	$("#code-suggesstion-box").hide();
	//$("#search_frm").submit();
}
$(document).on('click','.refund_to',function(){
	if($(this).prop('checked')){
		if($(this).val()=="bank"){
			$("#bankdetail").show();
		}else{
			$("#bankdetail").hide();
		}
	}
});
$(document).on('click','#edit_address',function(){
	$("#orderaddress").hide();
	$("#pickupaddress").show();
});

      
if($('#scroller,#vert-scroller').length>0){if($("#scroller,#vert-scroller")[0].scrollWidth>$("#scroller,#vert-scroller")[0].offsetWidth){$(".nav-next").show();} else {$(".nav-next").hide();} const element = document.querySelector("#scroller,#vert-scroller"); element.addEventListener('wheel', (event) => {event.preventDefault(); element.scrollBy({left: event.deltaY < 0 ? -30 : 30,});}); (function($) {$("#scroller,#vert-scroller").on('scroll', function() {$val = $(this).scrollLeft(); if($(this).scrollLeft() + $(this).innerWidth()>=$(this)[0].scrollWidth){$(".nav-next").hide();} else {$(".nav-next").show();} if($val == 0){$(".nav-prev").hide();} else {$(".nav-prev").show();}}); $(".nav-next").on("click", function(){$("#scroller,#vert-scroller").animate( { scrollLeft: '+=160' }, 1000);}); $(".nav-prev").on("click", function(){$("#scroller,#vert-scroller").animate( { scrollLeft: '-=160' }, 1000);});})(jQuery); }
      
 $(".allow_numeric").on("input", function(evt) {
   var self = $(this);
   self.val(self.val().replace(/\D/g, ""));
   if ((evt.which < 48 || evt.which > 57)) 
   {
     evt.preventDefault();
   }
 }); 
 
 $("#category_id").change(function(){
 	$("#act").val("");
 	$("#subcat").submit();
	  
});
$(".filterradio").on("change", function() { 
	//var val = $(this).attr("data-class"); 
	var val = $(this).val(); 
	$(".allshow").hide();
	$('.' + val).show();        
});
$("#showstep2").on("click", function() { 
	$("#step1").addClass("d-none");
	$("#step2").removeClass("d-none");
	$("#step").val(2);
});
$("#showstep1").on("click", function() { 
	$("#step1").removeClass("d-none");
	$("#step2").addClass("d-none");
	$("#step").val(1);
});
function search_fill(txt){
	if(txt!=''){
		$("#searchtext").val(txt);
	 	$("#tosearch").submit();
 	}
}
 
$("#add_more_blog").click(function(){
	$(".append-fluid").append('<div class="col-xl-6  col-lg-6  col-md-6  col-xs-12  col-sm-12"><div class="form-group mb-2"><label class="fs-14">Image Title</label><input type="text" name="news[img_alt][]" placeholder="Image Title" class="form-control rounded-0"></div></div><div class="col-xl-6  col-lg-6 col-md-6  col-xs-12  col-sm-12 pe-xl-0"><div class="form-group mb-2"><label class="fs-14">Upload Images</label><input type="file" name="news[image][]" placeholder="Image" class="form-control rounded-0"></div></div>');
});
$("#add_more_newblog").click(function(){
	$(".append-fluid").append('<div class="col-xl-6  col-lg-6  col-md-6  col-xs-12  col-sm-12"><div class="form-group mb-2"><label class="fs-14">Image Title</label><input type="text" name="blog[img_alt][]" placeholder="Image Title" class="form-control rounded-0"></div></div><div class="col-xl-6  col-lg-6 col-md-6  col-xs-12  col-sm-12 pe-xl-0"><div class="form-group mb-2"><label class="fs-14">Upload Images</label><input type="file" name="blog[image][]" placeholder="Image" class="form-control rounded-0"></div></div>');
});
function vendor_change(){
	$("#act").val("change");
	$("#frmproduct").submit();
}
$("#product_affiliate").click(function(){
	if($(this).is(':checked')){
		$(".affiliate").show();
	}else{
		$(".affiliate").hide();
	}
});
$("#add_more_image").click(function(){$("#add_more").append("<div class='row'><div class='col-xl-6  col-lg-6  col-md-6  col-xs-12  col-sm-12 '><div class='form-group mb-2'><label for='inputEmail' class='col-sm-4 col-md-3 control-label'>Image</label><input type='text' name='product[img_alt][]' placeholder='Image Title' class='form-control rounded-0'></div></div><div class='col-xl-6  col-lg-6 col-md-6  col-xs-12  col-sm-12'><div class='form-group mb-2'><label class='fs-14'>Upload Images</label><input type='file' name='product[image][]' placeholder='Image' class='form-control rounded-0'></div></div></div>")});
$("#add_more_set_image").click(function(){$("#add_more_set").append("<div class='row'><div class='col-xl-6  col-lg-6  col-md-6  col-xs-12  col-sm-12 '><div class='form-group mb-2'><label for='inputEmail' class='col-sm-4 col-md-3 control-label'>Image</label><input type='text' name='product[set_img_alt][]' placeholder='Image Title' class='form-control rounded-0'></div></div><div class='col-xl-6  col-lg-6 col-md-6  col-xs-12  col-sm-12'><div class='form-group mb-2'><label class='fs-14'>Upload Images</label><input type='file' name='product[set_image][]' placeholder='Image' class='form-control rounded-0'></div></div></div>")});
$('.checkAll').click(function(e){
	var table= $(e.target).closest('table');
	$('.checkbox',table).prop('checked',this.checked);
	$('.checkbox',table).prop('checked',this.checked);
});

if($('#hooks-sale,#treding-hooks').length>0){
$('#hooks-sale,#treding-hooks').owlCarousel({loop:true,margin:10,nav:true,autoPlay:true,navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],dots:false,responsive:{0:{items:2},600:{items:3},1000:{items:5}}});
}

$('.selectAll').click(function(e){
	if($(this).val()==1){
		$("#selectAll").val(0);
		$("#selectAll").html("Select All");
		$("#selectAll1").val(0);
		$("#selectAll1").html("Select All");
		$('.checkbox').prop('checked',false);
	}else{
		$("#selectAll").val(1);
		$("#selectAll").html("Unselect All");
		$("#selectAll1").val(1);
		$("#selectAll1").html("Unselect All");
		$('.checkbox').prop('checked',true);
	}
});
if($('#product-customize').length>0){
	$('#product-customize').owlCarousel({
		loop:false,
	    margin:5,
	    nav:true,
	    dots:false,
	    autoPlay:false,
	    responsive:{
	        0:{
	            items:4
	
	        },
	        600:{
	            items:4
	        },
	        1000:{
	            items:4
	        }
	    }
	});
	$('#product-customize .item a').on('click', function() {
		if($(this).attr("data")=="image"){
			$("#productbigimage").attr("src",$(this).attr("href"));
			return false ;
		}
	});
	$('.product-option-image').on('click', function() {
		$("#productbigimage").attr("src",$(this).attr("src"));
	});
}

$("#price").keyup(function(){ 
	var amount = 0;
	var shipping=parseFloat($("#shipping").val());
	var sub_total=parseFloat($(this).val())*parseFloat($("#quantity").val());
	$("#sub_total").val(sub_total.toFixed(2));
	amount=sub_total + shipping;
	$("#amount").val(amount.toFixed(2));
});

$("#quantity").keyup(function(){ 
	var amount = 0;
	var shipping=parseFloat($("#shipping").val());
	var sub_total=parseFloat($(this).val())*parseFloat($("#price").val());
	$("#sub_total").val(sub_total.toFixed(2));
	amount=sub_total + shipping;
	$("#amount").val(amount.toFixed(2));
});

$("#sub_total").keyup(function(){ 
	var amount = 0;
	var shipping=parseFloat($("#shipping").val());
	var price=parseFloat($(this).val())/parseFloat($("#quantity").val());
	$("#price").val(price.toFixed(2));
	amount=parseFloat($(this).val()) + shipping;
	$("#amount").val(amount.toFixed(2));
});

$("#shipping").keyup(function(){ 
	var amount = 0;
	var shipping=parseFloat($(this).val());
	var sub_total=parseFloat($("#price").val())*parseFloat($("#quantity").val());
	$("#sub_total").val(sub_total.toFixed(2));
	amount=sub_total + shipping;
	$("#amount").val(amount.toFixed(2));
});

$("#amount").keyup(function(){ 
	var amount = parseFloat($(this).val());
	var shipping=parseFloat($("#shipping").val());
	var sub_total = amount - shipping;
	var price=sub_total / parseFloat($("#quantity").val());
	$("#price").val(price.toFixed(2));

});
$("#customization").click(function(){ 
	location.href=$(this).val() + $('input[name="cart[color_id]"]:checked').val();

});
$("#pcategory_id").change(function(){
	$.ajax({type:"POST",url:ajax_url,data:"type=product&category_id="+$("#pcategory_id").val(),success:function(t){
		var a=jQuery.parseJSON(t);
		e=document.getElementById("post_id");
		for(e.options.length=0,i=0; i < a.length;i++){
			e.options[i]=new Option(a[i].title,a[i].post_id)
		}
	}});
});
$("#vcategory_id").change(function(){
	$.ajax({type:"POST",url:ajax_url,data:"type=vendor_product&category_id="+$("#vcategory_id").val(),success:function(t){
		var a=$.parseJSON(t);
		e=document.getElementById("vpost_id");
		for(e.options.length=0,i=0;i<a.length;i++){
		e.options[i]=new Option(a[i].title,a[i].post_id);
		}
	}});
});

$("#post_id").change(function(){
	$.ajax({type:"POST",url:ajax_url,data:"type=color&post_id="+$("#post_id").val(),success:function(t){
		$("#color_list").html(t);
	}});
});
$("#vpost_id").change(function(){
	$.ajax({type:"POST",url:ajax_url,data:"type=vendor_color&post_id="+$("#vpost_id").val(),success:function(t){
		$("#color_list").html(t);
	}})
});
$('.moreless-button').click(function() {
	$('.moretext').slideToggle();
	if ($('.moreless-button').text() == "Read more") {
		$(this).text("Read less")
	} else {
		$(this).text("Read more")
	}
});

$("#uploadForm").on('submit', function(e){
	e.preventDefault();
	var error="";
	$("#uploadStatus").html('');
	if($("#field").val()==""){
		error+="Please select field.<br>";
	}
	if($("#file").val()==""){
		error+="Please select excel file.<br>";
	}
	if($("#field").val()=="image"){
	        if($("#zip").val()==""){
	        	error+="Please select zip file.<br>";
	        }
	}
	
	if(error!=""){
		$("#uploadStatus").html('<p style="color:#EA4335;">'+error+'</p>');
		$("#toolboxmsg").html("")
		return false
	}
	$.ajax({
	    xhr: function() {
	        var xhr = new window.XMLHttpRequest();
	        xhr.upload.addEventListener("progress", function(evt) {
	            if (evt.lengthComputable) {
	                var percentComplete = parseInt((evt.loaded / evt.total) * 100);
	                $(".progress-bar").width(percentComplete + '%');
	                $(".progress-bar").html(percentComplete+'%');
	            }
	        }, false);
	        return xhr;
	    },
	    type: 'POST',
	    url: ajax_option_field_update,
	    data: new FormData(this),
	    contentType: false,
	    cache: false,
	    processData:false,
	    beforeSend: function(){
	        $(".progress-bar").width('0%');
	        $('#uploadStatus').html('<img src="https://www.indianshelf.in/views/themes/template-2022/assets/images/loader.gif"/>');
	    },
	    error:function(){
	        $('#uploadStatus').html('<p style="color:#EA4335;">File upload failed, please try again.</p>');
		$("#toolboxmsg").html("");
	    },
	    success: function(resp){
	    
	        if(resp == 'ok'){
	        	$('#uploadForm')[0].reset();
	            	$('#uploadStatus').html('<p style="color:#28A74B;">File has uploaded successfully!</p>');
	        }else{
	        	$('#uploadStatus').html('<p style="color:#EA4335;">'+resp+'</p>');
	    		$("#toolboxmsg").html("");
	        }
	    }
	});
});
	
// File type validation
$("#ajaxexcelfile").change(function(){
	var allowedTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
	var file = this.files[0];
	var fileType = file.type;
	if(!allowedTypes.includes(fileType)){
	    alert('Please select a valid file (MS Excel).');
	    $("#ajaxexcelfile").val('');
	    return false;
	}
});
$("#ajaxzip").change(function(){
	var allowedTypes = ['application/zip', 'application/octet-stream', 'application/x-zip-compressed', 'multipart/x-zip'];
	var file = this.files[1];
	var fileType = file.type;
	if(!allowedTypes.includes(fileType)){
	    alert('Please select a valid file (.zip).');
	    $("#ajaxzip").val('');
	    return false;
	}
});
$(".increaseQty").on('click', function(){
	var $parentElm = $(this).parents(".qtySelector");
	$(this).addClass("clicked");
	setTimeout(function(){
		$(".clicked").removeClass("clicked");
	},100);
	var value = $parentElm.find(".qtyValue").val();
	value++;
	$parentElm.find(".qtyValue").val(value);
});
$(".decreaseQty").on('click', function(){
	var $parentElm = $(this).parents(".qtySelector");
	$(this).addClass("clicked");
	setTimeout(function(){
		$(".clicked").removeClass("clicked");
	},100);
	var value = $parentElm.find(".qtyValue").val();
	value--;
	$parentElm.find(".qtyValue").val(value);
});
$("#bannerFrm").on('submit', function(e){
	e.preventDefault();
	var myModalEl = document.getElementById('uploadCover');
	var modal = bootstrap.Modal.getInstance(myModalEl);
	$.ajax({
    		xhr: function() {
                	var xhr = new window.XMLHttpRequest();
                	xhr.upload.addEventListener("progress", function(evt) {
	                    	if (evt.lengthComputable) {
	                        	var percentComplete = ((evt.loaded / evt.total) * 100);
		                        $(".progress-bar").width(percentComplete + '%');
		                        $(".progress-bar").html(percentComplete+'%');
	                    	}
                	}, false);
                	return xhr;
    		},
    		type: 'POST',
    		url: $(this).attr("action"),
    		data: new FormData(this),
    		contentType: false,
	        cache: false,
	        processData:false,
	        beforeSend: function(){
	                $(".progress-bar").width('0%');
	                $('#uploadStatus1').html('<img style="position: absolute;top:18%;left: 0;right: 0;margin: 0 auto;z-index: 999999;" src="https://www.indianshelf.in/views/themes/template-2022/assets/images/loading.gif"/>');
	        },
	        error:function(){
	                $('#uploadStatus1').html('<p style="color:#EA4335;">Upload cover image failed, please try again.</p>');
	                $(".progress-bar").width('0%');
	        },
	        success: function(resp){
	        	var json = $.parseJSON(resp);
	        	if(json.message.trim() == "success"){
	        		$("#vendorbanner").attr("src",json.banner);
	                    	$('#bannerFrm')[0].reset();
	                    	$('#uploadStatus1').html('');
	                    	$(".progress-bar").width('0%');
				modal.hide();
	                }else if(json.error.trim() != ""){
	                    $('#uploadStatus1').html('<p style="color:#EA4335;">Upload cover image failed, '+ json.error.trim() +'.</p>');
	                    $(".progress-bar").width('0%');
	                }
	        }
	});
	
});
$("#photoFrm").on('submit', function(e){
	e.preventDefault();
	var myModalEl = document.getElementById('uploadProfile');
	var modal = bootstrap.Modal.getInstance(myModalEl);
	$.ajax({
    		xhr: function() {
                	var xhr = new window.XMLHttpRequest();
                	xhr.upload.addEventListener("progress", function(evt) {
	                    	if (evt.lengthComputable) {
	                        	var percentComplete = ((evt.loaded / evt.total) * 100);
		                        $(".progress-bar").width(percentComplete + '%');
		                        $(".progress-bar").html(percentComplete+'%');
	                    	}
                	}, false);
                	return xhr;
    		},
    		type: 'POST',
    		url: $(this).attr("action"),
    		data: new FormData(this),
    		contentType: false,
	        cache: false,
	        processData:false,
	        beforeSend: function(){
	                $(".progress-bar").width('0%');
	                $('#uploadStatus2').html('<img style="position: absolute;top:18%;left: 0;right: 0;margin: 0 auto;z-index: 999999;" src="https://www.indianshelf.in/views/themes/template-2022/assets/images/loading.gif"/>');
	        },
	        error:function(){
	                $('#uploadStatus2').html('<p style="color:#EA4335;">Upload profile photo failed, please try again.</p>');
	                $(".progress-bar").width('0%');
	        },
	        success: function(resp){
	        	var json = $.parseJSON(resp);
	        	if(json.message.trim() == "success"){
	        		$("#userpic").attr("src",json.banner);
	                    	$('#photoFrm')[0].reset();
	                    	$('#uploadStatus2').html('');
	                    	$(".progress-bar").width('0%');
				modal.hide();
	                }else if(json.error.trim() != ""){
	                    $('#uploadStatus2').html('<p style="color:#EA4335;">Upload cover image failed, '+ json.error.trim() +'.</p>');
	                    $(".progress-bar").width('0%');
	                }
	        }
	});
	
});

$("#companyFrm").on('submit', function(e){
	e.preventDefault();
	var myModalEl = document.getElementById('CompanyInfo');
	var modal = bootstrap.Modal.getInstance(myModalEl);
	$.ajax({
    		xhr: function() {
                	var xhr = new window.XMLHttpRequest();
                	xhr.upload.addEventListener("progress", function(evt) {
	                    	if (evt.lengthComputable) {
	                        	var percentComplete = ((evt.loaded / evt.total) * 100);
		                        $(".progress-bar").width(percentComplete + '%');
		                        $(".progress-bar").html(percentComplete+'%');
	                    	}
                	}, false);
                	return xhr;
    		},
    		type: 'POST',
    		url: $(this).attr("action"),
    		data: new FormData(this),
    		contentType: false,
	        cache: false,
	        processData:false,
	        beforeSend: function(){
	                $(".progress-bar").width('0%');
	                $('#uploadStatus3').html('<img style="position: absolute;top:18%;left: 0;right: 0;margin: 0 auto;z-index: 999999;" src="https://www.indianshelf.in/views/themes/template-2022/assets/images/loading.gif"/>');
	        },
	        error:function(){
	                $('#uploadStatus3').html('<p style="color:#EA4335;">Update company info failed, please try again.</p>');
	                $(".progress-bar").width('0%');
	        },
	        success: function(resp){
	        	var json = $.parseJSON(resp);
	        	if(json.message.trim() == "success"){
	        		$("#companyname").text(json.data.company);
	        		$("#userlocation").text(json.data.location);
	        		
	                    	//$('#photoFrm')[0].reset();
	                    	$('#uploadStatus3').html('');
	                    	$(".progress-bar").width('0%');
				modal.hide();
	               }else if(json.error.trim() != ""){
	                    $('#uploadStatus3').html('<p style="color:#EA4335;">Update company info failed, please try again.</p>');
	                    $(".progress-bar").width('0%');
	                }
	        }
	});
	
});
$("#bioFrm").on('submit', function(e){
	e.preventDefault();
	var myModalEl = document.getElementById('editBio');
	var modal = bootstrap.Modal.getInstance(myModalEl);
	$.ajax({
    		xhr: function() {
                	var xhr = new window.XMLHttpRequest();
                	xhr.upload.addEventListener("progress", function(evt) {
	                    	if (evt.lengthComputable) {
	                        	var percentComplete = ((evt.loaded / evt.total) * 100);
		                        $(".progress-bar").width(percentComplete + '%');
		                        $(".progress-bar").html(percentComplete+'%');
	                    	}
                	}, false);
                	return xhr;
    		},
    		type: 'POST',
    		url: $(this).attr("action"),
    		data: new FormData(this),
    		contentType: false,
	        cache: false,
	        processData:false,
	        beforeSend: function(){
	                $(".progress-bar").width('0%');
	                $('#uploadStatus4').html('<img style="position: absolute;top:18%;left: 0;right: 0;margin: 0 auto;z-index: 999999;" src="https://www.indianshelf.in/views/themes/template-2022/assets/images/loading.gif"/>');
	        },
	        error:function(){
	                $('#uploadStatus4').html('<p style="color:#EA4335;">Update biography failed, please try again.</p>');
	                $(".progress-bar").width('0%');
	        },
	        success: function(resp){
	        	var json = $.parseJSON(resp);
	        	if(json.message.trim() == "success"){
	        		$("#vendorabout").html(json.about);
	                    	//$('#photoFrm')[0].reset();
	                    	$('#uploadStatus4').html('');
	                    	$(".progress-bar").width('0%');
	                    	//var myModalEl = document.getElementById('editBio');
				//var modal = bootstrap.Modal.getInstance(myModalEl)
				modal.hide();
	                }else if(json.error.trim() != ""){
	                    $('#uploadStatus4').html('<p style="color:#EA4335;">Update biography failed, please try again.</p>');
	                    $(".progress-bar").width('0%');
	                }
	        }
	});
	
});
$('#vendor_add_more_images').click(function() {
	$('#addImages').append('<div class="col-xl-6  col-lg-6  col-md-6  col-xs-12  col-sm-12"><div class="form-group mb-2"><label class="fs-14">Image<span class="text-danger h6">*</span></label><input type="text" name="product[img_alt][]" placeholder="Image Title" class="form-control"></div></div><div class="col-xl-6  col-lg-6  col-md-6  col-xs-12  col-sm-12 pt-4"><div class="form-group mb-2"><input type="file" name="product[image][]" placeholder="Image" class="form-control"></div></div>')
})
$('#sameasbilling').click(function(){
	if($('#sameasbilling:checkbox:checked').length > 0){
		$("#dcompany").val($("#company").val());
		$("#dname").val($("#name").val());
		$("#daddress").val($("#address").val());
		$("#dcity").val($("#city").val());
		$("#dstate").val($("#state").val());
		$("#dzip_code").val($("#zip_code").val());
		$("#dcountry").val($("#country").val());
		$("#demail").val($("#email").val());
		$("#dphone").val($("#phone").val());
		$("#dmobile").val($("#mobile").val());
	}else{
		$("#dcompany").val("");
		$("#dname").val("");
		$("#daddress").val("");
		$("#dcity").val("");
		$("#dstate").val("");
		$("#dzip_code").val("");
		//$("#dcountry").val("");
		$("#demail").val("");
		$("#dphone").val("");
		$("#dmobile").val("");
	}
});
$(".allow_numeric").on("input", function(evt) {
	var self = $(this);
	self.val(self.val().replace(/\D/g, ""));
	if ((evt.which < 48 || evt.which > 57)){
		evt.preventDefault();
	}
}); 
$(".qunatity").keyup(function(){
	var sum=0;
	$(".qunatity" ).each(function() {
		sum += parseInt($(this).val());
	});
	$("#totalqty").text(sum);
	
});

$("#usercountry").change(function(){
	$.ajax({
		type:"POST",
		url:ajax_country_code,
		data:"country="+$(this).val(),
		success:function(msg){
			$(".country_code").html(msg);
		}
	})
});
$(".return-request").on("click", function () {
	$($(this).attr('data-text')).prop('checked',$(this).prop('checked'));
});
$("#product-other-info").on("click", "input[name='cart[color_id][]']", function() {
	var total=0;
	if($("#product-other-info input:checkbox:checked").length > 0){
		if($("#product-other-info input:checkbox:checked").length==1){
			$('#frequenty_addtocart').prop('value','Add to Cart');
		}else{
			$('#frequenty_addtocart').prop('value','Add ' + $("#product-other-info input:checkbox:checked").length + ' to Cart')
		}
		
		$("#product-other-info input:checkbox:checked").each(function(){
    			total+=parseInt($(this).attr('data-price'));
		});

		
		$('#total_price').html(total);
		$('#radio_check_active').css('display', 'block'); 
                $('#radio_check_deactive').css('display', 'none');
	}else{
		$('#total_price').html(total);
		$('#radio_check_active').css('display', 'none'); 
                $('#radio_check_deactive').css('display', 'block'); 
	}
	$("#frequenty_messagebox").html("");
});
$("#frequentybought").on("submit", function () {
	if($("#product-other-info input:checkbox:checked").length > 0){
		return true;
	}else{
		return false;
	}
});

$("#product-other-info").on('click','#frequenty_addtocart',function(){
	var colorIDs = $("#product-other-info input:checkbox:checked").map(function(){
		return $(this).val();
	}).get(); 
	$('#frequenty_addtocart').prop('disabled', true);
	$("#frequenty_messagebox").html("");
	//alert(colorIDs);
	$.ajax({
		type:"POST",
		url:ajax_addtocart_url,
		data:"act=addtocart&color_id="+colorIDs+"&qty=1",
		success:function(msg){
			var a=$.parseJSON(msg);
			$("#cartquantity").text(a.cartquantity);
			$("#cartquantitym").text(a.cartquantity);
			$("#frequenty_messagebox").html(a.message);
			if(a.error!=""){
				$("#frequenty_messagebox").html(a.error);
			}
			$('#frequenty_addtocart').prop('disabled', false);
		}
	})
	return false;
});