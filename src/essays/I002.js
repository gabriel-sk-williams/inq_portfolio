import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import '../gskwStyles.css';

class I002 extends Component {

  constructor () {
    super();

    this.state = {
      sources: 
        [{
          source: '',
          author: "A personal least-favorite word of mine, not least for its awkward affixes and general inelegance (much like this sentence). It is only a somewhat useful concept, as most common models of 'sustainability' tend to be highly simplified versions. Such is the price of moving into the lexical mainstream.",
          index: 0,
        }]
    }
  }

  renderSources = () => {
    return (
      <div className='grid-break'>
        <h3>Notes:</h3>
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
        <q>
        And here begins my despair as a writer. All language is a set of symbols whose use among its speakers assumes a shared past. How, then, can I translate into words the limitless Aleph, which my floundering mind can scarcely encompass?
        </q>
        <br/>
        <p className="tab">—Jorge Luis Borges, 1945</p>
        <br/>
        Having established some reasonable <Link to='001'>limitations</Link> in the physical sense, we move on to the meta-physical: Sustainability! That neologism with far too many intimations; we use it for energy, ecology, urbanism, transport, political policy, you name it—and always with a silent agreement that we share a complete and mutual understanding of the term. As if we attended both the same university, and in the same department, we rigorously studied the same proofs and theorems, and thus came to identical outward conclusions. But that would be impossible; sustainability is no math problem, but a product of language—one which will require some fine-tuning if we both want to see the same thing.
        <br/><br/>
        We should bring two major treatments on meaning and language into focus: the first is Immanuel Kant’s Critique of Pure Reason (1781), and the second must be drawn out of the deep well of mid-twentieth century Post-Structuralism. There is a tension between these two systems, which we’ll discuss here, because they are largely two sides of the same linguistic coin—and both are indispensable to having any real discussion about sustainability on local or world stages.
        <br/><br/>
        <b>part one: noumena</b>
        <br/>
        Kant coined the term <i>noumenon</i> to express how we represent and categorize the ideas we derive from the world. For example: we can’t possibly describe every dog on Earth with a single word, but we try anyway. We use the word 'dog' when we’re talking about some subset of the Canine family, and most people get the picture, because dogs are pretty common. But! If a dog wandered into your house and you interacted with it, Kant would say—that dog—in particular, was a <i>phenomenon</i>, an actual instance, of the noumenon <i>dog.</i>
        <br/><br/>
        So phenomena are the actual instances of things, and noumena are the high-level concepts describing them. We usually add an article or a name to differentiate the former from the latter. It wasn't the eternal, platonic form of “dog” that entered your home, it was a little brown one, with a nametag like “Sparky,” or “Pants.” We don't typically use a high-level concept (a noumenon) to describe a real-life phenomenon, because otherwise it can be confusing. None of us share the exact same mental model of a dog—was it a big, scary one? Or was it your neighbor's six-pound Maltipoo, who's <i>always</i> getting himself into trouble!? We need context to properly coordinate our response.
        <br/><br/>
        <b>noumenon;</b> the “object-in-itself,” <i>the concept of a dog</i>, attempting to describe all dogs, from every universe and from every possible timeline.
        <br/><br/>
        <b>phenomenon;</b> the “thing-as-it-appears,” the Maltipoo known as “Pants,” who somehow entered your home, whom you are petting right now.
        <br/><br/>
        We start to run into communication problems when the phenomenal version of a term is less concrete. We use them all the time with suboptimal results: <i>patriarchy, racism, fake news, fascism</i> and, of course <i>sustainability</i> are all noumena. We have no perfect collective experiential model of these concepts, and so language—according to Kant—is fundamentally incapable of capturing the true essence of all the phenomena these words are trying to describe. Human experience is but a sliver of reality; language is but a sliver of all possible meaning. The noumenon is unknowable. We're talking about your new dog, but I have no idea what a Norwegian Lundehund looks like. I've never seen one. Our separate, subjective experiences prevent us from having a complete understanding of what the noumenon in use truly represents.
        <br/><br/>
        People tend to use a noumenon as it aligns with their own subjective experience, but without prior agreement on the pure, platonic form of the word, we find that individuals from dissimilar backgrounds can fail to find common ground. Two people who have experienced something like <i>racism</i> in their lives might enjoy an immediate mutual understanding on the topic, while a third person, who hasn't, may struggle to integrate the concept-as-intended into their worldview. Since we can't upload our entire life experiences to each other, we live in a world where ignorance appears more rampant than ever, undoubtedly because noumena move so freely between otherwise isolated parties.
        <br/><br/>    
        <b>part two: post-structuralism</b>
        <br/>
        Two hundreds years post-Kant, in the early 1900’s, philosophers started looking more closely at language and meaning in the context of Structuralism, which discarded the idea of universal platonic concepts, and said that we really only understand the meaning of words <i>as they relate to other words.</i> No concept is original—it merely inhabits pre-existing structures. We can’t understand the concept of 'democracy' without building onto the structure of the word 'government,' which in turn is further embedded in layers of conceptual scaffolding that we take for granted.
        <br/><br/>
        Anyway, the <i>post</i>-Structuralists (most of them French) came along in the 1960's and <i>deconstructed Structuralism.</i> A good explanation comes from Corey Mohler:
        <br/><br/>
        <q>
        Post-structuralism is an internal, structuralist critique of structuralism itself. [Derrida] claims that even the structure of the words is not adequate to understand the meaning of a word, since the meaning of a word always depends on its context, both current and historical, and that context is never stable. Therefore it is impossible for words to have fixed meanings or be understood completely.
        </q>
        <br/><br/>
        “Sustainability”{this.super(1)} is one such unstable isotope; early ecological movements were once imbued with now-obsolete proxies for eco-concern: rainforest destruction, the 'hole in the ozone,' acid rain, global warming. It's all now mostly been reduced to 'climate change,' for better or worse (probably worse), but this reduction, though simplified, is highly suggestive of its context and connotation, its relation to power, and its idealized function now as a mainstream idea.
        <br/><br/>
        The meta-physical informs the physical: Tesla is now the most powerful private company ever to take the reins on reducing emissions, and there are talks of a massive “Green New Deal” in US politics. Sustainability is now primarily conceived in the context of corporate production and federal policy; if ever there could have been an alternative system, it has been lost to popular imagination. All that's left to the individual is low-effort virtue signaling, since the means and methods to effect meaningful change have been offloaded to monolothic structures outside our control. There is very little incentive, therefore, to understand anything beyond the bare minimum. We get a watered-down version of the noumenon, sustainability, where the bottom line is <i>climate change</i>—measured in Degrees Celsius. No one has reason to entertain any further nuance unless they are receiving grant money to do so (and even then).
        <br/><br/>
        <b>part three: the end of the essay</b>
        <br/>
        Sustainability wasn't always a matter of “making sure the Earth doesn’t get a few degrees hotter, at all costs.” In fact, there have been several attempts at setting a universal datum. The most famous, in academic circles, was offered in 1987 by the Brundtland Commission, a committee appointed by the UN as a means of rallying countries together on the issue:
        <br/><br/>
        <q>
        Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.
        </q>
        <br/><br/>
        Fair enough—but even this has problems. It is neither a perfect <i>noumenal</i> conception, nor is it likely, with this wording, to preserve its intended meaning in new contexts. It reduces sustainability to a human-centric resource allocation problem, it fails to define a precise number of “future generations,” and it also engenders a sort of tunnel vision that may yet favor unsustainable solutions within shorter time horizons. It may not even be a top priority to find a singular, universal definition—we have a more vital communication problem to sort out, and it probably involves <i>a lot</i> of definitions. A large chunk of the problem is in fact philosophical—and it's <i>everyone's</i> problem now.
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
          <meta name="twitter:title" content="002: A Modern Neologic" />
          <meta name="twitter:description" content="“And here begins my despair as a writer. All language is a set of symbols whose use among its speakers assumes a shared past...”" />
          <meta name="twitter:image" content="https://gskw.xyz/assets/002_card.jpg" />
        </Helmet>
        {this.renderEssay()}
        {this.renderSources()}
      </div>
    );
  }
}

export default I002;