import React from 'react'
import './skills.css'
import {BiCheck} from 'react-icons/bi'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What I Can do</h5>
      <h2>Skills</h2>

      <div className="container skills__container">
        <article className="skill">
          <div className="skill__head">
            <h3>前端框架及JavaScript</h3>
          </div>

          <ul className="skill__list">
            <li>
              <BiCheck className="skill__list-icon" />
              <p>熟悉 HTML 標籤及使用方法</p>
            </li>
            <li>
              <BiCheck className="skill__list-icon" />
              <p>運用 CSS 優化介面</p>
            </li>
            <li>
              <BiCheck className="skill__list-icon" />
              <p>瞭解 RWD 原理</p>
            </li>
            <li>
              <BiCheck className="skill__list-icon" />
              <p>使用 SCSS 提升開發效率</p>
            </li>
            <li>
              <BiCheck className="skill__list-icon" />
              <p>瞭解基礎的 Tailwind、Bootstrap</p>
            </li>
            <li>
              <BiCheck className="skill__list-icon" />
              <p>學過基礎的 ES6+ 語法</p>
            </li>
            <li>
              <BiCheck className="skill__list-icon" />
              <p>接觸過基礎的 React</p>
            </li>
          </ul>
        </article>
        {/* End of 前端 */}
        <article className="skill">
          <div className="skill__head">
            <h3>其他</h3>
          </div>

          <ul className="skill__list">
            <li>
              <BiCheck className="skill__list-icon" />
              <p>使用過 Git 指令</p>
            </li>
            <li>
              <BiCheck className="skill__list-icon" />
              <p>部屬資料到 GitHub Pages、Heroku 過</p>
            </li>
            <li>
              <BiCheck className="skill__list-icon" />
              <p>使用過 Photoshop、Illustrator 等設計工具</p>
            </li>
            <li>
              <BiCheck className="skill__list-icon" />
              <p>在校學習過 Python、C++、PHP 等程式語言</p>
            </li>
            <li>
              <BiCheck className="skill__list-icon" />
              <p>在校學習過遊戲引擎 Unity、UE4 </p>
            </li>
          </ul>
        </article>
        {/* End of 其他 */}
      </div>
    </section>

  )
}

export default Skills