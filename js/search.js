const productMap = {
    "блок для сушильной машины": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "вибросито": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "сито": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "сушильная машина": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "сушка": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "блок для сушильной машины": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "вакуумный дегазатор": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "вертикальный шламовый насос": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "вибросито с отрицательным давлением": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "вибросито": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "винтовой насос": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "илоотделитель": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "комната контейнерного типа": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "очиститель раствора": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "пескоотделитель": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "система обработки шлама": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "система обработки глинистой воды": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "срезающий насос": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "сушильная машина": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "центрифуга": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "центробежный шламовый насос": "/neftyanoye-oborudovanie/neftyanoye-oborudovanie.html",
    "немецкий тип оси": "/trailerAxle/bridgeTrailerPage.html.html",
    "американский тип оси": "/trailerAxle/bridgeTrailerPage.html.html",
    "низкоплатформенный автомобильный мост": "/trailerAxle/bridgeTrailerPage.html",
    "ось дискового тормоза": "/trailerAxle/bridgeTrailerPage.html",
    "тайская ось": "/trailerAxle/bridgeTrailerPage.html",
    "немецкий тип оси": "/trailerAxle/bridgeTrailerPage.html",
    "американский тип оси": "/trailerAxle/bridgeTrailerPage.html",
    "жесткая подвеска": "/vozdushnaya-podveska/vozdushnaya-podveska.html",
    "установленный светильник": "/vozdushnaya-podveska/vozdushnaya-podveska.html",
    "единая точка подвески": "/vozdushnaya-podveska/vozdushnaya-podveska.html",
    "американская подвеска": "/vozdushnaya-podveska/vozdushnaya-podveska.html",
    "американский тип подвески": "/vozdushnaya-podveska/vozdushnaya-podveska.html",
    "немецкая подвеска": "/vozdushnaya-podveska/vozdushnaya-podveska.html",
    "немецкий тип подвески": "/vozdushnaya-podveska/vozdushnaya-podveska.html",
    "ступица": "/zapchasti-dlya-mosta-gruzovyh-avtomobiley/zapchasti-dlya-mosta-gruzovyh-avtomobiley.html",
    "тормозной барабан": "/zapchasti-dlya-mosta-gruzovyh-avtomobiley/zapchasti-dlya-mosta-gruzovyh-avtomobiley.html",
    "тормозная колодка": "/zapchasti-dlya-mosta-gruzovyh-avtomobiley/zapchasti-dlya-mosta-gruzovyh-avtomobiley.html",
    "суппорт": "/zapchasti-dlya-mosta-gruzovyh-avtomobiley/zapchasti-dlya-mosta-gruzovyh-avtomobiley.html",
    "брызговик": "/zapchasti-dlya-mosta-gruzovyh-avtomobiley/zapchasti-dlya-mosta-gruzovyh-avtomobiley.html",
    "колпак и уплотняющий элемент": "/zapchasti-dlya-mosta-gruzovyh-avtomobiley/zapchasti-dlya-mosta-gruzovyh-avtomobiley.html",
    "датчик ABS и ротор": "/zapchasti-dlya-mosta-gruzovyh-avtomobiley/zapchasti-dlya-mosta-gruzovyh-avtomobiley.html",
    "подъемный рычаг": "/zapchasti-dlya-mosta-gruzovyh-avtomobiley/zapchasti-dlya-mosta-gruzovyh-avtomobiley.html",
    "привод и комплектные аксессуары": "/zapchasti-dlya-mosta-gruzovyh-avtomobiley/zapchasti-dlya-mosta-gruzovyh-avtomobiley.html",
    "тормозная камера": "/zapchasti-dlya-mosta-gruzovyh-avtomobiley/zapchasti-dlya-mosta-gruzovyh-avtomobiley.html",
    "комплектный болт": "/zapchasti-dlya-mosta-gruzovyh-avtomobiley/zapchasti-dlya-mosta-gruzovyh-avtomobiley.html",
    "пружина": "/zapchasti-dlya-mosta-gruzovyh-avtomobiley/zapchasti-dlya-mosta-gruzovyh-avtomobiley.html",
    "подшипник": "/zapchasti-dlya-mosta-gruzovyh-avtomobiley/zapchasti-dlya-mosta-gruzovyh-avtomobiley.html",
    "обработка тормозного барабана": "/Casting/CastingPage.html",
    "обработка ступицы колеса": "/Casting/CastingPage.html",
    "литьё деталей специальной формы": "/Casting/CastingPage.html",
    "процесс потери пены": "/Casting/CastingPage.html",
    "литьё под давлением специальной формы": "/Casting/CastingPage.html",
    "литьё из песка с покрытием": "/Casting/CastingPage.html",
    "литьё деталей специальной формы": "/Casting/CastingPage.html",
    "автоматическая машина для литья": "/rezinovye-izdeliya/rezinovye-izdeliya.html",
    "резиновый экструдер": "/rezinovye-izdeliya/rezinovye-izdeliya.html",
    "резиновый каландр": "/rezinovye-izdeliya/rezinovye-izdeliya.html",
    "резиновая плоская вулканизационная машина": "/rezinovye-izdeliya/rezinovye-izdeliya.html",
    "смеситель": "/rezinovye-izdeliya/rezinovye-izdeliya.html"
  }; // <-- Закрываем объект productMap
  
    // Расстояние Левенштейна
    function levenshtein(a, b) {
      const matrix = [];
      for (let i = 0; i <= b.length; i++) matrix[i] = [i];
      for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  
      for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
          if (b[i - 1] === a[j - 1]) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(
              matrix[i - 1][j - 1] + 1,
              matrix[i][j - 1] + 1,
              matrix[i - 1][j] + 1
            );
          }
        }
      }
  
      return matrix[b.length][a.length];
    } 

  // Частичное совпадение
  function partialMatch(query, map) {
    for (const key in map) {
      if (key.toLowerCase().includes(query)) {
        return key;
      }
    }
    return null;
  }

  // Поиск по расстоянию Левенштейна
  function findClosestMatch(query, map, maxDistance = 3) {
    let bestMatch = null;
    let smallestDistance = Infinity;

    for (const key in map) {
      const distance = levenshtein(query, key.toLowerCase());
      if (distance < smallestDistance && distance <= maxDistance) {
        smallestDistance = distance;
        bestMatch = key;
      }
    }

    return bestMatch;
  }

  // Основная функция поиска
  function searchProduct() {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!query) return;

    // 1. Точное совпадение
    if (productMap[query]) {
      window.location.href = `${productMap[query]}?search=${encodeURIComponent(query)}`;
      return;
    }

    // 2. Частичное совпадение
    const partial = partialMatch(query, productMap);
    if (partial) {
      window.location.href = `${productMap[partial]}?search=${encodeURIComponent(partial)}`;
      return;
    }

    // 3. Поиск с опечаткой
    const closest = findClosestMatch(query, productMap);
    if (closest) {
      window.location.href = `${productMap[closest]}?search=${encodeURIComponent(closest)}`;
    } else {
      alert("Товар не найден. Проверьте написание.");
    }
  }

  // Подсветка найденного товара
  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const searchTerm = params.get("search");

    if (searchTerm) {
      const products = document.querySelectorAll(".prod");
      let matched = false;

      products.forEach(el => {
        const name = el.getAttribute("data-name")?.toLowerCase() || "";
        if (name.includes(searchTerm.toLowerCase())) {
          matched = true;

          el.style.backgroundColor = "yellow";
          el.style.transition = "background-color 0.3s ease";
          setTimeout(() => {
            el.style.backgroundColor = "transparent";
          }, 3000);

          const yOffset = -100;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      });

      if (!matched) {
        console.warn("Товар не найден на странице:", searchTerm);
      }
    }
  });
