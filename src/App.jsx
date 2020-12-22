import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

const METRICS = ["TTFB", "LCP", "FID", "FCP", "CLS"];

const App = () => {
  const [data, setData] = React.useState("");
  React.useEffect(() => {
    chrome.runtime.sendMessage(
      {
        type: "performance:metric:request",
      },
      (d) => {
        setData(d);
      }
    );
  }, []);

  return (
    <div>
      <h1>Page Metrics</h1>
      <table>
        <thead>
          <tr>
            <th width="20%"></th>
            <th>Visits</th>
            {METRICS.map((metric) => (
              <th key={metric} width="16%">
                {metric} (Avg)
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((url) => (
            <tr key={url}>
              <td>{url.slice(0, 30)}</td>
              <th>{data[url]["times"]}</th>
              {METRICS.map((metric) => (
                <td key={[url, metric].join("")} width="16%">
                  {Math.round((data[url][metric] || { average: 0 }).average)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>
        <u>Legend:</u>
      </h2>
      <br />
      <div>
        <b>TTFB:</b> Time to first byte is a measurement used as an indication
        of the responsiveness of a webserver or other network resource.
      </div>
      <br />
      <div>
        <b>LCP:</b> Largest Contentful Paint (LCP) measures loading performance.
        To provide a good user experience, LCP should occur within 2.5 seconds
        of when the page first starts loading.
      </div>
      <br />
      <div>
        <b>FID:</b> First Input Delay (FID) measures interactivity. To provide a
        good user experience, pages should have a FID of less than 100
        milliseconds.
      </div>
      <br />
      <div>
        <b>FCP:</b> First Contentful Paint (FCP) is a user-centric metric for
        measuring perceived page load speed. FCP measures how users perceive the
        performance of a website, rather than what a speed test tool measures.
      </div>
      <br />
      <div>
        <b>CLS:</b> Cumulative Layout Shift (CLS) measures visual stability. To
        provide a good user experience, pages should maintain a CLS of less than
        0.1.
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
