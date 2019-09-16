import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>CC#1 ROT 13: </h2>
                        </header>
                          <p>You are tasked in writing a function that diciphers various strings into readable text.
                            <br/>
                              There are three categories to this challenge:
                              <br/>
                              <br/>
                              <ol><li>Smallest working solution in bytes</li>
                                <li>Most performant solution</li>
                                  <li>Most esoteric solution (complex, using monads, built 100% in css) for example</li>
                                </ol>
                          </p>
                        <ul className="actions alt">
                            <li><Link href="/one-rot13"><a className="button next special">Get Started</a></Link></li>
                        </ul>
                    </div>
                </section>
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
                        <header className="major">
                            <h3>CC#2 TBC</h3>
                            <p>Maybe you can suggest the next one?</p>
                        </header>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                        <header className="major">
                            <h3>CC#3 TBC</h3>
                            <p>Maybe an NP Hard problem 😊?</p>
                        </header>
                        <Link href="https://en.wikipedia.org/wiki/NP-hardness"><a className="link primary"></a></Link>
                    </article>
{ /*{
                    <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                        <header className="major">
                            <h3>Magna</h3>
                            <p>Lorem etiam nullam</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic04.jpg')`}}>
                        <header className="major">
                            <h3>Ipsum</h3>
                            <p>Nisl sed aliquam</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic05.jpg')`}}>
                        <header className="major">
                            <h3>Consequat</h3>
                            <p>Ipsum dolor sit amet</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic06.jpg')`}}>
                        <header className="major">
                            <h3>Etiam</h3>
                            <p>Feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                */}
                </section>
            </div>

        </div>
    </Layout>
)
