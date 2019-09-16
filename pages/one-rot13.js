import Head from "next/head"

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
                      <p>Welcome to the first YLD Coding Challenge!</p>
                      <p>You are tasked in writing a function that returns the deciphered string input into readable text.<br/>
                        The function can be named what ever you want it to be named!
                        <br/>
                      </p>
                    <h4>Examples</h4>
                    <p>
                      An example application that works could take the string <code>Bar lyq!</code> as an argument which is then deciphered and returned as "One yld!".
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
                      <li>Smallest working solution in bytes (look up "language of choice" code golf</li>
                      <li>Most performant solution</li>
                      <li>Most esoteric solution (complex, using monads, built 100% in css) for example</li>
                    </ol></p>
                    <h4>Rules</h4>
                    <p>Your solution can be in any language, just make sure you provide instructions on how to run!<br/>
                      You <strong>can</strong> work in a group, or on your own!
                        <br/>
                      External modules / libraries will count towards the smallest solution size.
                    </p>
                    <h4>How to submit</h4>
                    <p>Slack your solution to (@tomgco) privately with instructions on how to run, the winner will be announced after the next YLD MCM on the Friday, 11th October and then sent to #group-engineering</p>
                    <h4>Questions</h4>
                    <p>Please raise them on #group-engineering in slack or to @tomgco directly.</p>
                </div>
            </section>
        </div>
    </Layout>
)
