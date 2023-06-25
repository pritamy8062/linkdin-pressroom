import React from "react";
import NewsItem1 from "./NewsItem1";

import newsitem1 from "../images/newsitem1.jpg";
import newsitem2 from "../images/newsitem2.png";
import newsitem3 from "../images/newsitem3.png";
import newsitem4 from "../images/newsitem4.jpg";
import newsitem5 from "../images/newsitem5.jpg";
import newsitem6 from "../images/newsitem6.jpg";
import newsitem7 from "../images/newsitem7.jpg";
import newsitem8 from "../images/newsitem8.jpg";
import newsitem9 from "../images/newsitem9.jpg";

const News = () => {
  const categories = ["Research", "Data and insights"];
  return (
    <div>
      <div className="outerDiv">
        <div className="firstDiv"></div>
        <div className="secondDiv">
          <div className="innerMostDiv">
            <NewsItem1
              heading="State of Workplace Jargon Report 2023"
              author="LinkedIn Corporate Communications"
              date="Jun 13, 2023"
              paragraph="Starting a new job—whether it’s your first position, or a next step on your career journey—learning the language of a new workplace is..."
              categories={categories}
              image={newsitem1}
            />
          </div>
          <div className="innerMostDiv">
            <NewsItem1
              heading="Introducing new resources to help B2B..."
              author="LinkedIn Corporate Communications"
              date="Jun 6, 2023"
              paragraph="While many B2B marketers around the globe are having to make tough decisions and tradeoffs about where to invest given macro uncertaint...

"
              categories={categories}
              image={newsitem2}
            />
          </div>
          <div className="innerMostDiv">
            <NewsItem1
              heading="A message from our CEO"
              author="LinkedIn Corporate Communications"
              date="May 8, 2023"
              paragraph="Today our CEO shared changes to our Global Business Organization (GBO) and our China strategy that will result in a reduction of roles..."
              categories={categories}
              image={newsitem3}
            />
          </div>
          <div className="innerMostDiv">
            <NewsItem1
              heading="LinkedIn Business Highlights from Microsoft’s "
              author="LinkedIn Corporate Communications"
              date="Apr 25, 2023"
              paragraph="Today, Microsoft announced Q3 FY23 Earnings. Included in the report on the financial performance were the following LinkedIn highlights..."
              categories={categories}
              image={newsitem4}
            />
          </div>
          <div className="innerMostDiv">
            <NewsItem1
              heading="Transparency Report: Second Half of 2022 "
              author="LinkedIn Corporate Communications"
              date="Apr 20, 2023"
              paragraph="Today we published our Transparency Report for the second half of 2022. The report covers government requests we received and action we..."
              categories={categories}
              image={newsitem5}
            />
          </div>
          <div className="innerMostDiv">
            <NewsItem1
              heading="Introducing our values-based job filter and ... "
              author="LinkedIn Corporate Communications"
              date="Apr 19, 2023"
              paragraph="As today’s professionals navigate the ever-evolving job market—where change feels constant —we’re witnessing strong trends emerge aroun..."
              categories={categories}
              image={newsitem6}
            />
          </div>
          <div className="innerMostDiv">
            <NewsItem1
              heading="Our new verification features"
              author="LinkedIn Corporate Communications"
              date="Apr 12, 2023"
              paragraph="Today we announced new, free ways people who use LinkedIn can verify their identity, work email addresses and workplaces on LinkedIn. Y..."
              categories={categories}
              image={newsitem7}
            />
          </div>
          <div className="innerMostDiv">
            <NewsItem1
              heading="LinkedIn continues protecting members ..."
              author="LinkedIn Corporate Communications"
              date="Mar 20, 2023"
              paragraph="Today we shared the latest update in a federal lawsuit we filed earlier this year against bad actors abusing our platform by selling in..."
              categories={categories}
              image={newsitem8}
            />
          </div>
          <div className="innerMostDiv">
            <NewsItem1
              heading="Unlock opportunities and elevate your career... "
              author="LinkedIn Corporate Communications"
              date="Mar 15, 2023"
              paragraph="To empower members with the latest AI skills, starting today we’re unlocking more than 100 LinkedIn Learning courses – and coming soon..."
              categories={categories}
              image={newsitem9}
            />
          </div>
        </div>
        <div id="thirdDiv"></div>
      </div>
    </div>
  );
};

export default News;
