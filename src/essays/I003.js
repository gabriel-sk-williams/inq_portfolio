import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import '../Inqstyles.css';

class I003 extends Component {

  constructor () {
    super();

    this.state = {
      sources: 
        [{
          source: "",
          author: "Apparently it's a 27'x27'x27' cube. No, I will not convert that to metric.",
          index: 0,
        },{
          source: "'The Measure of All Things,'",
          author: "(2002) Ken Alder",
          index: 1,
        },{
          source: "'Seeing Like A State: How Certain Schemes to Improve the Human Condition Have Failed,'",
          author: "(1999) James C. Scott",
          index: 2,
        },{
          source: "",
          author: "Always looking to recommend Paul Farmer's 'Structural Violence' for a thorough analysis of France's historical domination in Haiti.",
          index: 3,
        }]
    }
  }

  renderSources = () => {

    return (
      <div className="grid-break">
        <h3>Sources:</h3>
        {
          this.state.sources.map((src, i) => (
            <h3 key={i}>
              {i+1}{" "}—{" "}
              <i>{src.source}</i>{" "}
              {src.author}<br/><br/>
            </h3>
          ))
        }
      </div> 
    );
  }

  super = (int) => {
    return ( <sup>{int}</sup> );
  }
  
  renderEssay = () => {
    return (
      <div className="appear grid-break">
        <h3>
        I.<br/>
        Let's be real—the “metric ton of CO2” has got to be one of the worst ways to conceive of pollution. The weight of gas isn't useful to anyone! I have no idea what a ton of gas looks or even feels like—nobody does.{this.super(1)} On the other hand I get it—rendering greenhouse gases as some massive abstract cube in the sky suggests a certain <i>gravity</i> with regard to climate change. But the way we actually measure climate change—with degrees—doesn't seem much better. All the varied and complex systems existing on this Earth, reduced to such miniscule units: “Two degrees of global warming, you say!? Massive. An unimaginable increase. Apocalyptic, in fact, two degrees of anything!” We wonder why there are so many skeptics. All said—if we're to respect the work of most scientists, two degrees is likely a real threat—but these units are simply not an optimal expression for the full weight of doom. Have you ever tried to guess the temperature? We can barely even feel a difference of two degrees, much less understand the damage it will do.
        <br/><br/>
        In matters of suitability, a universal system of measures and units can fall short. It's not that the American Imperial system is somehow universally superior (although sometimes it is), nor is this an attempted takedown of the metric system and its units. For many applications, metric is the best option—but to make metric into a singular, universal system destroys the potential usefulness of alternative units—especially in situations where scale and granularity are paramount, but unserved by metric at that order of magnitude.
        <br/><br/>
        II.<br/>
        I can hear someone wailing now: “The metric system is perfectly derived from the essential building blocks of life: The meter! A perfect one-ten millionth of the distance from the equator to the north pole along a meridian. The kilo-gram! A cubic decimeter of water. And oh, Celsius! Tied to the fundamental physical constants of this earthly prison! Zero degrees is the exact freezing point of water, and one hundred the boiling. The critical phase changes of <i>matter itself</i>—”
        <br/><br/>
        We weren't always blessed with the metric system: in fact, most of human history was plagued by <i>lesser</i> systems until the Enlightenment. One of the first prominent calls for global standardization came in 1783, from British inventor James “The Steam Engine” Watt—who envisioned a new system, one “which might link the density of water to length and mass.” This was because Watt found collaboration with other civilized nations significantly more difficult without common units, especially those he could not easily replicate. He wasn't at all misguided: the people of pre-revolutionary France were using around eight hundred different measurement units,{this.super(2)} all with definitions that differed between municipalities. Without rigorous standardization, attempts at trans-national cooperation were very likely to lose something in translation.
        <br/><br/>
        The world's leading scientists and nation-states agreed: universal measures would be good for both trade and science. The leaders of the French First Republic formally adopted the metric system in 1792 after overthrowing the <i>ancien régime</i> that same year—and yet—the people of France resisted. In fact, the metric system was so unpopular that Napoleon I, after twenty years, lifted the tyrannry of metricism by once again allowing <i>mesures usuelles</i> in 1812, especially for small merchants. Traditional measures remained legal until 1839, when they were once again abolished in the name of progress.
        <br/><br/>
        Why would the common folk resist? Who would oppose the metric system out of anything other than ignorance?
        <br/><br/>
        III.<br/>
        The simple answer is that nineteenth-century peoples were as yet unaccustomed to authoritarian measures; the modern nation-state was only beginning to flex its muscles in a way that affected everyday life. Before then, weights and measures were just as organic and <i>anarchic</i> as language is. A system of regulatory burdens on measurement was just as unlikely as a mandate on everyday speech (see: every failed proposal for an English language gender-neutral pronoun). For a peasant the costs of altering his use of language likely outweighed the benefits of switching to an alien measurement system.
        <br/><br/>
        Imagine a traveling merchant in France, who takes fifty <i>boisseaus</i> (bushels) of grain from Nice to Lyon every week. Nice has its own local measurement units, but our merchant, being familiar with dealings in Nice, knows exactly what a Nice-boisseau looks like. He has formed personal relationships with farmers in Nice, whom he trusts will give him an accurate approximation of a <i>boisseau</i> when he arrives to buy their stock. Furthermore, the <i>boisseau</i> works well in Nice because the majority of the farmers use a wagon that can be pulled by a single horse and fits on the city's narrow dirt roadways. These wagons may have carried a solid ten bushels each, but in metric they now carry 126.9528 litres—and how widely available were precise metric containers back then anyway?
        <br/><br/>
        The merchant transfers his wares each week to Lyon—but here, they almost exclusively use the <i>minot</i> for dry volume. The merchant, of course, has known this from his first visit, and likewise he knows and trusts the local vendors in Lyon just as well as those in Nice. In fact, the market-goers already have their own hand-fashioned baskets ready at the markets, each of which are just large enough for a young French woman to fill from his caravan and carry it back home. Our merchant doesn't feel the need to nickel-and-dime his patrons (if such a phrase even existed then), nor does he feel the need to impose the Nice-boisseau system on them. One works better for farmers in Nice, the other for families and vendors in Lyon.
        <br/><br/>
        I fear that lovers of science and global trade reading this may soon form an angry mob: “You fool! Of course a merchant would find his own local system perfectly reasonable, in his own tiny bubble of existence. He could never know the awesome scale of global trade and manufacturing, of standardized shipping containers and massive cranes to lift them onto cargo ships. If he could ever understand the impetuous drive of the future he would embrace it! This man would drive eighteen-wheeled freight from port to port, on smoothly-paved asphalt freeways, and never would he feel alienated from his former primitive, arcadian life!” 
        <br/><br/>
        IV.<br/>
        A less accessible explanation for ignoble peasant resistance is taxation; the military engine of the French First Republic and other emerging nation-states needed capital, and thus a more efficient means of extracting taxes from the populace. The metric system provided what no feudal measurement system ever could before: a system that flattened all barriers to the administrative center.{this.super(3)} The tax man could now carry a metric rule anywhere in the country and obtain exactly his taxes due. This had been much more difficult in a vernacular world: the taxman was not a friend of the people in Nice and Lyon, nor had he established relationships of mutual trust with them; the townspeople were more likely to pull out the smaller baskets, and since a foreign system of weights and measures were illegible to his authority, he was likely to calculate a smaller percentage of goods for extraction to Paris. The same applied in the colonies: if the locals in say, Haiti, were left to manage their own sugar cane outputs by use of indigenous measurement, how could their controllers be sure they were returning the maximum possible product to the motherland?{this.super(4)}
        <br/><br/>
        No nation ever forced the use of the most perfect language—Esperanto—or the most perfect computer keyboard—the Dvorak—onto its populace, but if one had, would they be so proud as to consider every other language, and keyboard, inferior? We do so with metric. The next essay will dive a little deeper into why I like certain units better than others. Until then!
        </h3>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@FUTUREDOME3000" />
          <meta name="twitter:title" content="003: Absolute Units" />
          <meta name="twitter:description" content="“The meter! A perfect one-ten millionth of the distance from the equator to the north pole along a meridian. The kilo-gram!...”" />
          <meta name="twitter:image" content="https://www.inqstudio.com/assets/003_card.jpg" />
        </Helmet>
        {this.renderEssay()}
        {this.renderSources()}
      </div>
    );
  }
}

export default I003;