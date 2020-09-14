"use strict";

//IE HTMLcollection foreach polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

;
var imagepopupcontainer = document.querySelector('.imagepopup');
var imgpopuped = false,
    imgpopupposition = 0;

var popupClick = function popupClick(elem) {
  imagepopupcontainer.innerHTML = "";
  var clone = elem.cloneNode();
  imagepopupcontainer.appendChild(clone);
  imagepopupcontainer.classList.remove('hidden');
  imgpopuped = true;
  imgpopupposition = pageYOffset;
};

var popupCheck = function popupCheck(elem) {
  if (!elem.onclick) {
    elem.onclick = function () {
      return popupClick(elem);
    };
  }
};

document.querySelectorAll('.popuping').forEach(function (item) {
  return item.onclick = function () {
    return popupClick(item);
  };
});

imagepopupcontainer.onclick = function () {
  imgpopuped = false;
  this.classList.add('hidden');
};

document.addEventListener('scroll', function () {
  if (imgpopuped && Math.abs(imgpopupposition - pageYOffset) > 15) {
    imgpopuped = false;
    imagepopupcontainer.classList.add('hidden');
  }
});
;
{
  var mobileServicePatch = function mobileServicePatch(parent, target) {
    if (parent.classList.contains('active')) target.style.setProperty('max-height', target.scrollHeight + 'px');else target.style.removeProperty('max-height');
  };

  var size;
  var targets = document.querySelectorAll('.service__text');
  window.addEventListener('load', function () {
    return size = document.body.clientWidth;
  });
  window.addEventListener('resize', function () {
    if (size <= 768 && document.body.clientWidth > 768) targets.forEach(function (item) {
      item.style.removeProperty('max-height');
      item.parentNode.classList.remove('active');
    });
    size = document.body.clientWidth;
  });

  var toggleHeight = function toggleHeight(target) {
    console.log(target);
    if (target.style.getPropertyValue('max-height')) target.style.removeProperty('max-height');else target.style.setProperty('max-height', target.scrollHeight + 'px');
  };

  document.querySelectorAll('.interactive-trigger').forEach(function (item) {
    return item.addEventListener('click', function (e) {
      var target = item.getAttribute('data-target'),
          selector = item.getAttribute('data-sel'),
          toggleClass = item.getAttribute('data-toggleclass'),
          heightTrigger = item.getAttribute('data-heightTrigger'),
          special = item.getAttribute('data-special'),
          mode = item.getAttribute('data-mode'),
          detailsMode = item.getAttribute('data-detailsMode');
      if (mode == 'mob' && size > 768) return;
      if (target == "this") target = item;
      if (target == "parent") target = item.parentNode;
      if (target == "grandparent") target = item.parentNode.parentNode;
      if (!target) target = document;
      if (selector) document.querySelectorAll(selector).forEach(function (item) {
        if (item == target) return;
        if (toggleClass) item.classList.toggle(toggleClass);
        if (heightTrigger) toggleHeight(item);
        if (special) mobileServicePatch(item, item.querySelector('.service__text'));

        if (detailsMode && item.classList.contains('details')) {
          if (item.style.maxHeight) item.style.removeProperty('max-height');else item.style.maxHeight = item.scrollHeight + 'px';
        }
      });

      if (special) {
        if (!target.classList.contains('active')) {
          e.preventDefault();
          target.classList.toggle(toggleClass);
        }

        return mobileServicePatch(target, target.querySelector('.service__text'));
      }

      if (toggleClass) target.classList.toggle(toggleClass);
    });
  });
}
;
var awardsSwiper = new Swiper('.trusts__container', {
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30
    },
    500: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 50
    },
    700: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 50
    },
    1200: {
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 50
    }
  },
  navigation: {
    nextEl: '.trusts__arrow_right',
    prevEl: '.trusts__arrow_left'
  }
});
;
var casesSwiper = new Swiper('.cases__swiper', {
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    769: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  },
  navigation: {
    nextEl: '.cases__rightarrow',
    prevEl: '.cases__leftarrow'
  }
});
;
var testimonialsSwiper = new Swiper('.testimonials__container', {
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30
    },
    700: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 50
    },
    900: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 50
    },
    1024: {
      slidesPerView: 1.1,
      centeredSlides: true,
      spaceBetween: 150
    }
  },
  on: {
    init: function init() {
      document.querySelectorAll('.testimonials__container .popuping').forEach(function (item) {
        popupCheck(item);
      });
    },
    breakpoint: function breakpoint() {
      document.querySelectorAll('.testimonials__container .popuping').forEach(function (item) {
        return popupCheck(item);
      });
    }
  },
  navigation: {
    nextEl: '.testimonials__arrow_right',
    prevEl: '.testimonials__arrow_left'
  }
});
document.querySelectorAll('[data-bar]').forEach(function (item) {
  return new SimpleBar(item, {
    autoHide: false
  });
});
;
var awardsSwiper = new Swiper('.awards__container', {
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30
    },
    500: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 30
    },
    600: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 40
    },
    700: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 70
    },
    800: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 100
    },
    850: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30
    },
    1000: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 40
    },
    1100: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 50
    },
    1170: {
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 50
    },
    1700: {
      slidesPerView: 5,
      centeredSlides: false,
      spaceBetween: 50
    }
  },
  on: {
    init: function init() {
      document.querySelectorAll('.awards__container .popuping').forEach(function (item) {
        popupCheck(item);
      });
    },
    breakpoint: function breakpoint() {
      document.querySelectorAll('.awards__container .popuping').forEach(function (item) {
        return popupCheck(item);
      });
    }
  },
  navigation: {
    nextEl: '.awards__arrow_right',
    prevEl: '.awards__arrow_left'
  }
});
;
{
  var IE = function IE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    return msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
  };

  window.onload = new function () {
    document.querySelectorAll('.card__text').forEach(function (item) {
      var parent = item.parentNode;
      var lh = getComputedStyle(item)['lineHeight'];
      var linecount = Math.floor(item.offsetHeight / parseFloat(lh));
      if (IE()) linecount = Math.min(linecount, Math.floor((parent.offsetHeight * 0.45 - item.previousElementSibling.offsetHeight - item.nextElementSibling.nextElementSibling.offsetHeight) / parseFloat(lh)));
      $(item).ellipsis({
        responsive: false,
        lines: linecount
      });
    });
  }();
  window.addEventListener('resize', function () {
    document.querySelectorAll('.card__text').forEach(function (item) {
      var parent = item.parentNode;
      var lh = getComputedStyle(item)['lineHeight'];
      var linecount = Math.floor(item.getBoundingClientRect().height / parseFloat(lh));
      if (IE()) linecount = Math.min(linecount, Math.floor((parent.offsetHeight * 0.45 - item.previousElementSibling.offsetHeight - item.nextElementSibling.nextElementSibling.offsetHeight) / parseFloat(lh)));
      $(item).ellipsis({
        responsive: false,
        lines: linecount
      });
    });
  });
}
;
objectFitImages();