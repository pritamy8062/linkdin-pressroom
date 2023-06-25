import React from "react";
import NewsItem1 from "./NewsItem1";

import newsitem10 from "../images/newsitem10.jpg";
import newsitem11 from "../images/newsitem11.jpg";
import newsitem12 from "../images/newsitem12.jpg";
import newsitem13 from "../images/newsitem13.jpg";
import newsitem14 from "../images/newsitem14.png";
import newsitem15 from "../images/newsitem15.jpg";
import newsitem16 from "../images/newsitem16.jpg";
import newsitem17 from "../images/newsitem17.jpg";
import newsitem18 from "../images/newsitem18.jpg";

const NewsPage2 = () => {
  const categories = ["Research", "Data and insights"];
  return (
    <div>
      <div className="outerDiv">
        <div className="firstDiv"></div>
        <div className="secondDiv">
          <div className="innerMostDiv">
            <NewsItem1
              heading="Unlocking nearly 10 billion years worth..."
              author="LinkedIn Corporate Communications"
              date="Jun 6, 2023"
              paragraph="While many B2B marketers around the globe are having to make tough decisions and tradeoffs about where to invest given macro uncertaint...

"
              categories={categories}
              image={newsitem10}
            />
          </div>
          <div className="innerMostDiv">
            <NewsItem1
              heading="LinkedIn Business Highlights from ..."
              author="LinkedIn Corporate Communications"
              date="Jun 6, 2023"
              paragraph="While many B2B marketers around the globe are having to make tough decisions and tradeoffs about where to invest given macro uncertaint...

"
              categories={categories}
              image={newsitem11}
            />
          </div>
          <div className="innerMostDiv">
            <NewsItem1
              heading="Transparency Report: First Half of 2022"
              author="LinkedIn Corporate Communications"
              date="Jun 6, 2023"
              paragraph="While many B2B marketers around the globe are having to make tough decisions and tradeoffs about where to invest given macro uncertaint...

"
              categories={categories}
              image={newsitem12}
            />
          </div>
          <div className="innerMostDiv">
            <NewsItem1
              heading="LinkedIn Business Highlights from Microsoft’s "
              author="LinkedIn Corporate Communications"
              date="Apr 25, 2023"
              paragraph="Today, Microsoft announced Q3 FY23 Earnings. Included in the report on the financial performance were the following LinkedIn highlights..."
              categories={categories}
              image={newsitem13}
            />
          </div>
          <div className="innerMostDiv">
            <NewsItem1
              heading="Transparency Report: Second Half of 2022 "
              author="LinkedIn Corporate Communications"
              date="Apr 20, 2023"
              paragraph="Today we published our Transparency Report for the second half of 2022. The report covers government requests we received and action we..."
              categories={categories}
              image={newsitem14}
            />
          </div>
          <div className="innerMostDiv">
            <NewsItem1
              heading="Introducing our values-based job filter and ... "
              author="LinkedIn Corporate Communications"
              date="Apr 19, 2023"
              paragraph="As today’s professionals navigate the ever-evolving job market—where change feels constant —we’re witnessing strong trends emerge aroun..."
              categories={categories}
              image={newsitem15}
            />
          </div>
          <div className="innerMostDiv">
            <NewsItem1
              heading="Our new and improved messaging experience..."
              author="LinkedIn Corporate Communications"
              date="Apr 12, 2023"
              paragraph="Today we announced new, free ways people who use LinkedIn can verify their identity, work email addresses and workplaces on LinkedIn. Y..."
              categories={categories}
              image={newsitem16}
            />
          </div>
          <div className="innerMostDiv">
            <NewsItem1
              heading="Helping marketers prove their strategy..."
              author="LinkedIn Corporate Communications"
              date="Mar 20, 2023"
              paragraph="Today we shared the latest update in a federal lawsuit we filed earlier this year against bad actors abusing our platform by selling in..."
              categories={categories}
              image={newsitem17}
            />
          </div>
          <div className="innerMostDiv">
            <NewsItem1
              heading="Court order affirms LinkedIn’s legal positions... "
              author="LinkedIn Corporate Communications"
              date="Mar 15, 2023"
              paragraph="To empower members with the latest AI skills, starting today we’re unlocking more than 100 LinkedIn Learning courses – and coming soon..."
              categories={categories}
              image={newsitem18}
            />
          </div>
        </div>
        <div id="thirdDiv"></div>
      </div>
    </div>
  );
};

export default NewsPage2;
