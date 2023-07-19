/* ================================================================= O NAMA ========================================================*/ 

/*
  SlidesJS 3.0.4 http://slidesjs.com
  (c) 2013 by Nathan Searles http://nathansearles.com
  Updated: June 26th, 2013
  Apache License: http://www.apache.org/licenses/LICENSE-2.0
*/
(function(){(function(e,t,n){var r,i,s;s="slidesjs";i={width:940,height:528,start:1,navigation:{active:!0,effect:"slide"},pagination:{active:!0,effect:"slide"},play:{active:!1,effect:"slide",interval:5e3,auto:!1,swap:!0,pauseOnHover:!1,restartDelay:2500},effect:{slide:{speed:500},fade:{speed:300,crossfade:!0}},callback:{loaded:function(){},start:function(){},complete:function(){}}};r=function(){function t(t,n){this.element=t;this.options=e.extend(!0,{},i,n);this._defaults=i;this._name=s;this.init()}return t}();r.prototype.init=function(){var n,r,i,s,o,u,a=this;n=e(this.element);this.data=e.data(this);e.data(this,"animating",!1);e.data(this,"total",n.children().not(".slidesjs-navigation",n).length);e.data(this,"current",this.options.start-1);e.data(this,"vendorPrefix",this._getVendorPrefix());if(typeof TouchEvent!="undefined"){e.data(this,"touch",!0);this.options.effect.slide.speed=this.options.effect.slide.speed/2}n.css({overflow:"hidden"});n.slidesContainer=n.children().not(".slidesjs-navigation",n).wrapAll("<div class='slidesjs-container'>",n).parent().css({overflow:"hidden",position:"relative"});e(".slidesjs-container",n).wrapInner("<div class='slidesjs-control'>",n).children();e(".slidesjs-control",n).css({position:"relative",left:0});e(".slidesjs-control",n).children().addClass("slidesjs-slide").css({position:"absolute",top:0,left:0,width:"100%",zIndex:0,display:"none",webkitBackfaceVisibility:"hidden"});e.each(e(".slidesjs-control",n).children(),function(t){var n;n=e(this);return n.attr("slidesjs-index",t)});if(this.data.touch){e(".slidesjs-control",n).on("touchstart",function(e){return a._touchstart(e)});e(".slidesjs-control",n).on("touchmove",function(e){return a._touchmove(e)});e(".slidesjs-control",n).on("touchend",function(e){return a._touchend(e)})}n.fadeIn(0);this.update();this.data.touch&&this._setuptouch();e(".slidesjs-control",n).children(":eq("+this.data.current+")").eq(0).fadeIn(0,function(){return e(this).css({zIndex:10})});if(this.options.navigation.active){o=e("<a>",{"class":"slidesjs-previous slidesjs-navigation",href:"#",title:"Previous",text:"Previous"}).appendTo(n);r=e("<a>",{"class":"slidesjs-next slidesjs-navigation",href:"#",title:"Next",text:"Next"}).appendTo(n)}e(".slidesjs-next",n).click(function(e){e.preventDefault();a.stop(!0);return a.next(a.options.navigation.effect)});e(".slidesjs-previous",n).click(function(e){e.preventDefault();a.stop(!0);return a.previous(a.options.navigation.effect)});if(this.options.play.active){s=e("<a>",{"class":"slidesjs-play slidesjs-navigation",href:"#",title:"Play",text:"Play"}).appendTo(n);u=e("<a>",{"class":"slidesjs-stop slidesjs-navigation",href:"#",title:"Stop",text:"Stop"}).appendTo(n);s.click(function(e){e.preventDefault();return a.play(!0)});u.click(function(e){e.preventDefault();return a.stop(!0)});this.options.play.swap&&u.css({display:"none"})}if(this.options.pagination.active){i=e("<ul>",{"class":"slidesjs-pagination"}).appendTo(n);e.each(new Array(this.data.total),function(t){var n,r;n=e("<li>",{"class":"slidesjs-pagination-item"}).appendTo(i);r=e("<a>",{href:"#","data-slidesjs-item":t,html:t+1}).appendTo(n);return r.click(function(t){t.preventDefault();a.stop(!0);return a.goto(e(t.currentTarget).attr("data-slidesjs-item")*1+1)})})}e(t).bind("resize",function(){return a.update()});this._setActive();this.options.play.auto&&this.play();return this.options.callback.loaded(this.options.start)};r.prototype._setActive=function(t){var n,r;n=e(this.element);this.data=e.data(this);r=t>-1?t:this.data.current;e(".active",n).removeClass("active");return e(".slidesjs-pagination li:eq("+r+") a",n).addClass("active")};r.prototype.update=function(){var t,n,r;t=e(this.element);this.data=e.data(this);e(".slidesjs-control",t).children(":not(:eq("+this.data.current+"))").css({display:"none",left:0,zIndex:0});r=t.width();n=this.options.height/this.options.width*r;this.options.width=r;this.options.height=n;return e(".slidesjs-control, .slidesjs-container",t).css({width:r,height:n})};r.prototype.next=function(t){var n;n=e(this.element);this.data=e.data(this);e.data(this,"direction","next");t===void 0&&(t=this.options.navigation.effect);return t==="fade"?this._fade():this._slide()};r.prototype.previous=function(t){var n;n=e(this.element);this.data=e.data(this);e.data(this,"direction","previous");t===void 0&&(t=this.options.navigation.effect);return t==="fade"?this._fade():this._slide()};r.prototype.goto=function(t){var n,r;n=e(this.element);this.data=e.data(this);r===void 0&&(r=this.options.pagination.effect);t>this.data.total?t=this.data.total:t<1&&(t=1);if(typeof t=="number")return r==="fade"?this._fade(t):this._slide(t);if(typeof t=="string"){if(t==="first")return r==="fade"?this._fade(0):this._slide(0);if(t==="last")return r==="fade"?this._fade(this.data.total):this._slide(this.data.total)}};r.prototype._setuptouch=function(){var t,n,r,i;t=e(this.element);this.data=e.data(this);i=e(".slidesjs-control",t);n=this.data.current+1;r=this.data.current-1;r<0&&(r=this.data.total-1);n>this.data.total-1&&(n=0);i.children(":eq("+n+")").css({display:"block",left:this.options.width});return i.children(":eq("+r+")").css({display:"block",left:-this.options.width})};r.prototype._touchstart=function(t){var n,r;n=e(this.element);this.data=e.data(this);r=t.originalEvent.touches[0];this._setuptouch();e.data(this,"touchtimer",Number(new Date));e.data(this,"touchstartx",r.pageX);e.data(this,"touchstarty",r.pageY);return t.stopPropagation()};r.prototype._touchend=function(t){var n,r,i,s,o,u,a,f=this;n=e(this.element);this.data=e.data(this);u=t.originalEvent.touches[0];s=e(".slidesjs-control",n);if(s.position().left>this.options.width*.5||s.position().left>this.options.width*.1&&Number(new Date)-this.data.touchtimer<250){e.data(this,"direction","previous");this._slide()}else if(s.position().left<-(this.options.width*.5)||s.position().left<-(this.options.width*.1)&&Number(new Date)-this.data.touchtimer<250){e.data(this,"direction","next");this._slide()}else{i=this.data.vendorPrefix;a=i+"Transform";r=i+"TransitionDuration";o=i+"TransitionTimingFunction";s[0].style[a]="translateX(0px)";s[0].style[r]=this.options.effect.slide.speed*.85+"ms"}s.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){i=f.data.vendorPrefix;a=i+"Transform";r=i+"TransitionDuration";o=i+"TransitionTimingFunction";s[0].style[a]="";s[0].style[r]="";return s[0].style[o]=""});return t.stopPropagation()};r.prototype._touchmove=function(t){var n,r,i,s,o;n=e(this.element);this.data=e.data(this);s=t.originalEvent.touches[0];r=this.data.vendorPrefix;i=e(".slidesjs-control",n);o=r+"Transform";e.data(this,"scrolling",Math.abs(s.pageX-this.data.touchstartx)<Math.abs(s.pageY-this.data.touchstarty));if(!this.data.animating&&!this.data.scrolling){t.preventDefault();this._setuptouch();i[0].style[o]="translateX("+(s.pageX-this.data.touchstartx)+"px)"}return t.stopPropagation()};r.prototype.play=function(t){var n,r,i,s=this;n=e(this.element);this.data=e.data(this);if(!this.data.playInterval){if(t){r=this.data.current;this.data.direction="next";this.options.play.effect==="fade"?this._fade():this._slide()}e.data(this,"playInterval",setInterval(function(){r=s.data.current;s.data.direction="next";return s.options.play.effect==="fade"?s._fade():s._slide()},this.options.play.interval));i=e(".slidesjs-container",n);if(this.options.play.pauseOnHover){i.unbind();i.bind("mouseenter",function(){return s.stop()});i.bind("mouseleave",function(){return s.options.play.restartDelay?e.data(s,"restartDelay",setTimeout(function(){return s.play(!0)},s.options.play.restartDelay)):s.play()})}e.data(this,"playing",!0);e(".slidesjs-play",n).addClass("slidesjs-playing");if(this.options.play.swap){e(".slidesjs-play",n).hide();return e(".slidesjs-stop",n).show()}}};r.prototype.stop=function(t){var n;n=e(this.element);this.data=e.data(this);clearInterval(this.data.playInterval);this.options.play.pauseOnHover&&t&&e(".slidesjs-container",n).unbind();e.data(this,"playInterval",null);e.data(this,"playing",!1);e(".slidesjs-play",n).removeClass("slidesjs-playing");if(this.options.play.swap){e(".slidesjs-stop",n).hide();return e(".slidesjs-play",n).show()}};r.prototype._slide=function(t){var n,r,i,s,o,u,a,f,l,c,h=this;n=e(this.element);this.data=e.data(this);if(!this.data.animating&&t!==this.data.current+1){e.data(this,"animating",!0);r=this.data.current;if(t>-1){t-=1;c=t>r?1:-1;i=t>r?-this.options.width:this.options.width;o=t}else{c=this.data.direction==="next"?1:-1;i=this.data.direction==="next"?-this.options.width:this.options.width;o=r+c}o===-1&&(o=this.data.total-1);o===this.data.total&&(o=0);this._setActive(o);a=e(".slidesjs-control",n);t>-1&&a.children(":not(:eq("+r+"))").css({display:"none",left:0,zIndex:0});a.children(":eq("+o+")").css({display:"block",left:c*this.options.width,zIndex:10});this.options.callback.start(r+1);if(this.data.vendorPrefix){u=this.data.vendorPrefix;l=u+"Transform";s=u+"TransitionDuration";f=u+"TransitionTimingFunction";a[0].style[l]="translateX("+i+"px)";a[0].style[s]=this.options.effect.slide.speed+"ms";return a.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){a[0].style[l]="";a[0].style[s]="";a.children(":eq("+o+")").css({left:0});a.children(":eq("+r+")").css({display:"none",left:0,zIndex:0});e.data(h,"current",o);e.data(h,"animating",!1);a.unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd");a.children(":not(:eq("+o+"))").css({display:"none",left:0,zIndex:0});h.data.touch&&h._setuptouch();return h.options.callback.complete(o+1)})}return a.stop().animate({left:i},this.options.effect.slide.speed,function(){a.css({left:0});a.children(":eq("+o+")").css({left:0});return a.children(":eq("+r+")").css({display:"none",left:0,zIndex:0},e.data(h,"current",o),e.data(h,"animating",!1),h.options.callback.complete(o+1))})}};r.prototype._fade=function(t){var n,r,i,s,o,u=this;n=e(this.element);this.data=e.data(this);if(!this.data.animating&&t!==this.data.current+1){e.data(this,"animating",!0);r=this.data.current;if(t){t-=1;o=t>r?1:-1;i=t}else{o=this.data.direction==="next"?1:-1;i=r+o}i===-1&&(i=this.data.total-1);i===this.data.total&&(i=0);this._setActive(i);s=e(".slidesjs-control",n);s.children(":eq("+i+")").css({display:"none",left:0,zIndex:10});this.options.callback.start(r+1);if(this.options.effect.fade.crossfade){s.children(":eq("+this.data.current+")").stop().fadeOut(this.options.effect.fade.speed);return s.children(":eq("+i+")").stop().fadeIn(this.options.effect.fade.speed,function(){s.children(":eq("+i+")").css({zIndex:0});e.data(u,"animating",!1);e.data(u,"current",i);return u.options.callback.complete(i+1)})}return s.children(":eq("+r+")").stop().fadeOut(this.options.effect.fade.speed,function(){s.children(":eq("+i+")").stop().fadeIn(u.options.effect.fade.speed,function(){return s.children(":eq("+i+")").css({zIndex:10})});e.data(u,"animating",!1);e.data(u,"current",i);return u.options.callback.complete(i+1)})}};r.prototype._getVendorPrefix=function(){var e,t,r,i,s;e=n.body||n.documentElement;r=e.style;i="transition";s=["Moz","Webkit","Khtml","O","ms"];i=i.charAt(0).toUpperCase()+i.substr(1);t=0;while(t<s.length){if(typeof r[s[t]+i]=="string")return s[t];t++}return!1};return e.fn[s]=function(t){return this.each(function(){if(!e.data(this,"plugin_"+s))return e.data(this,"plugin_"+s,new r(this,t))})}})(jQuery,window,document)}).call(this);


/* ================================================================= KRAJ ZA O NAMA ========================================================*/ 

// NAVBAR
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
})

// =============================== TERMINI.HTML ============================================

$(document).ready(function() {

    //selektori za stranicu termini:

    let username = document.querySelector("#username");
    let accessCode = document.querySelector("#accessCode");
    let btnNext2 = document.querySelector(".next2");
    let btnNext1 = document.querySelector(".next1");
    let btnNext3 = document.querySelector(".next3");
    let btnSubmit = document.querySelector(".submit");
    let btnChangeUser = document.querySelector(".changeUser");
    const radios = document.querySelectorAll("input[type='radio'][name='tip']");
    let date = document.querySelectorAll("input[type='date'][name='date']");

    let newTraining = {};
    const trainers = ["Aleksa Milekić", "Anastasija Mitić", "Marko Marković"]

    const getrandomTrainer = (trainers) => trainers[Math.floor(Math.random() * trainers.length)]

    const hide = (element) => document.querySelector(element).classList.add("hidden");
    const reveal = (element) => document.querySelector(element).classList.remove("hidden");
    const areValidUsernameAndCode = (username, accessCode) => {
        return username.value !== null && accessCode.value !== null &&
            username.value.length > 1 && accessCode.value.length === 6
    }

    // funkcija koja na osnovu prosledjenog input polja proverava da li je uneseni datum validan
    const isValidDate = (dateInput) => {
            let selectedDate = collectDate(dateInput);
            let currentDate = new Date();
            if (currentDate < selectedDate &&
                selectedDate.getFullYear != null && selectedDate.getFullYear != undefined &&
                selectedDate.getMonth != null && selectedDate.getMonth != undefined &&
                selectedDate.getDate != null && selectedDate.getDate != undefined) {
                console.log("godina: " + selectedDate.getFullyear);
                console.log("mesec: " + selectedDate.getMonth);
                console.log("dan: " + selectedDate.getDate);

                return true;
            } else return false;
        }
    // funkcija koja na osnovu prosledjenog input pola za datum vraca datum koji je unesen
    const collectDate = (dateInput) => {
        let date = dateInput.val().split("-");
        day = date[2];
        console.log("dan " + day)
        month = date[1];
        console.log("mesec " + month)
        year = date[0];
        console.log("godina " + year)
        let selectedDate = new Date()
        selectedDate.setFullYear(date[0]);
        selectedDate.setMonth(date[1] - 1); //iz nekog razloga vraca mesec za jedan vise
        selectedDate.setDate(date[2]);
        return selectedDate;
    }

    // EVENT LISTENERS

    btnNext1.addEventListener('click', () => {
        if (areValidUsernameAndCode(username, accessCode)) {
            reveal("#div2");
            newTraining.user = username.value;
            newTraining.code = accessCode.value;
            window.scrollTo(0, 300);

            document.querySelector(".pageTermini").style.height = "100%";
        } else reveal(".error1")


    });

    // ako je npr korisnik prvo napravio gresku pojavila mu se poruka o tome, medjutim cim pokusa da promeni unos poruka se  sklanja
    accessCode.addEventListener('keydown', () => hide(".error1"))
    username.addEventListener('keydown', () => hide(".error1"))

    //kad neko klikne na deo gde su radio dugmici tad treba da selektujemmo ovo dole
    let type; //u ovoj promenljivoj cuvamo tip terninga
    let isChecked = false; //ovo nam treba za listener posle

    radios.forEach(radio => radio.addEventListener('change', () => {
        isChecked = true;
        type = radio.value;
        newTraining.type = type;

        // ako je ispisana dole poruka o gresci onda pri promeni nekoj treba da je sklonimo
        hide(".error2");
    }))

    // klikom na dugme dalje se otkriva unos za datum ukoliko je neka od vrsta treninga oznacena
    btnNext2.addEventListener('click', () => {
        if (isChecked) {
            reveal("#div3");
            window.scrollTo(0, 500);

        } else reveal(".error2");
    })

    btnNext3.addEventListener('click', () => {

        if (isValidDate($('#date'))) {
            reveal("#div4");
            window.scrollTo(0, 900);

            newTraining.date = `${day}.${month}.${year}.`;
            hide(".error3");
        } else {
            reveal(".error3");
            hide(".submitSpace");
        }
    })

    const addCellToTable = (newRow, data) => {
        newCell = newRow.insertCell();
        newCell.appendChild(document.createTextNode(data));
    }

    btnSubmit.addEventListener('click', () => {
        let newRow = document.querySelector(".table").insertRow();
        newRow.classList.add("newTrainings");

        // ovde u red dodajemo vrstu treninga
        addCellToTable(newRow, newTraining.type);
        // sad dodajemo datum
        addCellToTable(newRow, newTraining.date);

        // dodajemo izabranog trenera
        addCellToTable(newRow, getrandomTrainer(trainers));

        // sad resetujemo sve ulaze sem korisnickog imena i koda
        $('#date').val("");
        document.querySelectorAll("input[type=radio][name=tip]").forEach((el) => el.checked = false);
        hide("#div2");
        hide("#div3");
        hide("#div4");
        reveal(".tableSection");
        reveal(".changeUser");

        reveal(".success");
        window.scrollTo(0, 300);
        // kad se prikaze poruka za uspesan unos odmah nakon nekog vremena se gubi
        setTimeout(() => hide(".success"), 2500)
    })

    btnChangeUser.addEventListener('click', () => {
        username.value = "";
        accessCode.value = null;
        let rows = document.querySelectorAll(".newTrainings");
        for (const row of rows) {
            row.remove();
        }
        hide(".tableSection");
    })


});

// NAVBAR ZA MEDIA QUERRY
let isHamburgerClicked = false;

function myFunction() {
    var x = document.querySelector("nav");
    if (!isHamburgerClicked) x.className += " responsive";
    else x.className = "";
    isHamburgerClicked = !isHamburgerClicked;
}