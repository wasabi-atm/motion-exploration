document.addEventListener("DOMContentLoaded", function() {
    const settings = {
        scrollDuration: 16000,
        scrollInterval: 10,
        stopOnHover: true,
    };
    function initializeSlider(index = "") {
        const indexSuffix = index ? `-${index}` : "";
        const leftSlide = document.querySelector(`[slider="left${indexSuffix}"]`);
        const rightSlide = document.querySelector(`[slider="right${indexSuffix}"]`);
        if (!leftSlide && !rightSlide) {
            return;
        }
        const leftSlides = leftSlide ? leftSlide.querySelectorAll(`[slide="duplicate${indexSuffix}"]`) : [];
        const rightSlides = rightSlide ? rightSlide.querySelectorAll(`[slide="duplicate${indexSuffix}"]`) : [];
        
        leftSlides.forEach(slide => {
            leftSlide.appendChild(slide.cloneNode(true));
            leftSlide.appendChild(slide.cloneNode(true));
        });
        rightSlides.forEach(slide => {
            rightSlide.appendChild(slide.cloneNode(true));
            rightSlide.appendChild(slide.cloneNode(true));
        });
        function getSlideWidth(slides) {
            if (!slides || !slides.length) return 0;
            const slideStyle = window.getComputedStyle(slides[0]);
            const slideWidth = slides[0].getBoundingClientRect().width;
            const gap = parseFloat(slideStyle.gap) || 0;
            return slideWidth + gap;
        }
        const scrollDistanceLeft = leftSlides.length ? getSlideWidth(leftSlides) : 0;
        const scrollDistanceRight = rightSlides.length ? getSlideWidth(rightSlides) : 0;
        const scrollStepLeft = scrollDistanceLeft / (settings.scrollDuration / settings.scrollInterval);
        const scrollStepRight = scrollDistanceRight / (settings.scrollDuration / settings.scrollInterval);
        let leftScroll = 0;
        let rightScroll = 0;
        let leftIntervalId, rightIntervalId;
        function moveLeftSlides() {
            if (!leftSlide) return;
            leftScroll += scrollStepLeft;
            leftSlide.style.transform = `translateX(-${Math.floor(leftScroll)}px)`;
            if (leftScroll >= scrollDistanceLeft) {
                leftScroll = 0;
                leftSlide.style.transition = 'none';
                leftSlide.style.transform = 'translateX(0)';
                setTimeout(() => {
                    leftSlide.style.transition = '';
                }, 0);
            }
        }
        function moveRightSlides() {
            if (!rightSlide) return;
            rightScroll += scrollStepRight;
            rightSlide.style.transform = `translateX(${Math.floor(rightScroll)}px)`;
            if (rightScroll >= scrollDistanceRight) {
                rightScroll = 0;
                rightSlide.style.transition = 'none';
                rightSlide.style.transform = 'translateX(0)';
                setTimeout(() => {
                    rightSlide.style.transition = '';
                }, 0);
            }
        }
        function startLeftAnimation() {
            if (leftSlide) {
                leftIntervalId = setInterval(moveLeftSlides, settings.scrollInterval);
            }
        }
        function startRightAnimation() {
            if (rightSlide) {
                rightIntervalId = setInterval(moveRightSlides, settings.scrollInterval);
            }
        }
        function stopLeftAnimation() {
            if (leftSlide) clearInterval(leftIntervalId);
        }
        function stopRightAnimation() {
            if (rightSlide) clearInterval(rightIntervalId);
        }
        if (settings.stopOnHover) {
            if (leftSlide) {
                leftSlide.addEventListener('mouseenter', stopLeftAnimation);
                leftSlide.addEventListener('mouseleave', startLeftAnimation);
            }
            if (rightSlide) {
                rightSlide.addEventListener('mouseenter', stopRightAnimation);
                rightSlide.addEventListener('mouseleave', startRightAnimation);
            }
        }
        startLeftAnimation();
        startRightAnimation();
    }
    if (document.querySelector('[slider="left"]') || document.querySelector('[slider="right"]')) {
        initializeSlider();
    }
    let index = 2;
    while (document.querySelector(`[slider="left-${index}"]`) || document.querySelector(`[slider="right-${index}"]`)) {
        initializeSlider(index);
        index++;
    }
});
