function Header({url}) {
  return (
    <header className="header lazyload" data-bgset="https://s3.amazonaws.com/cdn.fanduel.com/images/2023/wwc/ns1000/header-bg.jpg">
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="small-12 small-offset-0 medium-10 medium-offset-1 large-6 large-offset-3 large cell">
            <img className="lazyload header__womens-soccer" data-src="https://s3.amazonaws.com/cdn.fanduel.com/images/2023/wwc/ns1000/womens-soccer.png" alt="Women's Soccer" />
            <img className="lazyload header__offer" data-src="https://s3.amazonaws.com/cdn.fanduel.com/images/2023/wwc/ns1000/ns1000-offer.png" alt="No Sweat First Bet Up To $1000 Back In Bonus Bets" />
            <p className="header__p">Win your first bet or we’ll give you another shot with up to $1000 back in Bonus Bets when you join <span className="nowrap">America’s #1 Sportsbook.</span></p>
          </div>
          <div className="small-12 small-offset-0 medium-12 medium-offset-0 large-8 large-offset-2 large cell">
            <img className="lazyload header__logo" data-src="https://s3.amazonaws.com/cdn.fanduel.com/images/2023/wwc/ns1000/fanduel-logo.png" alt="FanDuel" />
            <a className="header__cta" href={url} target="_self">JOIN NOW</a>
          </div>
          <div className="small-12 small-offset-0 medium-12 medium-offset-0 large-8 large-offset-2 large cell">
            <div className="header__legal">
              <p className="header__copy header__copy--legal"><span> Gambling Problem? Call 1-800-GAMBLER. Hope is here.  Gamblinghelplinema.org or call <span className="nowrap">1-(800)-327-5050</span> for 24/7 support (MA). Call <span className="nowrap">1-877-8HOPE-NY</span> or Text HOPENY (467369) (NY).</span><br/>21+ and present in AZ, CO, CT, IA, IL, IN, KS, LA (permitted parishes only), MA, MD, MI, NJ, NY, OH, PA, TN, VA, WV, or WY. FanDuel is offering online sports wagering in Kansas under an agreement with Kansas Star Casino, LLC. First online real money wager only. $10 first deposit required. Bonus issued as nonwithdrawable bonus bets that expires in 14 days. Restrictions apply. See terms at sportsbook.fanduel.com.  Gambling Problem? Call 1-800-GAMBLER or visit FanDuel.com/RG (CO, IA, MI, NJ, OH, PA, IL, TN, VA), 1-800-NEXT-STEP or text NEXTSTEP to 53342 (AZ), 1-888-789-7777 or visit ccpg.org/chat (CT), 1-800-9-WITH-IT (IN), 1-800-522-4700 or visit ksgamblinghelp.com (KS), 1-877-770-STOP (LA), visit www.mdgamblinghelp.org (MD), 1-800-522-4700 (WY), or visit www.1800gambler.net (WV).</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
