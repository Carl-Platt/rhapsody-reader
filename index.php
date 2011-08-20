<!DOCTYPE html>
<html manifest="/cache.manifest">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<meta name="apple-mobile-web-app-capable" content="yes" />		
		<link rel="apple-touch-icon" sizes="72x72" href="i/ios/icon-ipad.png"/>		
		
		<link rel="stylesheet" type="text/css" href="css/style.css" />				
		<title>RoR Reader</title>		
		
	</head>
	<body class="overlaid">
		<header>
			<h1 id="heading"></h1>
			<div id="controls" data-option-key="layoutMode">
				<span id="show-squares" data-option-value="masonry" class='selected'></span>
				<span id="show-rows" data-option-value="straightDown"></span>
			</div>
			<div id="help">
				<img src="i/Information_icon.png" width="30px" height="30px" />
			</div>
			<ul id="languages">
				<li><a href="#english" id="english" class="selected">English</a></li>
				<li><a href="#french" id="french">Français</a></li>
				<li><a href="#afrikaans" id="afrikaans">Afrikaans</a></li>
				<li><a href="#zulu" id="zulu">Zulu</a></li>
				<li><a href="#italian" id="italian">Italiano</a></li>
				<li><a href="#spanish" id="spanish">Español</a></li>			
				<li><a href="#swahili" id="swahili">Kiswahili</a></li>
				<li><a href="#lingala" id="lingala">Lingala</a></li>
			</ul>
		</header>
		<div class="clear">.</div>
		<ul id="rhapsodies"  data-option-key="layoutMode">
		<?php 			
			$info = "More information will be added here as we go along.";
			$date = getdate();
			
			$lastday_ = mktime(0, 0, 0, $date['mon'], 0, $date['year']);
			$lastday = strftime("%d", $lastday_);
			
			for($i = 1; $i <= $lastday; $i++){
				echo "<li class='rhapsody' data-category='day'>
						<a id='" .$i. "' tooltip-info='" . $info ."' class='day' href='http://www.rhapsodyofrealities.org/rordocs/dailyror/english/ror". $i .".pdf'>
							
							<span class='info'>
								<span class='month'></span> ". $i ."
							</span>
							<span class='content'></span>
						</a>	
					  </li> ";
			}
		?>
		</ul>
		<div class="clear">.</div>
		<div id="pdf">
			
		</div>
		
		<!-- 
		<div id="footer">
			<span id="copyright">
			© 2011 <a href="http://emile.senga.cd">Emile Senga</a>
			</span>
			<div id="disclaimer">
				<ol>
					<li>This application is in alpha stage, therefore <b>*major*</b> components are missing. It may also contain bugs, and many things may not work as expected. Please forward any issues that you pick up to emile@senga.cd so I can fix them. That is all.</li>
					<li>Rhapsodies are downloaded as they're made available from <a href='http://www.rhapsodyofrealities.org'>www.rhapsodyofrealities.org</a>, so please be aware the current rhapsody in your language <b>*may not*</b> be available.</li>
				</ol>
			</div>
		</div>
		-->

		<div class="overlay">
		  <div class="wrap">
		    <!-- Your dialog markup -->
		    <div id="my-dialog">
		      <h1>Loading</h1>
		      <img src="i/ajax-loader.gif" />
		      <p></p>		      
		    </div>
		  </div>
		</div>

		<script 
			src="https://www.google.com/jsapi?key=ABQIAAAAK9NC1o2LJFMQR3lc7kl7cRSiXgiVJE0MJkb707HvEnolqo2UBBSd9tzd1SOTnyVVMhE9HrUPkD2qCQ" 
			type="text/javascript">
		</script>
		<script type="text/javascript" src="js/jquery-1.6.1.min.js"></script>
		<script type="text/javascript" src="js/jquery.isotope.min.js"></script>
		<script type="text/javascript" src="js/modernizr.js"></script>
		<script type="text/javascript" src="js/js.js"></script>
		<script type="text/javascript" src="js/isotope.js"></script>
		<script type="text/javascript">
		 	google.load("language", "1");
		</script>
		<script type="text/javascript">
		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-15060745-3']);
		  _gaq.push(['_setDomainName', '.senga.cd']);
		  _gaq.push(['_trackPageview']);
		
		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();		
		</script>
		<script type="text/javascript">
			toggleOverlay();
		</script>
	</body>
</html>