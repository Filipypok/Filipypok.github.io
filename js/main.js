
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideElements = document.querySelectorAll('.slide');
    const slideCount = slideElements.length;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slider = document.querySelector('.slider');

    // Клонируем первый и последний слайды для бесконечного эффекта
    const firstClone = slideElements[0].cloneNode(true);
    const lastClone = slideElements[slideCount - 1].cloneNode(true);
    
    slides.appendChild(firstClone);
    slides.insertBefore(lastClone, slideElements[0]);

    let currentIndex = 1; // Начинаем с 1, так как добавили клон
    let isTransitioning = false;
    let autoPlayInterval;

    // Обновляем количество слайдов после клонирования
    const allSlides = document.querySelectorAll('.slide');
    const totalSlides = allSlides.length;

    // Устанавливаем правильную ширину
    slides.style.width = `${100 * totalSlides}%`;
    allSlides.forEach(slide => {
        slide.style.width = `${100 / totalSlides}%`;
    });

    // Сразу устанавливаем начальную позицию
    slides.style.transform = `translateX(${-currentIndex * (100 / totalSlides)}%)`;

    function goToSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;

        currentIndex = index;
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = `translateX(${-currentIndex * (100 / totalSlides)}%)`;

        // После завершения анимации
        setTimeout(() => {
            isTransitioning = false;
            
            // Если достигли клона в начале, переходим к реальному последнему слайду
            if (currentIndex === 0) {
                slides.style.transition = 'none';
                currentIndex = totalSlides - 2;
                slides.style.transform = `translateX(${-currentIndex * (100 / totalSlides)}%)`;
            }
            // Если достигли клона в конце, переходим к реальному первому слайду
            else if (currentIndex === totalSlides - 1) {
                slides.style.transition = 'none';
                currentIndex = 1;
                slides.style.transform = `translateX(${-currentIndex * (100 / totalSlides)}%)`;
            }
        }, 500);
    }

    prevButton.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 3000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Обработчик завершения перехода
    slides.addEventListener('transitionend', () => {
        isTransitioning = false;
    });

    startAutoPlay();
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);
});

document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll(".menu-button");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", function () {
      const parent = toggle.parentElement;
      parent.classList.toggle("active");
    });
  });
});
window.addEventListener('scroll', function() {
  const header = document.querySelector('.head');
  // Замените 200 на нужную вам высоту (например, высота шапки)
  if (window.scrollY > 250) {
    header.classList.add('fixed-header');
  } else {
    header.classList.remove('fixed-header');
  }
});
