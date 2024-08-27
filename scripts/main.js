
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');

    setTimeout(function() {
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    }, 2000);
});









document.addEventListener('DOMContentLoaded', () => {
    // Check if a language is already saved in localStorage
    const savedLanguage = localStorage.getItem('language');
    const language = savedLanguage ? savedLanguage : 'en';
    setLanguage(language);

    // Настройка слушателей событий для языковых кнопок
    document.getElementById('en-button').addEventListener('click', () => {
        setLanguage('en');
        localStorage.setItem('language', 'en');
        updateActiveButton('en');
    });

    document.getElementById('ua-button').addEventListener('click', () => {
        setLanguage('ua');
        localStorage.setItem('language', 'ua');
        updateActiveButton('ua');
    });

    // Инициализация активной кнопки на основе сохраненного языка
    updateActiveButton(language);
});

// Функция загрузки языкового файла и обновления содержимого
function setLanguage(language) {
    fetch(`${language}.json`)
        .then(response => response.json())
        .then(data => {
            // document.getElementById('home').textContent = data.home;
            // document.getElementById('blog').textContent = data.blog;
            // document.getElementById('articles').textContent = data.articles;

            document.getElementById('itsme').textContent = data.itsme;
            document.getElementById('about').textContent = data.about;
            document.getElementById('project').textContent = data.project;
            document.getElementById('contact').textContent = data.contact;

            document.getElementById('frontenddeveloper').textContent = data.frontenddeveloper;
            // document.getElementById('lookingfor').textContent = data.lookingfor;
            // document.getElementById('lookingforword0').textContent = data.lookingforword;
            // document.getElementById('lookingforword1').textContent = data.lookingforword;
            // document.getElementById('lookingforword2').textContent = data.lookingforword;
            // document.getElementById('lookingforword3').textContent = data.lookingforword;
            // document.getElementById('lookingforword4').textContent = data.lookingforword;
            document.getElementById('tachsteack').textContent = data.tachsteack;

            document.getElementById('aboutmetitle').textContent = data.aboutmetitle;
            document.getElementById('aboutmetitlemini').textContent = data.aboutmetitlemini;
            document.getElementById('aboutmetext').textContent = data.aboutmetext;

            document.getElementById('projectstitle').textContent = data.projectstitle;
            document.getElementById('projectstitlemini').textContent = data.projectstitlemini;
            document.getElementById('itschedule').textContent = data.itschedule;
            document.getElementById('breammusic').textContent = data.breammusic;
            document.getElementById('lemongrass').textContent = data.lemongrass;
            document.getElementById('saporevino').textContent = data.saporevino;


            document.getElementById('contactstitle').textContent = data.contactstitle;
            document.getElementById('contactstitlemini').textContent = data.contactstitlemini;
            document.getElementById('phonenumber').textContent = data.phonenumber;
            document.getElementById('email').textContent = data.email;
            document.getElementById('location').textContent = data.location;
            document.getElementById('ukraine').textContent = data.ukraine;
            document.getElementById('ukraine').textContent = data.ukraine;
            document.getElementById('allmysocialmedia').textContent = data.allmysocialmedia;

            document.getElementById('rights').textContent = data.rights;
        })
        .catch(error => console.error('Error loading language file:', error));
}

// Function to update the active button style
function updateActiveButton(language) {
    document.querySelectorAll('.lang-button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(`${language}-button`).classList.add('active');
}











let words = document.getElementsByClassName('word');
let wordArray = [];
let currentWord = 0;

words[currentWord].style.opacity = 1;
for (let i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  let cw = wordArray[currentWord];
  let nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (let i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (let i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  let content = word.innerHTML;
  word.innerHTML = '';
  let letters = [];
  for (let i = 0; i < content.length; i++) {
    let letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 2000);















const container = document.getElementById('container');
const image = document.getElementById('image');

container.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const moveX = (x - 0.5) * 70;
    const moveY = (y - 0.5) * 70;

    image.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
});

container.addEventListener('mouseleave', () => {
     image.style.transform = 'translate(0, 0)';
});









const sections = document.querySelectorAll('.site-block');
const indicatorsContainer = document.querySelector('.section-indicators');

// Создаем точки для каждого заголовка
sections.forEach(() => {
  const indicator = document.createElement('div');
  indicator.classList.add('section-indicator');
  indicatorsContainer.appendChild(indicator);
});

// Функция для обновления активной точки
function updateActiveIndicator() {
  const indicators = document.querySelectorAll('.section-indicator');
  let activeIndex = -1;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      activeIndex = index;
    }
  });

  if (activeIndex !== -1) {
    indicators.forEach((indicator, index) => {
      if (index === activeIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }
}

// Обработчик события прокрутки
window.addEventListener('scroll', updateActiveIndicator);

// Вызываем функцию сразу после загрузки страницы
window.addEventListener('load', updateActiveIndicator);









document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNavigation = document.querySelector('.site-navigation');
  const backdrop = document.createElement('div');
  backdrop.classList.add('backdrop');
  document.body.appendChild(backdrop);

  menuToggle.addEventListener('click', function() {
      siteNavigation.classList.toggle('active');
      menuToggle.classList.toggle('active');
      backdrop.classList.toggle('active');
  });

  backdrop.addEventListener('click', function() {
      siteNavigation.classList.remove('active');
      menuToggle.classList.remove('active');
      backdrop.classList.remove('active');
  });
});









// const buttons = document.querySelectorAll('.contacts-copy-button');
// const popup = document.getElementById('popup');

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const textToCopy = button.getAttribute('data-text');
//         navigator.clipboard.writeText(textToCopy).then(() => {
//             showPopup('Text successfully copiedㅤ✓', 'success');
//         }).catch(() => {
//             showPopup('Copy errorㅤ✗', 'error');
//         });
//     });
// });

// function showPopup(message, type) {
//     popup.textContent = message;
//     popup.className = type;
//     popup.style.right = '20px';
//     setTimeout(() => {
//         popup.style.right = '-400px';
//     }, 3000);
// }




const contacts_copy_button = document.querySelector(".contacts-copy-button"),
  toast = document.querySelector(".toast");
(closeIcon = document.querySelector(".close")),
  (progress = document.querySelector(".progress"));

let timer1, timer2;

contacts_copy_button.addEventListener("click", () => {
  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 3000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 3300);
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});


function copyButton1() {
    const contacts_copy_button = document.querySelector(".contacts-copy-button"),
  toast = document.querySelector(".toast");
(closeIcon = document.querySelector(".close")),
  (progress = document.querySelector(".progress"));

let timer1, timer2;

contacts_copy_button.addEventListener("click", () => {
  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 3000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 3300);
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});
}

function copyButton2() {
    const contacts_copy_button = document.querySelector(".contacts-copy-button2"),
  toast = document.querySelector(".toast");
(closeIcon = document.querySelector(".close")),
  (progress = document.querySelector(".progress"));

let timer1, timer2;

contacts_copy_button.addEventListener("click", () => {
  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 3000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 3300);
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});
}


document.addEventListener('DOMContentLoaded', (event) => {
  // Запретить перетаскивание всех изображений
  const images = document.querySelectorAll('img');
  images.forEach(img => {
      img.addEventListener('dragstart', (e) => {
          e.preventDefault();
      });
  });

  // Запретить перетаскивание всех кнопок
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
      button.addEventListener('dragstart', (e) => {
          e.preventDefault();
      });
  });
});









document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.querySelector('.typing-text');
    const text = "Hi, I'm Yevhenii Sushik. A passionate Front-end developer based in Ukraine.";
    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
});






































document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll(".copy-btn"),
        toast = document.querySelector(".toast"),
        closeIcon = document.querySelector(".close"),
        progress = document.querySelector(".progress");

  let timer1, timer2;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const text = button.getAttribute("data-text");
      navigator.clipboard.writeText(text).then(() => {
        toast.classList.add("active");
        progress.classList.add("active");

        timer1 = setTimeout(() => {
          toast.classList.remove("active");
        }, 5000); // 1s = 1000 milliseconds

        timer2 = setTimeout(() => {
          progress.classList.remove("active");
        }, 5300);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  });

  closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
      progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
  });
});
