import React from 'react'
import Faq from 'react-faq-component'
import { Container, Jumbotron } from 'react-bootstrap'

const data = {
  title: 'FAQs Cine Producers',
  rows: [
    {
      title: 'We’re also bloggers at Sprite Spons and we would like to work with Cine Sprite on generating some content.',
      content: `Fantastic! We are almost always open to the possibility of working with any sort of journalistic outlet. Want to have a podcast discussion about how books or video games get translated into film? Or how about an intense debate about the merits of Christopher Nolan as a filmmaker? Shoot us an email or message us on Facebook, and we’ll get the ball rolling! Just remember that we do not have any interest in promoting products, services or any commercial endeavors beyond our blog. Those ventures are well beyond our interest and scope here at Cine Sprite.
      `,
    },
    {
      title:
        'We’d like to repost your content on our website!',
      content: `We’re honored, truly. But please be sure to email us with any inquiries in this regard. We’re a small nonprofit outfit. We work hard to write these stories. Traffic is the only form of currency we have, and when people take our content and repost it, they’re siphoning that valuable resource off. Having said that, if you do contact us, we can and will work to figure out an option that leaves all parties more than satisfied. Unverified reposting violates our terms and our intellectual property rights. We take this seriously, so thank you for understanding.`,
    },
    {
      title: 'I’m an independent filmmaker and I would like to do an interview with Cine Sprite.',
      content: `Absolutely! We love doing interviews with independent filmmakers; thus far, it has always been a pleasant experience for both parties. We here at Cine Sprite feel that promotion of smaller, lesser-known films and filmmakers is one of the most important charges of bloggers and critics around the world. If you have a short film, a feature or something in between, we would love to interview you, your cast or anyone else involved with production.`,
    },
    {
      title: 'I am a publicist and I have a movie/filmmaker/actor I would like to promote through Cine Sprite.',
      content: `The staff at Cine Sprite are more than happy to participate in early screenings, interviews and other forms of promotion for films. Please send us an email or contact us on Facebook to discuss any inquiries in this regard. We can also be reached by phone upon request.`,
    },
    {
      title:
        'Do you ever spoil in your reviews? How about other articles?',
      content: `No. We never spoil movies in our reviews. For us, that’s a cardinal sin. However, for features, op-eds and television reviews, sometimes it is necessary to get into nitty-gritty plot details. We promise to always warn you ahead of time, though. So browse in peace!
      `,
    },
    {
      title: 'You’re called “Cine Sprite” – does that mean you only review movies you hate? Do you just look for things to complain about?',
      content: `Not a bit! Cine Sprite is a title that Tim and Søren came up with many years ago, and we’ve decided to stick with it. To answer your question more specifically, we review and analyze the entire medium: blockbusters, indies, “bad” movies, “good” movies, low-budget movies, short films, etc. We also enjoy talking about film news, trends in the industry, and anything else film-related.`,
    },
  ],
}

const data1 = {
  title: 'FAQs Cine Writers',
  rows: [
    {
      title: 'What sort of articles are you looking for from guest writers?',
      content: `We are looking for a range of articles. If you browse the Cine Sprite archives (which we strong strongly suggest you do), you will see that we have everything from opinion pieces, analyses and reviews to interviews, news and academic work. For example, if you’re a film student and you’ve written a killer essay about the use of color in the Trois Couleurs trilogy, we would love to take a look!
      `,
    },
{
  title: 'What sort of qualifications do I need to have to submit to Cine Sprite?',
  content: `If you’re an avid film watcher and you have something insightful to say, you’re qualified in our book. However, we always look favorably on any sort of journalism, film or academic/professional writing experience. A body of online work to which we can refer can help us decide whether we will look fruther into your proposal. A résumé/CV/LinkedIn is not necessary, but you are free to send those in as well if you believe it will improve your candidacy for publication.
  `,
},
{
  title: 'How long should my guest piece be?',
  content: `We aim to keep all pieces somewhere between 750-1000 words. These are not strict guidelines, but we try to keep them somewhere in that range. Exceptions can be made for academic pieces or in-depth analyses that are longer than 1000 words.
  `,
},
{
  title: 'Do you have any rules for reviewing films?',
  content: `Yes. As aforementioned, we do not spoil in our reviews. Ever. And by extension, we do not summarize the plot in our reviews. A simple 1-2 sentence introduction to the film may be warranted depending on your writing style, but after that, the rest of your piece should be hard, spoiler-free analysis of the film itself. Sample reviews can be found here and here. Note that this only applies to reviews; academic pieces, analyses and opinion pieces often include specific plot points where necessary.

If you’re confused on how to start with your movie review, we highly recommend you read Evan Derrick’s piece on Movie Zeal. It’s one of the best and most comprehensive guides to film criticism around. Also be sure to check out Roger Ebert and Gene Siskel’s advice.

Read and watch the greats! No better way to learn.
`,
    },
{
  title: 'Why wasn’t my piece accepted?',
  content: `We always appreciate when guest writers submit their work to us, and we understand that lots of effort goes into getting your ideas on paper. Nevertheless, the staff at Cine Sprite reserve the right to deny any unsolicited pieces for many different reasons. These include, but are not limited to, time restraints, not following directions or low-quality writing and content. We strive to keep a certain consistency in the our work here at Cine Sprite, and so anything that you submit should be catered to that level of professionalism. This includes email or Facebook correspondences, where a slow response rate, incomplete sentences and poor grammar will all work against you.
  `,
},
{
  title: 'Can I write about Product X and how they’re used in movies to promote my own site?',
  content: `Unfortunately, we do not accept at guest pieces which are written to promote any commercial products or services. This includes any SEO/SEM sites. We are a nonprofit outlet for writers and film enthusiasts. We are therefore only looking for guest pieces from students, independent journalistic outlets and other bloggers. We love having creative discussions with other blogs, and we are happy to cross promote their enterprises, but this does not extend to companies, service providers or manufacturers of any kind.
  `,
},
{
  title: 'How much does Cine Sprite pay its guest writers?',
  content: `ust like the staff at Cine Sprite, guest writers are uncompensated. This page is entirely non-profit and will continue to operate as such for the foreseeable future.  As a matter of fact, it costs us money to keep it going! We write because we are passionate about movies, and we hope you are, too.
  `,
},
{
  title: 'Can I submit my article to other sites in addition to Cine Sprite?',
  content: `We expect that guest articles submitted to Cine Sprite are exclusive to the site. We understand that you have to shop around at different venues to get your articles published, but we are a small website in a big sea of online bloggers, and we pride ourselves on having original insights into the films we write about. Exceptions can be made under special circumstances (for example, writing for both Cine Sprite and for a school newspaper), but they should be cleared with the Cine Sprite staff before the post is accepted for publication. Having said that, we do encourage you to use your clippings submitted here as examples of your work, be it for a job application or another guest writing opportunity.
  `,
},
{
  title: 'How can I become a staff writer at Cine Sprite?',
  content: `Cine Sprite is always looking for committed writers to join our staff. However, we only offer positions to writers who either have a history as guest writers for Cine Sprite, or have extensive experience writing regularly for a peer blog or publication. Note that while staff positions are unpaid, we take our jobs seriously and do not make new hires lightly. But if you show diligence in submitting articles on time, are responsive to edits, write well and demonstrate a clear passion for the material, we will certainly consider your potential as a permanent staff writer.
  `,
},
{
      title: 'We’re also bloggers at Sprite Spons and we would like to work with Cine Sprite on generating some content.',
      content: `Fantastic! We are almost always open to the possibility of working with any sort of journalistic outlet. Want to have a podcast discussion about how books or video games get translated into film? Or how about an intense debate about the merits of Christopher Nolan as a filmmaker? Shoot us an email or message us on Facebook, and we’ll get the ball rolling! Just remember that we do not have any interest in promoting products, services or any commercial endeavors beyond our blog. Those ventures are well beyond our interest and scope here at Cine Sprite.
      `,
    },
  ],
}
const styles = {
  bgColor: '#303030',
  titleTextColor: 'white',
  rowTitleColor: 'white',
  rowContentColor: 'white',
  arrowColor: 'white',
  rowContentPaddingTop: '10px',
  rowContentPaddingBottom: '10px',
  rowContentPaddingLeft: '10px',
  rowContentPaddingRight: '10px',
}

const config = {
  animate: true,
  arrowIcon: 'v',
  // tabFocus: true,
}

const faq = () => {
  return (
    <Container>
      <Jumbotron>
        <Faq data={data} styles={styles} config={config} />
        <Faq data={data1} styles={styles} config={config} />
      </Jumbotron>
    </Container>
  )
}

export default faq
