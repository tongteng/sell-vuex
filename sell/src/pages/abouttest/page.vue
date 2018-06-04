<style lang="css" scoped>
@import './css/bootstrap.css';
@import './css/cm-overlay.css';
@import './css/style.css';
@import './css/font-awesome.css';
@import '//fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i';
@import '//fonts.googleapis.com/css?family=Arsenal:400,400i,700,700i';
@import './page.less';
</style>
<template>
	<div>
		<navheader></navheader>		
		<!-- banner -->
		<div id="home" class="banner">
			<div class="banner-agileinfo">
				<!-- header -->
				<!-- //header -->
				<div class="banner-text">
					<div class="container">
						<h1><a href="index.html">About Me</a></h1>
						<h2 class="w3ls-bnrtext"><span> I am a </span> <span> Front </span> <span>End </span> <span> Engineer </span></h2>
						<a href="#about" class="buy btn-wayra scroll">Explore my work</a>
					</div>
				</div>
			</div>
		</div>
		<!-- //banner -->
		<!-- about -->
		<div class="agile-about w3ls-section text-center" id="about">
			<div class="container">
				<h3 class="agileits-title">about me</h3>
				<div class="agileits-about-grid">
					<p>I'm tongteng.  Yes. It's me</p>
				</div>
				<a href="#contact" class="wthree- about-link scroll">hire me</a>
			</div>
		</div>
		<!-- //about -->
		<!-- about-bottom -->
		<div class="agileits-about-btm">
			<div class="container">
				<div class="w3-flex">
				<div class="col-md-4 col-sm-4 col-xs-12 ab1 agileits-about-grid1">
					<span class="fa fa-trophy" aria-hidden="true"></span>
					<h4 class="agileinfo-head">奖项</h4>
					<h5>一等奖学金</h5>
					<p>2014学年度上学期一等奖学金</p>
					<h5>一等奖学金</h5>
					<p>2014学年度上学期一等奖学金</p>
					<h5>一等奖学金</h5>
					<p>2014学年度上学期一等奖学金</p>
				</div>
				<div class="col-md-4 col-sm-4 ab1 agileits-about-grid2">
					<span class="fa fa-graduation-cap  wthree-title-list" aria-hidden="true"></span>
					<h4 class="agileinfo-head">教育</h4>
					<h5>HTML</h5>
					<p>非常niubility的水平吧</p>
					<h5>CSS</h5>
					<p>一般niubility的水平吧</p>
					<h5>JS</h5>
					<p>还行niubility的水平吧</p>
				</div>
				<div class="col-md-4 col-sm-4 ab1 agileits-about-grid3">
					<span class="fa fa-shield  wthree-title-list" aria-hidden="true"></span>
					<h4 class="agileinfo-head">经历</h4>
					<h5>新浪实习</h5>
					<p>2017.5 - 2017.12</p>
					<h5>同程实习</h5>
					<p>2017.12 - 2018.5</p>
					<h5>强迫症凑</h5>
					<p>2017.12 - 2018.5</p>
				</div>
				<div class="clearfix"></div>
				</div>
			</div>
		</div>
		<!-- //about-bottom -->
		<!-- skills -->
		<div class="agile-service w3ls-section" id="skills">
			<div class="container">
				<div class="col-md-5 w3_agileits-service-left">
					<h3 class="agileits-title">skills</h3>
					<p>想找工作，你得有点技术吧，没有错，下面的就是我的技术</p>
				</div>
				<div class="col-md-7 skills-right">
					<div class="vertical-skills  pull-right xs-center">
						<ul class="list-inline">
							<li>
								<div class="skill" style="height:100%; background:#ff9d0d;"><span class="value">100%</span></div><span class="title">HTML</span></li>
							<li>
								<div class="skill" style="height:90%; background:#03a9f4;"><span class="value">90%</span></div><span class="title">CSS</span></li>
							<li>
								<div class="skill" style="height:80%; background:#b32eca;"><span class="value">80%</span></div><span class="title">JS</span></li>
							<li>
								<div class="skill" style="height:75%; background:#009688;"><span class="value">75%</span></div><span class="title">Vue</span></li>
							<li>
								<div class="skill" style="height:85%; background:#6361f0;"><span class="value">85%</span></div><span class="title">jQuery</span></li>

						</ul>
					</div>
					
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
		<div class="w3ls-section agileits-gallery" id="gallery">
			<div class="container">
				<h3 class="agileits-title">MY work</h3>
				<div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
					<ul id="myTab" class="nav nav-tabs" role="tablist">
						<li role="presentation" class="active"><a href="#home-main" id="home-tab" role="tab" data-toggle="tab" aria-controls="home-main" aria-expanded="true">Show all</a></li>
						<li role="presentation"><a href="#learning" role="tab" id="learning-tab" data-toggle="tab" aria-controls="learning">Web design</a></li>
						<li role="presentation"><a href="#playing" role="tab" id="playing-tab" data-toggle="tab" aria-controls="playing">Photography</a></li>
						<li role="presentation"><a href="#painting" role="tab" id="painting-tab" data-toggle="tab" aria-controls="painting">Illustration</a></li>
					</ul>
					<div id="myTabContent" class="tab-content">
						<div role="tabpanel" class="tab-pane fade in active" id="home-main" aria-labelledby="home-tab">
							<div class="w3_tab_img">
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g1.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g1.jpg" alt=" " class="img-responsive" />
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>Consectetur</p>
									</div>
								</div>
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g2.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g2.jpg" alt=" " class="img-responsive" />
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>Adipiscing </p>
									</div>
								</div>
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g3.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g3.jpg" alt=" " class="img-responsive" />
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>Ullamcorper </p>
									</div>
								</div>
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g4.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g4.jpg" alt=" " class="img-responsive" />
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>Tristique</p>
									</div>
								</div>
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g5.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g5.jpg" alt=" " class="img-responsive" />
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>accumsan</p>
									</div>
								</div>
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g6.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g6.jpg" alt=" " class="img-responsive" />
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>Vulputate</p>
									</div>
								</div>
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g7.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g7.jpg" alt=" " class="img-responsive" />
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>Sodales</p>
									</div>
								</div>
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g8.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g8.jpg" alt=" " class="img-responsive" />
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>Ornare </p>
									</div>
								</div>
								<div class="clearfix"> </div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="learning" aria-labelledby="learning-tab">
							<div class="w3_tab_img">
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g2.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g2.jpg" alt=" " class="img-responsive">
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>Eleifend</p>
									</div>
								</div>
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g3.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g3.jpg" alt=" " class="img-responsive">
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>Pulvinar</p>
									</div>
								</div>
								<div class="clearfix"> </div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="playing" aria-labelledby="playing-tab">
							<div class="w3_tab_img">
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g4.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g4.jpg" alt=" " class="img-responsive">
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>Blandit</p>
									</div>
								</div>
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g1.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g1.jpg" alt=" " class="img-responsive">
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>Vivamus</p>
									</div>
								</div>
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g2.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g3.jpg" alt=" " class="img-responsive">
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>Eleifend</p>
									</div>
								</div>
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g3.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g2.jpg" alt=" " class="img-responsive">
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>Blandit</p>
									</div>
								</div>
								<div class="clearfix"> </div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="painting" aria-labelledby="painting-tab">
							<div class="w3_tab_img">
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g1.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g1.jpg" alt=" " class="img-responsive">
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>Ornare </p>
									</div>
								</div>
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g2.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g2.jpg" alt=" " class="img-responsive">
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>Pulvinar</p>
									</div>
								</div>
								<div class="col-sm-3 w3_tab_img_left">
									<div class="demo">
										<a class="cm-overlay" href="images/g3.jpg">
											<figure class="imghvr-shutter-in-out-diag-2"><img src="./images/g3.jpg" alt=" " class="img-responsive">
											</figure>
										</a>
									</div>
									<div class="agile-gallery-info">
										<h5>My project</h5>
										<p>Vulputate</p>
									</div>
								</div>
								<div class="clearfix"> </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- //menu -->
		<!-- services -->
		<!-- //services -->
		<!-- contact -->
		<div class="contact-w3-agileits w3ls-section" id="contact">
			<div class="container">
				<h3 class="agileits-title cont-w3l">给我打call吧</h3>
				<div class="contact-main-w3ls">
					<div class="col-md-6  contact-left-w3ls">
						<div class="mail contact-grid-agileinfo">
							<div class="col-md-4 col-sm-4 col-xs-4 contact-icon-wthree">
								<h4>Mail me</h4>
							</div>
							<div class="col-md-8  col-sm-8 col-xs-8 contact-text-agileinfo">
								<a href="mailto:18804621168@163.com">18804621168@163.com</a><br>
								<a href="mailto:tt19960406@icloud.com">tt19960406@icloud.com</a>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="call contact-grid-agileinfo">
							<div class="col-md-4 col-sm-4 col-xs-4 contact-icon-wthree">
								<h4>Call me</h4>
							</div>
							<div class="col-md-8 col-sm-8 col-xs-8 contact-text-agileinfo">
								<p>18616853294</p>
								<p>18804621168</p>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="contact-grid-agileinfo">
							<div class="col-md-4 col-sm-4 col-xs-4 contact-icon-wthree">
								<h4>Address</h4>
							</div>
							<div class="col-md-8 col-sm-8 col-xs-8 contact-text-agileinfo">
								<p>江苏省 睢宁县<br> 庆安镇胡巷村435号<br> 中国
								</p>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div class="contact-main">
						<div class="col-md-6 agileits-main-right">
							<form action="#" method="post" class="agile_form">
								<label class="header">Name</label>
								<div class="icon1 w3ls-name1">
									<input placeholder=" " name="first name" type="text" required="">
								</div>
								<div class="icon2">
									<label class="header">Email</label>
									<input placeholder=" " name="Email" type="email" required="">
								</div>
								<label class="header">your message</label>
								<textarea class="w3l_summary" required=""></textarea>
								<input type="submit" value="SEND">
							</form>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</div>
		<indexfooter></indexfooter>		
	</div>
</template>

<script src="./page.js"></script>
