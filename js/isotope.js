$(function(){
	var $container = $('#rhapsodies');	
	
	$container.isotope({
		itemSelector : '.rhapsody',
        masonry : {
          columnWidth : 140 /* 120 */
        }
	});
	
	var isHorizontal = false;
	function changeLayoutMode($link, options){
		var wasHorizontal = isHorizontal;
		isHorizontal = $link.hasClass('horizontal');
		
		if(wasHorizontal !== isHorizontal){
			//orientation change
			var style = isHorizontal ?
					{ height: '80%', width: $container.width()} :
					{ width: 'auto'};
			// stop any animation on the container height / width
			$container.filter(':animated').stop();
			//disable transition, apply revised style
			$container.addClass('no-transition').css(style);
			setTimeout(function(){
				$container.removeClass('no-transition').isotope(options);
			}, 100);
		}else{
			$container.isotope(options);
		}
	}
	
	var $optionSets = $('#controls'),
		$optionLinks = $optionSets.find('span');
	
	$optionLinks.click(function(){
		var $this = $(this);
		// stop if already selected
		if($this.hasClass('selected')){ 
			return false; 
		}
		
		var $optionSet = $('#controls');
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');
		
		var options = {},
			key = $optionSet.attr('data-option-key'),
			value = $this.attr('data-option-value');
		
		value = value === 'false' ? false : value;
		options[key] = value;
		
		if(key === 'layoutMode' && typeof changeLayoutMode === 'function'){
			//changes in layout modes need extra login
			changeLayoutMode($this, options);
			var $footer = $("footer");
			
			if(value === "straightDown"){				
				$footer.hide();
			}else{
				$footer.show();
			}
		}else{
			//otherwise, apply new options
			$container.isotope(options);
		}
	});
});