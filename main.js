'use strict'
{
  // 問題文, 選択肢, 選択肢, 選択肢, 正解(0, 1, 2)
  const quizes = [
    ['1の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 1],
    ['2の正解は？', '選択肢 D', '選択肢 E', '選択肢 F', 2],
    ['3の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 1],
    ['4の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 3],
  ];

  class Quiz {
    constructor(quiz) {
      const section = document.createElement('section');
      // section.classList.add('section');
      this.h2 = document.createElement('h2');
      this.h2.textContent = quiz[0];

      this.ul = document.createElement('ul');
      this.ul.classList.add('quiz');
      section.appendChild(this.h2);
      section.appendChild(this.ul);

      for(let i = 1; i < quiz.length - 1; i++) {
        // for内でconstでliを設定しないとクラスが最後のli二しかつかない
        // それだとthisがつけられないけどいいのか？
        const li = document.createElement('li');
        li.addEventListener('click', () => {
          if(quiz[quiz.length - 1] === i) {
            li.classList.add('correct');
          } else {
            li.classList.add('fail');
          }
        })
        li.textContent = quiz[i];
        this.ul.appendChild(li);
        }
      document.querySelector('main').appendChild(section);
    }
  }

  quizes.forEach((quiz) => {
    new Quiz(quiz);
  });


}


      // this.li0 = document.createElement('li');
      // this.li0.addEventListener('click', () => {
      //   if(quiz[4] === 0) {
      //   this.li0.classList.add('correct');
      //   } else {
      //   this.li0.classList.add('fail');
      //   }
      // })
      // this.li0.textContent = quiz[1];

      // this.li1 = document.createElement('li');
      // this.li1.addEventListener('click', () => {
      //   if(quiz[4] === 1) {
      //   this.li1.classList.add('correct');
      //   } else {
      //   this.li1.classList.add('fail');
      //   }
      // })
      // this.li1.textContent = quiz[2];

      // this.li2 = document.createElement('li');
      // this.li2.addEventListener('click', () => {
      //   if(quiz[4] === 2) {
      //   this.li2.classList.add('correct');
      //   } else {
      //   this.li2.classList.add('fail');
      //   }
      // })
      // this.li2.textContent = quiz[3];

      // this.ul.appendChild(this.li0);
      // this.ul.appendChild(this.li1);
      // this.ul.appendChild(this.li2);
