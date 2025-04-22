import { FC } from "react"

export const Content: FC = () => {
  return (
    <>
      <div className="content">
        <header>
          <h1>简化版HTML标签示例</h1>
          <nav>
            <ul>
              <li>
                <a href="#section1">第一部分</a>
              </li>
              <li>
                <a href="#section2">第二部分</a>
              </li>
              <li>
                <a href="#section3">第三部分</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section id="section1">
            <h2>第一部分：文本内容</h2>
            <article>
              <h3>文章标题</h3>
              <p>
                这是一个段落，包含一些<strong>加粗</strong>、<em>斜体</em>、
                <u>下划线</u>和<s>删除线</s>文本。
              </p>
              <p>
                换行标签
                <br />
                在这里使用。
              </p>
              <p>
                上标示例: x<sup>2</sup>，下标示例: H<sub>2</sub>O
              </p>
              <blockquote cite="https://example.com">
                这是一个引用块。HTML是构建网页的基础。
              </blockquote>
              <pre>预格式化文本 保留空格和 换行</pre>
              <code>console.log('Hello World');</code>
              <p>
                <small>小号文本</small>和<mark>高亮文本</mark>
              </p>
              <p>
                <abbr title="HyperText Markup Language">HTML</abbr>
                是网页的基础。
              </p>
              <p>
                <cite>HTML规范</cite>由W3C发布。
              </p>
              <p>
                <time dateTime="2023-10-15">2023年10月15日</time>
              </p>
              <p>
                <data value="123">产品编号</data>
              </p>
            </article>
          </section>

          <section id="section2">
            <h2>第二部分：多媒体和嵌入内容</h2>
            <figure>
              <img src="example.jpg" alt="示例图片" width="300" />
              <figcaption>图1: 示例图片</figcaption>
            </figure>
            <picture>
              <source media="(min-width: 800px)" srcset="large.jpg" />
              <source media="(min-width: 400px)" srcset="medium.jpg" />
              <img src="small.jpg" alt="响应式图片" />
            </picture>
            <audio controls="controls">
              <source src="audio.mp3" type="audio/mpeg" />
              您的浏览器不支持音频元素。
            </audio>
            <video width="320" height="240" controls="controls">
              <source src="movie.mp4" type="video/mp4" />
              您的浏览器不支持视频标签。
            </video>
            <iframe
              src="https://example.com"
              title="示例网站"
              width="400"
              height="300"
            ></iframe>
            <embed type="image/jpg" src="pic.jpg" width="300" height="200" />
            <object
              data="book.pdf"
              type="application/pdf"
              width="300"
              height="200"
            >
              PDF查看器插件
            </object>
            <svg width="100" height="100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="green"
                stroke-width="4"
                fill="yellow"
              />
            </svg>
          </section>

          <section id="section3">
            <h2>第三部分：表单和表格</h2>
            <form action="/submit" method="post">
              <fieldset>
                <legend>个人信息</legend>
                <label for="name">姓名:</label>
                <input type="text" id="name" name="name" required="required" />
                <br />
                <br />

                <label for="email">邮箱:</label>
                <input type="email" id="email" name="email" />
                <br />
                <br />

                <label for="password">密码:</label>
                <input type="password" id="password" name="password" />
                <br />
                <br />

                <label for="age">年龄:</label>
                <input type="number" id="age" name="age" min="0" max="120" />
                <br />
                <br />

                <label for="birthday">生日:</label>
                <input type="date" id="birthday" name="birthday" />
                <br />
                <br />

                <label for="color">喜欢的颜色:</label>
                <input type="color" id="color" name="color" />
                <br />
                <br />

                <label for="website">个人网站:</label>
                <input type="url" id="website" name="website" />
                <br />
                <br />

                <label for="phone">电话:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
                <br />
                <br />

                <label for="file">上传文件:</label>
                <input type="file" id="file" name="file" />
                <br />
                <br />

                <label for="search">搜索:</label>
                <input type="search" id="search" name="search" />
                <br />
                <br />

                <label for="volume">音量:</label>
                <input
                  type="range"
                  id="volume"
                  name="volume"
                  min="0"
                  max="100"
                />
                <br />
                <br />

                <label for="browser">选择浏览器:</label>
                <input list="browsers" id="browser" name="browser" />
                <datalist id="browsers">
                  <option value="Chrome" />
                  <option value="Firefox" />
                  <option value="Safari" />
                  <option value="Edge" />
                </datalist>
                <br />
                <br />

                <label>性别:</label>
                <input type="radio" id="male" name="gender" value="male" />
                <label for="male">男</label>
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">女</label>
                <br />
                <br />

                <label>兴趣:</label>
                <input
                  type="checkbox"
                  id="coding"
                  name="interest"
                  value="coding"
                />
                <label for="coding">编程</label>
                <input
                  type="checkbox"
                  id="music"
                  name="interest"
                  value="music"
                />
                <label for="music">音乐</label>
                <input
                  type="checkbox"
                  id="sports"
                  name="interest"
                  value="sports"
                />
                <label for="sports">运动</label>
                <br />
                <br />

                <label for="cars">选择汽车:</label>
                <select id="cars" name="cars">
                  <optgroup label="德国车">
                    <option value="bmw">宝马</option>
                    <option value="audi">奥迪</option>
                  </optgroup>
                  <optgroup label="日本车">
                    <option value="toyota">丰田</option>
                    <option value="honda">本田</option>
                  </optgroup>
                </select>
                <br />
                <br />

                <label for="message">留言:</label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  cols="50"
                ></textarea>
                <br />
                <br />

                <input type="submit" value="提交" />
                <input type="reset" value="重置" />
              </fieldset>
            </form>

            <table>
              <caption>月度销售数据</caption>
              <colgroup>
                <col span="1"/>
                <col span="2"/>
              </colgroup>
              <thead>
                <tr>
                  <th>月份</th>
                  <th>销售额</th>
                  <th>利润</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>一月</td>
                  <td>$10,000</td>
                  <td>$2,000</td>
                </tr>
                <tr>
                  <td>二月</td>
                  <td>$12,000</td>
                  <td>$2,500</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>总计</td>
                  <td>$22,000</td>
                  <td>$4,500</td>
                </tr>
              </tfoot>
            </table>

            <details>
              <summary>点击查看详情</summary>
              <p>这里是隐藏的详细信息内容。</p>
            </details>

            <dialog open="open">
              <p>这是一个对话框示例</p>
              <button>关闭</button>
            </dialog>
          </section>
        </main>

        <aside>
          <h3>侧边栏内容</h3>
          <p>这里可以放置广告、相关链接等内容。</p>
          <ul>
            <li>
              <a href="#">链接1</a>
            </li>
            <li>
              <a href="#">链接2</a>
            </li>
            <li>
              <a href="#">链接3</a>
            </li>
          </ul>
        </aside>

        <footer>
          <address>
            作者: <a href="mailto:author@example.com">作者姓名</a>
            <br />
            地址: 示例街道123号
            <br />
            电话: 123-456-7890
          </address>
          <p>版权信息 &copy; 2023 公司名称</p>
          <progress value="75" max="100"></progress>
          <meter value="6" min="0" max="10">
            6 out of 10
          </meter>
          <template>
            <h2>这是一个模板内容</h2>
            <p>不会在页面加载时显示</p>
          </template>
        </footer>
      </div>
    </>
  )
}
