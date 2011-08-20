lang = function (name, code){
	this.name = name;
	this.code = code;
};

var currentLanguage = "English";
			
var languages = new Array();
languages.push(new lang("English","en"));
languages.push(new lang("French","fr"));
languages.push(new lang("Afrikaans","af"));
languages.push(new lang("Zulu","en"));
languages.push(new lang("Italian","it"));
languages.push(new lang("Spanish","es"));
languages.push(new lang("Swahili","sw"));
languages.push(new lang("Lingala","en"));	


function init(){
	
	/* TODO: FUTURE FEATURE
	 * --------------------
	
	//set language to last used
	if(Modernizr.localstorage){
		var lang = localStorage.getItem("language");
		//if there is no language setting then set to default
		if(lang === "" || lang === null){
			//set to default
			currentLanguage = "English";
		}else{
			//otherwise set to last stored language
			currentLanguage = lang;			
			setLanguage(lang);
		}
	}else{
		//no localStorage
	}
	*/
	
    var cur_month = getMonth();
	//document.title = cur_month + " Rhapsody";
	$('#heading').text(cur_month + " Rhapsody");
	setToday();

	//set month
	var $months = $('.month');
	$months.each(function(idx, span){
	  $(span).text(cur_month);
	});
	
	
	/*
	 * Events
	 */
	$("#languages > li > a").click(function(e){
		e.preventDefault();
		
		//change selected
		var languages = $("#languages > li > a");
		languages.removeClass("selected");
		$(this).addClass("selected");
		setLanguage(this.id);
	});
	
	/*
	 * Help
	 */
	$("#help > img").click(function(){
		toggleOverlay();
		//overlay and change message
		$("#my-dialog > h1").html("About");
		$("#my-dialog > p").html("<div id='footer'>" +
			"<span id='copyright'>" +
			"© 2011 <a href='http://emile.senga.cd'>Emile Senga</a>" +
			"</span>" +
			"<div id='disclaimer'>" +
			"	<ol>" +
			"		<li>This application is in alpha stage, therefore <b>*major*</b> components are missing. It may also contain bugs, and many things may not work as expected. Please forward any issues that you pick up to emile@senga.cd so I can fix them. That is all.</li>" +
			"		<li>Rhapsodies are downloaded as they're made available from <a href='http://www.rhapsodyofrealities.org'>www.rhapsodyofrealities.org</a>, so please be aware the current rhapsody in your language <b>*may not*</b> be available.</li>" +
			"	</ol>" +
			"</div>" +
			"<input id='closeDialog' type='button' value='close' onClick='toggleOverlay();'/>" +
			"</div>");
		
	});
} 

function getMonth(){
	var date = new Date();
	var month=new Array(12);
	month[0]="January";
	month[1]="February";
	month[2]="March";
	month[3]="April";
	month[4]="May";
	month[5]="June";
	month[6]="July";
	month[7]="August";
	month[8]="September";
	month[9]="October";
	month[10]="November";
	month[11]="December";
	
	return month[date.getMonth()];
}

function setToday(){
	var days = $('.day');
	var date = new Date();
	var todayCss = {
	    'background-color' : '#ddd'
	};
	
	days.each(function(idx, anchor){
		var id = parseInt(anchor.id);
		var d = date.getDate();
		
		if(id === d){
			$(anchor).addClass("today");
			$(anchor).parent().addClass("parent_today");
		}
	});
}

function getLanguageCode(lang){
	for(var i=0; i<languages.length; i++){
		if(languages[i].name.toLowerCase() === lang.toLowerCase())
			return languages[i].code;
	}
}

/*
 * @param lang =  the language to translate to
 */
function setLanguage(lang){	 
	//Step 1: translate month to appropriate language
	var month = getMonth();
	translate(getMonth(), currentLanguage, lang );
	setLinks(lang); 
	localStorage.setItem("language", lang);
}

function setText(month){
	//get months
	var $months = $('.month');
	$months.each(function(idx, span){
	  $(span).text(month);
	});	
}

function setLinks(lang){
	var days = $('.day');
	days.each(function(idx, anchor){
		//"http://www.rhapsodyofrealities.org/rordocs/dailyror/lingala/ror14.pdf"
		$(anchor).attr("href", "http://www.rhapsodyofrealities.org/rordocs/dailyror/" + lang + "/ror" + anchor.id + ".pdf");
	});	
}

function translate(text, currentLanguage, languageToTranslateTo){
	//change current lang to proper code
	var curLangCode = getLanguageCode(currentLanguage);	
	//change future lang to proper code
	var futLangCode = getLanguageCode(languageToTranslateTo);	
	
	google.language.translate(text, curLangCode, futLangCode, function(result) {
		var translatedLang = result.translation;
		setText(translatedLang);

		//document.title = translatedLang + " Rhapsody";
		$('#heading').text(translatedLang + " Rhapsody");
    });
}

function simulateClick(el){
	var a = $(el)[0];
	var e = document.createEvent('MouseEvents');
	e.initEvent( 'click', true, true );
	a.dispatchEvent(e);
}

function toggleOverlay(){
    document.body.className = document.body.className.indexOf('overlaid') != -1 ? '' : 'overlaid';
}


$(function(){
	init();
	document.addEventListener('DOMContentLoaded', function(){
        // close when the gray part is clicked
        document.querySelector('.overlay').addEventListener('click', function(ev){
          if (/overlay|wrap/.test(ev.target.className)) toggleOverlay();
        });
    });
});
