import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
export default () => (
    <Layout>
        <Head>
            <title>CC#1 Rot 13</title>
            <meta name="description" content="The first of many YLD coding challenges" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                      <h1>CC#1 Rot 13:</h1>
                    </header>
                    <span className="image main"><img src="/static/images/watch.jpg" alt="" /></span>
                      <p>Welcome to the first YLD Coding Challenge! 🔥🔥🔥</p>
                      <p>You are tasked in writing a function that returns the deciphered string input into readable text. 💪<br/>
                        The function can be named what ever you want it to be named!
                        <br/>
                      </p>
                    <h4>Examples</h4>
                    <p>
                      An example application that works could take the string <code>Bar lyq!</code> as an argument which is then deciphered and returned as "One yld!" 1️⃣.
                      <pre><code>
{`<?php
  function rot13($string) {
      return str_rot13($string);
  }
?>`}
                      </code></pre>
                    </p>
                    <h4>Categories</h4>
                    <p><ol>
                      <li>🗜️ Smallest working solution in bytes (look up "language-of-choice code golf")</li>
                      <li>🏎️ Most performant solution</li>
                      <li>🐎 Most esoteric solution (complex, using monads, built 100% in css) for example</li>
                    </ol></p>
                    <h4>Rules</h4>
                    <p>Your solution can be in any language, just make sure you provide instructions on how to run!<br/>
                      You <strong>can</strong> work in a group, or on your own!
                        <br/>
                      External modules / libraries will count towards the smallest solution size.
                    </p>
                    <h4>How to submit</h4>
                    <p>Slack your solution to (@tomgco) privately with instructions on how to run, the winner will be announced after the next YLD MCM on the Friday, 11th October 2019 and then sent to #group-engineering</p>
                    <h4>Questions or Hints</h4>
                    <p>Please raise them on <Link href="https://yld.slack.com/archives/CEFCP0Z26/p1568646863018100">#group-engineering</Link> in slack or to @tomgco directly.</p>
                    <h4>Closing Date</h4>
                    <p>Tuesday 8th October 2019</p>
                    <hr/>
                    <h4>Current Submissions</h4>
                    <p>Note: Order is based on time of entry, not position</p>
                    <table style={{width:'75%'}}>
                      <tr>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Size</th>
                        <th>Operations per Second</th>
                      </tr>
                      <tr>
                        <td>Can you beat...</td>
                        <td>Node v12.4.0</td>
                        <td>98 bytes</td>
                        <td>935,000 Ops/s</td>
                      </tr>
                      <tr>
                        <td>James Wright</td>
                        <td>Python 3.7.4</td>
                        <td>133 bytes</td>
                        <td>189,000 Ops/s</td>
                      </tr>
                      <tr>
                        <td>Dan Bartlett</td>
                        <td>Node v12.4.0 (C++ Addon)</td>
                        <td>1278 bytes</td>
                        <td>3,422,000 Ops/s</td>
                      </tr>
                      <tr>
                        <td>Dan Bartlett</td>
                        <td>Node v12.4.0 (WASM)</td>
                        <td>616 bytes (Compiled WASM)</td>
                        <td>NaN Ops/s (RangeError: start offset of Uint32Array should be a multiple of 4)</td>
                      </tr>
                      <tr>
                        <td>Dan Bartlett</td>
                        <td>Node v12.4.0 (WASM Rust)</td>
                        <td>310 bytes (Rust Code, Compiled using wasm-pack)</td>
                        <td>550,000 Ops/s</td>
                      </tr>
                      <tr>
                        <td>Dan Bartlett</td>
                        <td>Node v12.4.0 (GPU.js)</td>
                        <td>1843 bytes</td>
                        <td>1,222,000 Ops/s</td>
                      </tr>
                      <tr>
                        <td>Dan Bartlett</td>
                        <td>Node v12.4.0</td>
                        <td>256 bytes</td>
                        <td>1,052,000 Ops/s</td>
                      </tr>
                      <tr>
                        <td>Dan Bartlett</td>
                        <td>Node v12.4.0 (WASM Assembley Script)</td>
                        <td>1843 bytes</td>
                        <td>54,000 Ops/s</td>
                      </tr>
                    </table>
                </div>
            </section>
        </div>
    </Layout>
)
