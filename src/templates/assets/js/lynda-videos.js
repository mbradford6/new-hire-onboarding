var titleObj = {"lessons" : []};
//localStorage.removeItem("lessons");//remove lessons if new to the site

//check the boxes you've checked off if you're not new to the site
if (localStorage.getItem("titleObj") && JSON.parse(localStorage.getItem("titleObj")).lessons.length != 0 ) {
  var elements = $('.video-title');
  var getLessons = JSON.parse(localStorage.getItem("titleObj")).lessons;
  for (var i = 0; i < elements.length; i++) {
    for (var j = 0; j < getLessons.length; j++) {
      if (getLessons[j].title == $(elements[i]).text()) {
        $(elements[i]).find('span').switchClass('icon-checkbox-unchecked', 'icon-checkbox-checked')
      }
    }
  }
}

$('.video-title').click( function () {
    if ($(this).find('span').hasClass('icon-checkbox-unchecked')) {
      $(this).find('span').fadeToggle(10, "easeOutQuart").switchClass('icon-checkbox-unchecked','icon-checkbox-checked', 1000).fadeToggle(800, "easeOutQuart");
      var videoTitle = $(this).text();
      titleObj.lessons.push({"title" : videoTitle});
      // console.log(titleObj);
      localStorage.setItem("titleObj", JSON.stringify(titleObj));
    } else {
      $(this).find('span').fadeToggle(1).switchClass('icon-checkbox-checked','icon-checkbox-unchecked', 1000).fadeToggle(10);
      var videoTitle = $(this).text();
      for (var i=0; i< titleObj.lessons.length; i++) {
        if (titleObj.lessons[i].title == videoTitle) {
          titleObj.lessons.splice(i, 1);
        }
      }
      // console.log(titleObj);
      localStorage.setItem("titleObj", JSON.stringify(titleObj));
    }
});
