window.addEventListener('load', function() {
    // 侧边栏返回顶部
    var aside = document.querySelector('aside');
    var header = document.querySelector('header');
    var nav = document.querySelector('nav');
    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= 166) {
            aside.style.display = 'block';
        } else {
            aside.style.display = 'none';
        }
    });
    aside.addEventListener('click', function () {
        animate1(window, 0);
    });

    function animate1(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                clearInterval(obj.timer);
                if (callback) {
                    callback();
                }
            }
            window.scroll(0, window.pageYOffset + step)
        }, 15);
    };

    // tab栏切换
    var fl_title = document.querySelector('.fl_title');
    var lis = fl_title.querySelectorAll('li');
    var fl_body = document.querySelector('.fl_body');
    var card = fl_body.querySelectorAll('.card');
    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('date-list', i);
        lis[i].addEventListener('mouseover', function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'style_color';
            for (var i = 0; i < card.length; i++) {
                card[i].style.display = 'none';
            }
            var index = this.getAttribute('date-list');
            card[index].style.display = 'block';
        })
    };
    
})