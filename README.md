# WebVitals
A chrome extension that logs out essential web vital statistics.

To run: 

Go to folder directory and open terminal. 
- yarn install
- yarn build
- yarn start

Go to chrome web browser and go to edge://extensions/.
- On developer mode
- Load unpacked 
- Load dist folder (what was built) 
- Go to any website and test the vitals!
      <br/>
      <br/>
      <br/>
<h2>Vitals measured:</h2>
        <b>TTFB:</b> Time to first byte is a measurement used as an indication
        of the responsiveness of a webserver or other network resource.
      <br/>
      <br/>
        <b>LCP:</b> Largest Contentful Paint (LCP) measures loading performance.
        To provide a good user experience, LCP should occur within 2.5 seconds
        of when the page first starts loading.
      <br/>
      <br/>
        <b>FID:</b> First Input Delay (FID) measures interactivity. To provide a
        good user experience, pages should have a FID of less than 100
        milliseconds.
      <br/>
      <br/>
        <b>FCP:</b> First Contentful Paint (FCP) is a user-centric metric for
        measuring perceived page load speed. FCP measures how users perceive the
        performance of a website, rather than what a speed test tool measures.
      <br/>
      <br/>
        <b>CLS:</b> Cumulative Layout Shift (CLS) measures visual stability. To
        provide a good user experience, pages should maintain a CLS of less than
        0.1.
<h2>Built with:</h2>
<ul>
  <li>React js</li>
  <li>web-vitals (https://web.dev/vitals/)</li>
 </ul>
