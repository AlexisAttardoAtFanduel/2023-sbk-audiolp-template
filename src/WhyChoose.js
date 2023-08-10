function WhyChoose({url}) {
  return (
    <section className="section why-choose lazyload" data-bgset="https://s3.amazonaws.com/cdn.fanduel.com/images/2023/wwc/ns1000/why-choose-bg.jpg">
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="small-12 cell">
            <h2>WHY CHOOSE <img className="lazyload" data-src="https://s3.amazonaws.com/cdn.fanduel.com/images/2023/wwc/ns1000/fanduel-logo.png" alt="" /></h2>
          </div>
          <div className="small-12 small-offset-0 medium-10 medium-offset-1 large-8 large-offset-2 cell">
            <img className="lazyload americas-1-sportsbook" data-src="https://s3.amazonaws.com/cdn.fanduel.com/images/2023/wwc/ns1000/americas-1-sportsbook.png" alt="" />
            <div className="why-choose__copy-container">
              <p className="why-choose__copy"><b>Safe & Secure</b><br/>FanDuel Sportsbook is the #1 regulated online legal betting platform. We pride ourselves on the safety and security of our customers.</p>
              <p className="why-choose__copy"><b>Make Every Moment More</b><br/>The moneyline, point spread, player props, and Same Game Parlays are just a few of the ways customers can have fun while watching the game and win real cash on FanDuel.</p>
              <p className="why-choose__copy"><b>Easy Deposits, Fast Withdrawals</b><br/>We accept most major payment options. And when you win, you can receive your winnings directly in your bank account in as little as 2 hours!</p>
              <p className="why-choose__copy"><b>Exclusive Offers</b><br/>New and existing customers can take advantage of boosted odds and the best promotions.</p>
            </div>
            <a className="why-choose__cta" href={url} target="_self">join NOW</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
