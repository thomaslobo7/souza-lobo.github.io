// BLOOD COMPANY SCRIPTS


jQuery(function(){
	
	
	
	
	/*-------------------------
	Logo hover
	-------------------------*/
	jQuery(".symbol").hover(
		function(){
			jQuery('.symbol').children().addClass('hover');
			jQuery('.full-logo').addClass('hover');
			jQuery('.logo-wrapper').addClass('hover');
		}, function(){
		}
	);

	jQuery(".logo-wrapper").hover(
		function(){
		}, function(){
			jQuery('.symbol').children().removeClass('hover');
			jQuery('.full-logo').removeClass('hover');
			jQuery('.logo-wrapper').removeClass('hover');
		}
	);

	
	
	/*-------------------------
	FORCE DOWNLOAD
	-------------------------*/
	//unobtrusive .click on anchor tag's id field such that if javascript disabled href still links to image url
	jQuery( '.press_kit #press_kit a.press_link' ).click(function() {
		formSubmit( this.id );
		return false;
	});
	
	//submits form #press_kit after assigning 'download_path' to form #press_kit <input name='path' value='(download_path)'>
	function formSubmit(download_path) {
		document.getElementById("press_kit").path.value = download_path;
		document.getElementById("press_kit").submit();
		return false;
	}


	
    /*-------------------------
	EXPANDER
	-------------------------*/
	jQuery('.bio .bio_text').expander({slicePoint:400});




	/*-------------------------
	Artist Overlay Hovers
	-------------------------*/
	jQuery('section#artists .threecol').hover( 
		function() {
			jQuery(this).find(".artist_overlay").addClass("hover");		
		},
		function() {
			jQuery(this).find(".artist_overlay").removeClass("hover");
	});	
	
	
	
	
	/*-------------------------
	404 Hover
	-------------------------*/
	jQuery('section#fourohfour #error_message').hover( 
		function() {
			jQuery(this).find(".img_404").addClass("hover");		
		},
		function() {
			jQuery(this).find(".img_404").removeClass("hover");
	});	


	/*-------------------------
	Accordian +/= toggle
	-------------------------*/
	jQuery('h1.indicator').click(function(){
//		jQuery(this).parent().find('h1.indicator').toggleClass('hide');
	});


	/*-------------------------
	Social Link Hovers
	-------------------------*/
	jQuery('.artist_links li').hover( 
		function() {
			jQuery(this).find(".social_type").addClass("hover");
			jQuery(this).find(".social_link").addClass("hover");		
		},
		function() {
			jQuery(this).find(".social_type").removeClass("hover");
			jQuery(this).find(".social_link").removeClass("hover");
	});	
	
	
	
	
	/*-------------------------
	Press Kit Hovers
	-------------------------*/
	jQuery('.press_kit h1').click(function(){
		jQuery(this).parent().find("ul").slideToggle(500);	
	});
	
	/*-------------------------
	Press Kit Slide Click Fixes
	-------------------------*/
	// jQuery('.fancybox').click(function (e) {
	// 	 e.stopPropagation();
	// });
//	jQuery('.press_kit_item').click(function (e) {
//		 e.stopPropagation();
//	});

	// PHOTOSWIPE
    jQuery('.grid-images').each( function() {
        var $pic = jQuery(this),
            getItems = function() {
                var items = [];
                $pic.find('.individual-slide a').each(function() {
                    var $href   = jQuery(this).attr('href');
                    console.log($href);
                    	//$size   = jQuery(this).data('size').split('x'),
	                   	//),
	                    //$height = jQuery(this).data('height');
	                    
                    //alert($width);
                    

                    
                    //calc image size
                   var i  = jQuery(this).data('index')-1;
                   var tmpImg = new Image();
					var $width;
					var $height;
					tmpImg.src=$href; //or  document.images[i].src;
					jQuery(tmpImg).one('load',function(){
					  $width = tmpImg.width;
					  $height = tmpImg.height;
					  console.log($width+"x"+$height);
					   var item = {
	                        src : $href,
	                        w   : $width,
	                        h   : $height
	                    }
	                    items[i] = item;
	                    return false;
					});/*

                    var item = {
                        src : $href,
                        w   : $width,
                        h   : $height
                    }
                    items.push(item);
                    */
                });
                console.log(items);
                return items;

            }


            // console.log("pic", $pic)


        var items = getItems();

        //console.log("items", items)


        var $pswp = jQuery('.pswp')[0];

        $pic.on('click', '.press_kit_item', function(event) {
            event.preventDefault();

            var $index = jQuery(this).index();
            var options = {
                index: $index,
                bgOpacity: .95,
                showHideOpacity: true
            }


            // Initialize PhotoSwipe
            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
    });







	
	
});

/*-------------------------
LESS
-------------------------*/
