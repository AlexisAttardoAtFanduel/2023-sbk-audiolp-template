function HowItWorks() {
  return (
    <section className="section how-it-works">
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="small-12 cell">
            <h3>HOW IT WORKS</h3>
            <div className="how-it-works__items">
              <div className="how-it-works__item">
                <img className="lazyload" data-src="https://s3.amazonaws.com/cdn.fanduel.com/images/2023/wwc/ns1000/number-1.png" alt="" />
                <div className="how-it-works__item-inner">
                  <h4>JOIN FANDUEL</h4>
                  <p>Sign up and verify your identity, it's easy and takes less than 2 minutes</p>
                </div>
              </div>
              <div className="how-it-works__item">
                <img className="lazyload" data-src="https://s3.amazonaws.com/cdn.fanduel.com/images/2023/wwc/ns1000/number-2.png" alt="" />
                <div className="how-it-works__item-inner">
                  <h4>MAKE YOUR<br/>FIRST DEPOSIT</h4>
                  <p>Fund your account with $10+</p>
                </div>
              </div>
              <div className="how-it-works__item">
                <img className="lazyload" data-src="https://s3.amazonaws.com/cdn.fanduel.com/images/2023/wwc/ns1000/number-3.png" alt="" />
                <div className="how-it-works__item-inner">
                  <h4>Get IN ON THE ACTION</h4>
                  <p>Place your first $5 bet to get $100 in Bonus Bets + $10 in Bonus Bets for every Team USA win!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
