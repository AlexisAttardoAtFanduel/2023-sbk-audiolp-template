import Header from './Header.js';
import HowItWorks from './HowItWorks.js';
import WhyChoose from './WhyChoose.js';
import Download from './Download.js';

function getClickTag() {
  const clickTags = [
    {
      "code": "101",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218282;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-101&af_ad=radio-101 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218282;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676273"
    },
    {
      "code": "1059",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218419;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-1059&af_ad=radio-1059 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218419;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676433"
    },
    {
      "code": "1620",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203046;7218299;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-iowa&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-1620&af_ad=radio-1620 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203046;7218299;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676292"
    },
    {
      "code": "2400",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7216004;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-2400&af_ad=radio-2400 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7216004;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671859"
    },
    {
      "code": "1045ESPN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218191;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-louisiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-1045espn&af_ad=radio-1045espn <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218191;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676134"
    },
    {
      "code": "610BOB",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218313;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-610bob&af_ad=radio-610bob <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218313;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676330"
    },
    {
      "code": "6RINGS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189280;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-6rings&af_ad=radio-6rings <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189280;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623444"
    },
    {
      "code": "ABDALLA",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218270;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-abdalla&af_ad=radio-abdalla <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218270;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676261"
    },
    {
      "code": "ADAM",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215994;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-adam&af_ad=radio-adam <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215994;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671849"
    },
    {
      "code": "AL",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218358;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-al&af_ad=radio-al <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218358;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676377"
    },
    {
      "code": "ANDRE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218362;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-andre&af_ad=radio-andre <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218362;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676381"
    },
    {
      "code": "ANDREW",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218370;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-andrew&af_ad=radio-andrew <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218370;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676389"
    },
    {
      "code": "ANDY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218381;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-colorado&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-andy&af_ad=radio-andy <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218381;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676401"
    },
    {
      "code": "ANGIE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218524;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-connecticut&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-angie&af_ad=radio-angie <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218524;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676514"
    },
    {
      "code": "ANTHONY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218221;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-anthony&af_ad=radio-anthony <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218221;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676205"
    },
    {
      "code": "ARCAND",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189258;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-arcand&af_ad=radio-arcand <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189258;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623422"
    },
    {
      "code": "ASHLEY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218197;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-louisiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-ashley&af_ad=radio-ashley <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218197;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676140"
    },
    {
      "code": "AWADD",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218432;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-awadd&af_ad=radio-awadd <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218432;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676462"
    },
    {
      "code": "BANANA",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189262;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-banana&af_ad=radio-banana <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189262;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623426"
    },
    {
      "code": "BAX",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189273;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bax&af_ad=radio-bax <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189273;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623437"
    },
    {
      "code": "BEARS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215986;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bears&af_ad=radio-bears <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215986;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671841"
    },
    {
      "code": "BENNETT",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218412;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bennett&af_ad=radio-bennett <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218412;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676426"
    },
    {
      "code": "BERN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218275;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bern&af_ad=radio-bern <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218275;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676266"
    },
    {
      "code": "BERNIE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218194;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-louisiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bernie&af_ad=radio-bernie <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218194;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676137"
    },
    {
      "code": "BET",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218567;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=sportsbook-evergreen-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bet&af_ad=radio-bet <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218567;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676577"
    },
    {
      "code": "BETFD",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218579;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=sportsbook-evergreen-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-betfd&af_ad=radio-betfd <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218579;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676589"
    },
    {
      "code": "BIG",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218251;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-big&af_ad=radio-big <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218251;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676237"
    },
    {
      "code": "BIGCHEE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218444;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bigchee&af_ad=radio-bigchee <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218444;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676474"
    },
    {
      "code": "BIGMIKE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215989;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bigmike&af_ad=radio-bigmike <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215989;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671844"
    },
    {
      "code": "BILL",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203057;7218427;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-nj&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bill&af_ad=radio-bill <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203057;7218427;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676457"
    },
    {
      "code": "BISH",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218441;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bish&af_ad=radio-bish <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218441;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676471"
    },
    {
      "code": "BJ",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218380;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-colorado&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bj&af_ad=radio-bj <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218380;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676400"
    },
    {
      "code": "BLITZ",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218401;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-blitz&af_ad=radio-blitz <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218401;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676415"
    },
    {
      "code": "BLUE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189266;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-blue&af_ad=radio-blue <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189266;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623430"
    },
    {
      "code": "BLUEWIRE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7216001;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bluewire&af_ad=radio-bluewire <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7216001;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671856"
    },
    {
      "code": "BLUEWIRE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189283;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bluewire&af_ad=radio-bluewire <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189283;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623447"
    },
    {
      "code": "BOB",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218365;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bob&af_ad=radio-bob <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218365;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676384"
    },
    {
      "code": "BONER",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218398;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-boner&af_ad=radio-boner <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218398;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676412"
    },
    {
      "code": "BOOG",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218423;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-boog&af_ad=radio-boog <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218423;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676437"
    },
    {
      "code": "BOOMER",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218235;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-boomer&af_ad=radio-boomer <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218235;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676219"
    },
    {
      "code": "BORING",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189279;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-boring&af_ad=radio-boring <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189279;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623443"
    },
    {
      "code": "BOSTON",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189281;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-boston&af_ad=radio-boston <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189281;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623445"
    },
    {
      "code": "BOUNCE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218340;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bs&af_ad=radio-bs&c=2023_sportsbook-general-acquisition-michigan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218340;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676359"
    },
    {
      "code": "BRAD",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218352;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bs&af_ad=radio-bs&c=2023_sportsbook-general-acquisition-michigan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218352;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676371"
    },
    {
      "code": "BRIAN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218439;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-brian&af_ad=radio-brian <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218439;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676469"
    },
    {
      "code": "BRIAN1080",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218519;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-connecticut&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-brian1080&af_ad=radio-brian1080 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218519;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676509"
    },
    {
      "code": "BROCK",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218350;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bs&af_ad=radio-bs&c=2023_sportsbook-general-acquisition-michigan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218350;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676369"
    },
    {
      "code": "BRYAN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218243;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bryan&af_ad=radio-bryan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218243;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676229"
    },
    {
      "code": "BULLDOG",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218222;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bulldog&af_ad=radio-bulldog <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218222;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676206"
    },
    {
      "code": "CALKINS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218410;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-calkins&af_ad=radio-calkins <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218410;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676424"
    },
    {
      "code": "CANTY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218230;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-canty&af_ad=radio-canty <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218230;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676214"
    },
    {
      "code": "CAPSPACE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215985;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-capspace&af_ad=radio-capspace <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215985;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671840"
    },
    {
      "code": "CAPTAIN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203048;7218331;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-indiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-captain&af_ad=radio-captain <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203048;7218331;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676351"
    },
    {
      "code": "CARLIN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218231;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-carlin&af_ad=radio-carlin <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218231;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676215"
    },
    {
      "code": "CASEY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203048;7218335;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-indiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-casey&af_ad=radio-casey <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203048;7218335;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676355"
    },
    {
      "code": "CASH",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215990;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-cash&af_ad=radio-cash <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215990;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671845"
    },
    {
      "code": "CHAZ",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218515;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-connecticut&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-chaz&af_ad=radio-chaz <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218515;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676505"
    },
    {
      "code": "CHAZ",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218521;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-connecticut&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-chaz&af_ad=radio-chaz <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218521;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676511"
    },
    {
      "code": "CHILL",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218443;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-chill&af_ad=radio-chill <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218443;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676473"
    },
    {
      "code": "CJ",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218514;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-connecticut&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-cj&af_ad=radio-cj <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218514;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676504"
    },
    {
      "code": "COCO",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218240;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-coco&af_ad=radio-coco <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218240;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676224"
    },
    {
      "code": "CODE",
      "clicktag": "Flashtalking Link"
    },
    {
      "code": "CONAN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215982;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-conan&af_ad=radio-conan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215982;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671837"
    },
    {
      "code": "CORSON",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218256;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-corson&af_ad=radio-corson <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218256;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676242"
    },
    {
      "code": "CROCKETT",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218376;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-crockett&af_ad=radio-crockett <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218376;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676395"
    },
    {
      "code": "DALE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218315;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-dale&af_ad=radio-dale <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218315;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676332"
    },
    {
      "code": "DALE1580",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218465;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-az&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-dale1580&af_ad=radio-dale1580 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218465;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676487"
    },
    {
      "code": "DAN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218384;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-colorado&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-dan&af_ad=radio-dan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218384;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676404"
    },
    {
      "code": "DANA",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218316;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-dana&af_ad=radio-dana <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218316;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676333"
    },
    {
      "code": "DANGER",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203046;7218295;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-iowa&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-danger&af_ad=radio-danger <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203046;7218295;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676288"
    },
    {
      "code": "DAVEJOHNSON",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218445;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-davejohnson&af_ad=radio-davejohnson <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218445;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676475"
    },
    {
      "code": "DAVEO",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218317;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-daveo&af_ad=radio-daveo <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218317;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676334"
    },
    {
      "code": "DAVIS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218253;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-davis&af_ad=radio-davis <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218253;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676239"
    },
    {
      "code": "DAWN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218415;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-dawn&af_ad=radio-dawn <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218415;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676429"
    },
    {
      "code": "DCS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218463;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-az&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-dcs&af_ad=radio-dcs <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218463;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676485"
    },
    {
      "code": "DEAN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218471;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-az&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-dean&af_ad=radio-dean <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218471;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676493"
    },
    {
      "code": "DEMPSEY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218382;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-colorado&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-dempsey&af_ad=radio-dempsey <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218382;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676402"
    },
    {
      "code": "DENNIS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203057;7218428;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-nj&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-dennis&af_ad=radio-dennis <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203057;7218428;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676458"
    },
    {
      "code": "DIAMOND",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218262;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-diamond&af_ad=radio-diamond <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218262;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676248"
    },
    {
      "code": "DOM",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218367;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-dom&af_ad=radio-dom <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218367;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676386"
    },
    {
      "code": "DOUG",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218345;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bs&af_ad=radio-bs&c=2023_sportsbook-general-acquisition-michigan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218345;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676364"
    },
    {
      "code": "DOYLE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203057;7218426;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-nj&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-doyle&af_ad=radio-doyle <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203057;7218426;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676456"
    },
    {
      "code": "DRIVE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218283;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-drive&af_ad=radio-drive <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218283;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676274"
    },
    {
      "code": "DRIVE1",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218402;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-drive1&af_ad=radio-drive1 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218402;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676416"
    },
    {
      "code": "DUFFY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218241;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-duffy&af_ad=radio-duffy <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218241;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676225"
    },
    {
      "code": "EB",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218440;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-eb&af_ad=radio-eb <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218440;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676470"
    },
    {
      "code": "EVAN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218236;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-evan&af_ad=radio-evan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218236;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676220"
    },
    {
      "code": "FAN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218371;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-fan&af_ad=radio-fan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218371;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676390"
    },
    {
      "code": "FANATIC",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218364;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-fanatic&af_ad=radio-fanatic <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218364;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676383"
    },
    {
      "code": "FAST",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218284;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-fast&af_ad=radio-fast <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218284;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676275"
    },
    {
      "code": "FAURIA",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189257;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-fauria&af_ad=radio-fauria <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189257;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623421"
    },
    {
      "code": "FAURIA1",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189272;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-fauria1&af_ad=radio-fauria1 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189272;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623436"
    },
    {
      "code": "FCSPORTS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218575;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=sportsbook-evergreen-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-fcsports&af_ad=radio-fcsports <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218575;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676585"
    },
    {
      "code": "FISHBOY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218377;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-fishboy&af_ad=radio-fishboy <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218377;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676396"
    },
    {
      "code": "FITZY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189260;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-fitzy&af_ad=radio-fitzy <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189260;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623424"
    },
    {
      "code": "FOGEL",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218312;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-fogel&af_ad=radio-fogel <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218312;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676329"
    },
    {
      "code": "FOX",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218516;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-connecticut&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-fox&af_ad=radio-fox <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218516;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676506"
    },
    {
      "code": "FRANKHOUSE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218338;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bs&af_ad=radio-bs&c=2023_sportsbook-general-acquisition-michigan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218338;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676357"
    },
    {
      "code": "FRED",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189267;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-fred&af_ad=radio-fred <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189267;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623431"
    },
    {
      "code": "FULLER",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218409;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-fuller&af_ad=radio-fuller <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218409;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676423"
    },
    {
      "code": "GABE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218464;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-az&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-gabe&af_ad=radio-gabe <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218464;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676486"
    },
    {
      "code": "GAMMON",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218311;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-gammon&af_ad=radio-gammon <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218311;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676328"
    },
    {
      "code": "GASMAN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218407;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-gasman&af_ad=radio-gasman <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218407;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676421"
    },
    {
      "code": "GETUP",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215992;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-getup&af_ad=radio-getup <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215992;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671847"
    },
    {
      "code": "GIGLIO",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218361;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-giglio&af_ad=radio-giglio <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218361;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676380"
    },
    {
      "code": "GIO",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218237;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-gio&af_ad=radio-gio <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218237;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676221"
    },
    {
      "code": "GORDON",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218233;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-gordon&af_ad=radio-gordon <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218233;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676217"
    },
    {
      "code": "GORMAN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218320;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-gorman&af_ad=radio-gorman <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218320;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676337"
    },
    {
      "code": "GP",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218447;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-gp&af_ad=radio-gp <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218447;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676477"
    },
    {
      "code": "GRACA",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218232;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-graca&af_ad=radio-graca <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218232;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676216"
    },
    {
      "code": "GREENY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215996;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-greeny&af_ad=radio-greeny <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215996;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671851"
    },
    {
      "code": "GREG",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218368;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-greg&af_ad=radio-greg <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218368;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676387"
    },
    {
      "code": "GRUBER",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218337;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bs&af_ad=radio-bs&c=2023_sportsbook-general-acquisition-michigan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218337;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676356"
    },
    {
      "code": "GW",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218446;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-gw&af_ad=radio-gw <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218446;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676476"
    },
    {
      "code": "HAMMER",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218360;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-hammer&af_ad=radio-hammer <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218360;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676379"
    },
    {
      "code": "HAPPER",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203046;7218297;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-iowa&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-happer&af_ad=radio-happer <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203046;7218297;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676290"
    },
    {
      "code": "HARDY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189268;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-hardy&af_ad=radio-hardy <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189268;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623432"
    },
    {
      "code": "HEBERT",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218198;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-louisiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-hebert&af_ad=radio-hebert <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218198;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676141"
    },
    {
      "code": "HEDRICK",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218257;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-hedrick&af_ad=radio-hedrick <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218257;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676243"
    },
    {
      "code": "HERD",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218566;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=sportsbook-evergreen-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-herd&af_ad=radio-herd <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218566;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676576"
    },
    {
      "code": "HILL",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189256;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-hill&af_ad=radio-hill <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189256;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623420"
    },
    {
      "code": "HILL1",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189271;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-hill1&af_ad=radio-hill1 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189271;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623435"
    },
    {
      "code": "HOLDER",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218261;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-holder&af_ad=radio-holder <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218261;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676247"
    },
    {
      "code": "HOUSE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215987;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-house&af_ad=radio-house <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215987;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671842"
    },
    {
      "code": "HOVEL",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218265;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-hovel&af_ad=radio-hovel <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218265;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676251"
    },
    {
      "code": "HOWARD",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218223;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-howard&af_ad=radio-howard <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218223;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676207"
    },
    {
      "code": "HUBER",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218252;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-huber&af_ad=radio-huber <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218252;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676238"
    },
    {
      "code": "HUNK",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218416;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-hunk&af_ad=radio-hunk <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218416;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676430"
    },
    {
      "code": "IHEART",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189278;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-iheart&af_ad=radio-iheart <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189278;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623442"
    },
    {
      "code": "IKE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218359;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-ike&af_ad=radio-ike <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218359;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676378"
    },
    {
      "code": "IVENS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218404;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-ivens&af_ad=radio-ivens <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218404;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676418"
    },
    {
      "code": "JACK",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203046;7218296;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-iowa&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-jack&af_ad=radio-jack <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203046;7218296;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676289"
    },
    {
      "code": "JAKE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218323;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-jake&af_ad=radio-jake <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218323;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676340"
    },
    {
      "code": "JANSEN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218346;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bs&af_ad=radio-bs&c=2023_sportsbook-general-acquisition-michigan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218346;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676365"
    },
    {
      "code": "JEFF",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218433;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-jeff&af_ad=radio-jeff <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218433;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676463"
    },
    {
      "code": "JEREMY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218246;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-jeremy&af_ad=radio-jeremy <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218246;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676232"
    },
    {
      "code": "JERICHO",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215984;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-jericho&af_ad=radio-jericho <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215984;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671839"
    },
    {
      "code": "JGM",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218420;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-jgm&af_ad=radio-jgm <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218420;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676434"
    },
    {
      "code": "JOE102",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218421;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-joe102&af_ad=radio-joe102 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218421;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676435"
    },
    {
      "code": "JOSH",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218269;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-josh&af_ad=radio-josh <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218269;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676260"
    },
    {
      "code": "JR",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218348;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bs&af_ad=radio-bs&c=2023_sportsbook-general-acquisition-michigan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218348;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676367"
    },
    {
      "code": "JSMITH",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218411;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-jsmith&af_ad=radio-jsmith <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218411;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676425"
    },
    {
      "code": "JSS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218245;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-jss&af_ad=radio-jss <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218245;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676231"
    },
    {
      "code": "JUICE22",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215988;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-juice22&af_ad=radio-juice22 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215988;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671843"
    },
    {
      "code": "JUSTBOB",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218260;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-justbob&af_ad=radio-justbob <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218260;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676246"
    },
    {
      "code": "KARSON",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189259;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-karson&af_ad=radio-karson <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189259;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623423"
    },
    {
      "code": "KBOB",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203046;7218300;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-iowa&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kbob&af_ad=radio-kbob <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203046;7218300;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676293"
    },
    {
      "code": "KC",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218318;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kc&af_ad=radio-kc <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218318;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676335"
    },
    {
      "code": "KCSP",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218314;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kcsp&af_ad=radio-kcsp <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218314;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676331"
    },
    {
      "code": "KCUB",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218469;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-az&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kcub&af_ad=radio-kcub <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218469;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676491"
    },
    {
      "code": "KDUS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218461;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-az&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kdus&af_ad=radio-kdus <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218461;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676483"
    },
    {
      "code": "KEN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218247;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-ken&af_ad=radio-ken <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218247;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676233"
    },
    {
      "code": "KEVIN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218397;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kevin&af_ad=radio-kevin <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218397;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676411"
    },
    {
      "code": "KFBC",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203061;7218497;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-wyoming&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kfbc&af_ad=radio-kfbc <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203061;7218497;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676501"
    },
    {
      "code": "KFFN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218470;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-az&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kffn&af_ad=radio-kffn <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218470;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676492"
    },
    {
      "code": "KHAK",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203046;7218294;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-iowa&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-khak&af_ad=radio-khak <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203046;7218294;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676287"
    },
    {
      "code": "KJM",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215995;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kjm&af_ad=radio-kjm <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215995;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671850"
    },
    {
      "code": "KKNN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218388;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-colorado&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kknn&af_ad=radio-kknn <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218388;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676408"
    },
    {
      "code": "KLUCK",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203048;7218334;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-indiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kluck&af_ad=radio-kluck <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203048;7218334;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676354"
    },
    {
      "code": "KLWB",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218193;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-louisiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-klwb&af_ad=radio-klwb <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218193;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676136"
    },
    {
      "code": "KNSS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218328;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-knss&af_ad=radio-knss <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218328;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676345"
    },
    {
      "code": "KOA",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218383;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-colorado&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-koa&af_ad=radio-koa <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218383;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676403"
    },
    {
      "code": "KQXL",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218189;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-louisiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kqxl&af_ad=radio-kqxl <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218189;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676132"
    },
    {
      "code": "KRISTINA",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218255;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kristina&af_ad=radio-kristina <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218255;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676241"
    },
    {
      "code": "KRRQ",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218196;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-louisiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-krrq&af_ad=radio-krrq <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218196;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676139"
    },
    {
      "code": "KSLX",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218467;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-az&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kslx&af_ad=radio-kslx <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218467;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676489"
    },
    {
      "code": "KTRR",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218386;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-colorado&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-ktrr&af_ad=radio-ktrr <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218386;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676406"
    },
    {
      "code": "KUHN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203046;7218293;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-iowa&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kuhn&af_ad=radio-kuhn <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203046;7218293;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676286"
    },
    {
      "code": "KUPD",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218468;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-az&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kupd&af_ad=radio-kupd <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218468;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676490"
    },
    {
      "code": "KXKL",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218385;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-colorado&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kxkl&af_ad=radio-kxkl <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218385;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676405"
    },
    {
      "code": "KXKS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218201;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-louisiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kxks&af_ad=radio-kxks <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218201;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676144"
    },
    {
      "code": "LANE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218264;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-lane&af_ad=radio-lane <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218264;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676250"
    },
    {
      "code": "LOCK",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215991;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-lock&af_ad=radio-lock <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215991;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671846"
    },
    {
      "code": "LOHO",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218277;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-loho&af_ad=radio-loho <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218277;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676268"
    },
    {
      "code": "LOU1",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218517;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-connecticut&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-lou1&af_ad=radio-lou1 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218517;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676507"
    },
    {
      "code": "LOWE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215998;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-lowe&af_ad=radio-lowe <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215998;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671853"
    },
    {
      "code": "LUCERO",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218322;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-lucero&af_ad=radio-lucero <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218322;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676339"
    },
    {
      "code": "LUTZ",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218325;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-lutz&af_ad=radio-lutz <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218325;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676342"
    },
    {
      "code": "LYNCH",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218228;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-lynch&af_ad=radio-lynch <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218228;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676212"
    },
    {
      "code": "MA",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189282;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-ma&af_ad=radio-ma <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189282;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623446"
    },
    {
      "code": "MAD",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218570;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=sportsbook-evergreen-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-mad&af_ad=radio-mad <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218570;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676580"
    },
    {
      "code": "MANDIS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218424;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-mandis&af_ad=radio-mandis <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218424;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676438"
    },
    {
      "code": "MARTY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218279;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-marty&af_ad=radio-marty <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218279;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676270"
    },
    {
      "code": "MARY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218518;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-connecticut&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-mary&af_ad=radio-mary <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218518;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676508"
    },
    {
      "code": "MATT",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218278;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-matt&af_ad=radio-matt <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218278;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676269"
    },
    {
      "code": "MERCY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7216003;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-mercy&af_ad=radio-mercy <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7216003;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671858"
    },
    {
      "code": "MICHAEL",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218357;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-michael&af_ad=radio-michael <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218357;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676376"
    },
    {
      "code": "MICKEY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218417;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-mickey&af_ad=radio-mickey <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218417;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676431"
    },
    {
      "code": "MIGUEL",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218273;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-miguel&af_ad=radio-miguel <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218273;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676264"
    },
    {
      "code": "MIGUEL",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218274;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-miguel&af_ad=radio-miguel <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218274;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676265"
    },
    {
      "code": "MIKE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218242;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-mike&af_ad=radio-mike <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218242;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676226"
    },
    {
      "code": "MILES",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203048;7218333;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-indiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-miles&af_ad=radio-miles <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203048;7218333;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676353"
    },
    {
      "code": "MITCH",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218434;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-mitch&af_ad=radio-mitch <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218434;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676464"
    },
    {
      "code": "MONEYRADIO",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218462;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-az&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-moneyradio&af_ad=radio-moneyradio <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218462;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676484"
    },
    {
      "code": "MONROE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203060;7218482;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-wv&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-monroe&af_ad=radio-monroe <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203060;7218482;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676499"
    },
    {
      "code": "NBA1",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218572;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=sportsbook-evergreen-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-nba1&af_ad=radio-nba1 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218571;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676581"
    },
    {
      "code": "NBAPOD",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7216000;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-nbapod&af_ad=radio-nbapod <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7216000;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671855"
    },
    {
      "code": "NBCSPORTS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218571;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=sportsbook-evergreen-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wolf&af_ad=radio-wolf <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218572;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676582"
    },
    {
      "code": "NFL1",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218573;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=sportsbook-evergreen-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-nfl1&af_ad=radio-nfl1 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218573;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676583"
    },
    {
      "code": "NHL1",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218574;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=sportsbook-evergreen-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-nhl1&af_ad=radio-nhl1 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218574;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676584"
    },
    {
      "code": "NICK",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218389;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-colorado&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-nick&af_ad=radio-nick <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218389;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676409"
    },
    {
      "code": "NORWOOD",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218321;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-norwood&af_ad=radio-norwood <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218321;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676338"
    },
    {
      "code": "NYC",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218238;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-nyc&af_ad=radio-nyc <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218238;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676222"
    },
    {
      "code": "OFFSIDES",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218195;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-louisiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-offsides&af_ad=radio-offsides <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218195;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676138"
    },
    {
      "code": "OLSON",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218414;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-olson&af_ad=radio-olson <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218414;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676428"
    },
    {
      "code": "OSBURN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218324;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-osburn&af_ad=radio-osburn <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218324;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676341"
    },
    {
      "code": "PATK",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189274;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-patk&af_ad=radio-patk <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189274;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623438"
    },
    {
      "code": "PATRICO",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218280;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-patrico&af_ad=radio-patrico <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218280;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676271"
    },
    {
      "code": "PEREZ",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189277;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-perez&af_ad=radio-perez <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189277;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623441"
    },
    {
      "code": "PETER",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218234;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-peter&af_ad=radio-peter <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218234;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676218"
    },
    {
      "code": "PETRO",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218319;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-petro&af_ad=radio-petro <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218319;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676336"
    },
    {
      "code": "PIERRE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218250;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-pierre&af_ad=radio-pierre <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218250;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676236"
    },
    {
      "code": "PLAY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218569;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=sportsbook-evergreen-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-play&af_ad=radio-play <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218569;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676579"
    },
    {
      "code": "RAMIRO",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189264;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-ramiro&af_ad=radio-ramiro <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189264;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623428"
    },
    {
      "code": "RANDY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218373;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-randy&af_ad=radio-randy <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218373;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676392"
    },
    {
      "code": "RANDY1580",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218466;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-az&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-randy1580&af_ad=radio-randy1580 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218466;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676488"
    },
    {
      "code": "RICH",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218430;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-rich&af_ad=radio-rich <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218430;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676460"
    },
    {
      "code": "RIG",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218438;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-rig&af_ad=radio-rig <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218438;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676468"
    },
    {
      "code": "RIZZ",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218281;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-rizz&af_ad=radio-rizz <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218281;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676272"
    },
    {
      "code": "ROB",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218422;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-rob&af_ad=radio-rob <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218422;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676436"
    },
    {
      "code": "ROGER",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218227;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-roger&af_ad=radio-roger <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218227;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676211"
    },
    {
      "code": "ROHAN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218374;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-rohan&af_ad=radio-rohan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218374;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676393"
    },
    {
      "code": "ROSENBERG",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218239;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-rosenberg&af_ad=radio-rosenberg <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218239;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676223"
    },
    {
      "code": "RUEBEN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218200;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-louisiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-rueben&af_ad=radio-rueben <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218200;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676143"
    },
    {
      "code": "SAL",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218225;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-sal&af_ad=radio-sal <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218225;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676209"
    },
    {
      "code": "SCORDO",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218366;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-scordo&af_ad=radio-scordo <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218366;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676385"
    },
    {
      "code": "SCORE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218276;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-score&af_ad=radio-score <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218276;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676267"
    },
    {
      "code": "SHREDD",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218226;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-shredd&af_ad=radio-shredd <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218226;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676210"
    },
    {
      "code": "SMARTLESS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215999;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-smartless&af_ad=radio-smartless <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215999;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671854"
    },
    {
      "code": "SPORTS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218375;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-sports&af_ad=radio-sports <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218375;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676394"
    },
    {
      "code": "SPORTS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218577;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=sportsbook-evergreen-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-sports&af_ad=radio-sports <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218577;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676587"
    },
    {
      "code": "SPORTS56",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218406;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-sports56&af_ad=radio-sports56 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218406;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676420"
    },
    {
      "code": "SPORTSFD",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218578;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=sportsbook-evergreen-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-sportsfd&af_ad=radio-sportsfd <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218578;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676588"
    },
    {
      "code": "SPORTSGRID",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218576;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=sportsbook-evergreen-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-sportsgrid&af_ad=radio-sportsgrid <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218576;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676586"
    },
    {
      "code": "STARKEY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218372;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-starkey&af_ad=radio-starkey <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218372;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676391"
    },
    {
      "code": "STARTALK",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215983;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-startalk&af_ad=radio-startalk <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215983;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671838"
    },
    {
      "code": "STEVE1580",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218472;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-az&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-steve1580&af_ad=radio-steve1580 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203059;7218472;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676494"
    },
    {
      "code": "STEWART",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189269;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-stewart&af_ad=radio-stewart <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189269;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623433"
    },
    {
      "code": "STREET",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218431;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-street&af_ad=radio-street <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218431;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676461"
    },
    {
      "code": "STYCKMAN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218400;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-styckman&af_ad=radio-styckman <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218400;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676414"
    },
    {
      "code": "SWANN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203060;7218480;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-wv&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-swann&af_ad=radio-swann <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203060;7218480;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676497"
    },
    {
      "code": "T95",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218327;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-t95&af_ad=radio-t95 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218327;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676344"
    },
    {
      "code": "TACKLE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215997;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-tackle&af_ad=radio-tackle <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215997;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671852"
    },
    {
      "code": "TAKE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215993;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-take&af_ad=radio-take <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7215993;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671848"
    },
    {
      "code": "TED",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218326;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-kansas&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-ted&af_ad=radio-ted <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203047;7218326;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676343"
    },
    {
      "code": "THANG",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218437;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-thang&af_ad=radio-thang <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218437;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676467"
    },
    {
      "code": "TICKET",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218347;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bs&af_ad=radio-bs&c=2023_sportsbook-general-acquisition-michigan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218347;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676366"
    },
    {
      "code": "TICKET920",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203060;7218479;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-wv&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-ticket920&af_ad=radio-ticket920 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203060;7218479;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676496"
    },
    {
      "code": "TODD",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218520;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-connecticut&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-todd&af_ad=radio-todd <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218520;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676510"
    },
    {
      "code": "TOMMY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218199;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-louisiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-tommy&af_ad=radio-tommy <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218199;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676142"
    },
    {
      "code": "TONYO",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218343;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bs&af_ad=radio-bs&c=2023_sportsbook-general-acquisition-michigan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218343;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676362"
    },
    {
      "code": "TYLER",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218272;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-tyler&af_ad=radio-tyler <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218272;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676263"
    },
    {
      "code": "VINCEC",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218442;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-vincec&af_ad=radio-vincec <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218442;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676472"
    },
    {
      "code": "VINNY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218248;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-vinny&af_ad=radio-vinny <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218248;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676234"
    },
    {
      "code": "W102",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218405;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-w102&af_ad=radio-w102 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218405;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676419"
    },
    {
      "code": "WAFY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218254;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wafy&af_ad=radio-wafy <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218254;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676240"
    },
    {
      "code": "WALV",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218396;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-walv&af_ad=radio-walv <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218396;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676410"
    },
    {
      "code": "WAYZ",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218259;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wayz&af_ad=radio-wayz <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218259;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676245"
    },
    {
      "code": "WBAL",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218244;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wbal&af_ad=radio-wbal <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218244;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676230"
    },
    {
      "code": "WBOS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189265;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wbos&af_ad=radio-wbos <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189265;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623429"
    },
    {
      "code": "WEBB",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218258;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-webb&af_ad=radio-webb <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218258;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676244"
    },
    {
      "code": "WEMX",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218190;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-louisiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wemx&af_ad=radio-wemx <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218190;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676133"
    },
    {
      "code": "WEPM",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203060;7218481;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-wv&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wepm&af_ad=radio-wepm <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203060;7218481;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676498"
    },
    {
      "code": "WES999",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218387;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-colorado&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wes999&af_ad=radio-wes999 <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203054;7218387;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676407"
    },
    {
      "code": "WHGB",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218356;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-whgb&af_ad=radio-whgb <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218356;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676375"
    },
    {
      "code": "WHITE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218224;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-white&af_ad=radio-white <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218224;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676208"
    },
    {
      "code": "WHYN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189276;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-whyn&af_ad=radio-whyn <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189276;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623440"
    },
    {
      "code": "WIBC",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203048;7218332;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-indiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wibc&af_ad=radio-wibc <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203048;7218332;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676352"
    },
    {
      "code": "WILKERSON",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218403;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wilkerson&af_ad=radio-wilkerson <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218403;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676417"
    },
    {
      "code": "WIN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218568;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=sportsbook-evergreen-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-win&af_ad=radio-win <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7218568;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676578"
    },
    {
      "code": "WJKI",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218263;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wjki&af_ad=radio-wjki <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218263;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676249"
    },
    {
      "code": "WJXQ",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218349;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bs&af_ad=radio-bs&c=2023_sportsbook-general-acquisition-michigan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218349;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676368"
    },
    {
      "code": "WKQZ",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218351;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bs&af_ad=radio-bs&c=2023_sportsbook-general-acquisition-michigan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218351;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676370"
    },
    {
      "code": "WLAC",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218418;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wlac&af_ad=radio-wlac <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218418;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676432"
    },
    {
      "code": "WLZX",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189275;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wlzx&af_ad=radio-wlzx <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189275;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623439"
    },
    {
      "code": "WMAS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218525;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-connecticut&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wmas&af_ad=radio-wmas <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218525;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676515"
    },
    {
      "code": "WMAS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189270;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wmas&af_ad=radio-wmas <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189270;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623434"
    },
    {
      "code": "WMC",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218408;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wmc&af_ad=radio-wmc <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218408;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676422"
    },
    {
      "code": "WMMR",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218363;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wmmr&af_ad=radio-wmmr <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218363;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676382"
    },
    {
      "code": "WNWN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218339;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bs&af_ad=radio-bs&c=2023_sportsbook-general-acquisition-michigan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218339;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676358"
    },
    {
      "code": "WOJO",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218344;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bs&af_ad=radio-bs&c=2023_sportsbook-general-acquisition-michigan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218344;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676363"
    },
    {
      "code": "WOLF",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218513;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-connecticut&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wolf&af_ad=radio-wolf <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218513;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676503"
    },
    {
      "code": "WOMC",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218341;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bs&af_ad=radio-bs&c=2023_sportsbook-general-acquisition-michigan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218341;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676360"
    },
    {
      "code": "WONDERYFD",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7216002;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-non-state-specific&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wonderyfd&af_ad=radio-wonderyfd <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/172462;7216002;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35671857"
    },
    {
      "code": "WOWI",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218429;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wowi&af_ad=radio-wowi <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218429;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676459"
    },
    {
      "code": "WPLR",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218522;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-connecticut&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wplr&af_ad=radio-wplr <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218522;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676512"
    },
    {
      "code": "WPLY",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218435;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wply&af_ad=radio-wply <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218435;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676465"
    },
    {
      "code": "WPOC",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218249;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wpoc&af_ad=radio-wpoc <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218249;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676235"
    },
    {
      "code": "WPUR",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203057;7218425;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-nj&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wpur&af_ad=radio-wpur <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203057;7218425;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676455"
    },
    {
      "code": "WREC",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218413;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wrec&af_ad=radio-wrec <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218413;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676427"
    },
    {
      "code": "WRIF",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218342;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-bs&af_ad=radio-bs&c=2023_sportsbook-general-acquisition-michigan <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203049;7218342;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676361"
    },
    {
      "code": "WROR",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189263;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wror&af_ad=radio-wror <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189263;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623427"
    },
    {
      "code": "WSLC",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218436;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-virginia&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wslc&af_ad=radio-wslc <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203058;7218436;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676466"
    },
    {
      "code": "WWFG",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218266;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wwfg&af_ad=radio-wwfg <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218266;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676252"
    },
    {
      "code": "WWSK",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218229;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-new-york&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wwsk&af_ad=radio-wwsk <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203038;7218229;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676213"
    },
    {
      "code": "WXKS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189261;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-massachusetts&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wxks&af_ad=radio-wxks <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/192328;7189261;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35623425"
    },
    {
      "code": "WXKX",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203060;7218478;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-wv&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wxkx&af_ad=radio-wxkx <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203060;7218478;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676495"
    },
    {
      "code": "WXOS",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218285;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wxos&af_ad=radio-wxos <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218285;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676276"
    },
    {
      "code": "WYATT",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218399;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-tennessee&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wyatt&af_ad=radio-wyatt <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203056;7218399;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676413"
    },
    {
      "code": "WYBC",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218523;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-connecticut&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wybc&af_ad=radio-wybc <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203062;7218523;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676513"
    },
    {
      "code": "WZEB",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218267;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-maryland&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wzeb&af_ad=radio-wzeb <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203040;7218267;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676253"
    },
    {
      "code": "WZRH",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218192;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-louisiana&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-wzrh&af_ad=radio-wzrh <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203033;7218192;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676135"
    },
    {
      "code": "XTU",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218369;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-pennsylvania&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-xtu&af_ad=radio-xtu <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203053;7218369;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676388"
    },
    {
      "code": "ZEDERMAN",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218271;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-illinois&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-zederman&af_ad=radio-zederman <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203042;7218271;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676262"
    },
    {
      "code": "ZONE",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203046;7218298;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-iowa&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-zone&af_ad=radio-zone <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/203046;7218298;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35676291"
    },
    {
      "code": "KFCB",
      "clicktag": "<!-- Normal Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/175568;7158443;369307;211;0/?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=https://fanduelsportsbook.onelink.me/7E42?af_xp=custom&pid=fd-radio&c=2023_sportsbook-general-acquisition-wyoming&deep_link_value=https%3A%2F%2Faccount.sportsbook.fanduel.com%2Fsportsbook&af_adset=radio-kfbc&af_ad=radio-kfbc <!-- Updateable Click Command Clicktag1 -->https://servedby.flashtalking.com/click/8/175568;7158443;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35549629"
    },
    {
      "code": "BS",
      "clicktag": "https://servedby.flashtalking.com/click/8/172462;7184201;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35608098"
    },
    {
      "code": "Ryen",
      "clicktag": "https://servedby.flashtalking.com/click/8/172462;7184202;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35608099"
    },
    {
      "code": "RingerNBA",
      "clicktag": "https://servedby.flashtalking.com/click/8/172462;7184203;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35608100"
    },
    {
      "code": "RingerNFL",
      "clicktag": "https://servedby.flashtalking.com/click/8/172462;7184204;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35608101"
    },
    {
      "code": "Ringerfantasy",
      "clicktag": "https://servedby.flashtalking.com/click/8/172462;7184205;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35608102"
    },
    {
      "code": "Gamblers",
      "clicktag": "https://servedby.flashtalking.com/click/8/172462;7184206;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35608103"
    },
    {
      "code": "Rollin",
      "clicktag": "https://servedby.flashtalking.com/click/8/172462;7184207;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35608104"
    },
    {
      "code": "Mismatch",
      "clicktag": "https://servedby.flashtalking.com/click/8/172462;7184208;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35608105"
    },
    {
      "code": "NYNY",
      "clicktag": "https://servedby.flashtalking.com/click/8/172462;7184209;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35608106"
    },
    {
      "code": "FullGo",
      "clicktag": "https://servedby.flashtalking.com/click/8/172462;7184210;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35608107"
    },
    {
      "code": "RingerPhilly",
      "clicktag": "https://servedby.flashtalking.com/click/8/172462;7184211;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35608108"
    },
    {
      "code": "Pike",
      "clicktag": "https://servedby.flashtalking.com/click/8/172462;7184212;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35608109"
    },
    {
      "code": "Subpar",
      "clicktag": "https://servedby.flashtalking.com/click/8/172462;7184213;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35608110"
    },
    {
      "code": "M2MLIVE",
      "clicktag": "https://servedby.flashtalking.com/click/8/172462;7184214;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35608111"
    },
    {
      "code": "OSP",
      "clicktag": "https://servedby.flashtalking.com/click/8/172462;7241796;369307;211;0/?ft_width=1&ft_height=1&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_78}&us_privacy=${US_PRIVACY}&url=35726934"
    }
  ]

  const pathArray = window.location.pathname.split('/');

  const code = pathArray.at(-1).toString().toLowerCase();

  let clickTag = 'https://account.sportsbook.fanduel.com/sportsbook/join';

  for (let i in clickTags) {
    if(clickTags[i].code !== undefined){
      if(clickTags[i].code.toString().toLowerCase() === code) {
        const index1 = clickTags[i].clicktag.indexOf('<!-- Normal Click Command Clicktag1 -->'),
              index2 = clickTags[i].clicktag.indexOf(' <!-- Updateable Click Command Clicktag1 -->')

        if(index1 !== -1) {
          clickTag = clickTags[i].clicktag.substring(index1 + 39, index2).toString();
        } else {
          clickTag = clickTags[i].clicktag;
        }
      }
    }
  }

  return clickTag;
}

function App() {
  return (
    <div className="App">
      <Header url={ getClickTag() } />
      <HowItWorks />
      <WhyChoose url={ getClickTag() } />
      <Download />
    </div>
  );
}

export default App;
