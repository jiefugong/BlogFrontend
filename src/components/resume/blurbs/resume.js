// We'll use this JS file to define each text blob, as well as providing
// more information about CSS styling to apply, images to add, etc.
const AFFIRM_BLURB = {
  'text': `## ![Affirm Logo](https://cdn-assets.affirm.com/images/blue_solid_circle-white_bg.svg) Senior Software Engineer, Affirm
  ### Remote (March, 2020 - Current)
  I've worked on engineering teams in our Financial Products
  organization building products that are user-facing (AutoPay, User Messaging) and platform-level (scalable, distributed ETLs)
  - Built multiple scalable, Spark-based ETLs that derive daily servicing data on 50M+ loans. These ETLs are used in everything from loan underwriting
  to purchase recommendation and investor reporting.
  - Led the team's migration of our technical products to the UK and Australia
  - Proposed and led a redesign of critical data models supporting a user's payment schedule in order to better facilitate historical event tracking
  - Serviced Affirm's Automatic Payments system, adding feature support for one-time arbitrarily scheduled payments`,
  'title': 'bg-blue-600',
};

const TWITCH_BLURB = {
  'text': `## ![Twitch Logo](https://pngimg.com/uploads/twitch/twitch_PNG23.png) Software Engineer, Twitch
  ### San Francisco (June 2016 - March, 2020)
  During my time at Twitch, I worked on Twitch's in-house transcoding solution and was
  involved in bleeding edge R&D aimed towards reducing Twitch's E2E video latency to under 1 second.
  - Contributed and worked on open-source projects such as BBR (for congestion control) and WebRTC for UDP based streaming
  - Built, tested, and released Twitch's production ABR feature, which reads a client's network data to derive a target bitrate for them to watch lag-free video
  - Added additional features to our transcoder such as extending container support (for containers like fMP4) and helping with the implementation
  of DRM when streaming protected content`,
  'title': 'bg-purple-800',
}

const ZYNGA_BLURB = {
  'text': `## ![Zynga Logo](https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Zynga.svg/1200px-Zynga.svg.png) Software Engineering Intern, Zynga
  ### San Francisco (June 2015 - August 2015)
  I was an intern at Zynga as a rising sophomore in college where I worked in the Analytics organization. I feature-tested, benchmarked, and integrated Apache Kafka as a replacement
  message queue and distributed logging system.
  
  During an internal hackathon, we were able to connect Kafka to internal data sources tracking app downloads and created an interface on top of d3.js to visualize our most popular games.`,
  'title': 'bg-red-600',
}

const BLUEPRINT_BLUB = {
  'text': `## ![Blueprint Logo](https://avatars.githubusercontent.com/u/2729578?s=280&v=4) Software Engineer, Blueprint
  ### Berkeley (Aug 2016 - May 2017)
  Blueprint is a technology club on UC Berkeley Campus that builds software applications for non-profits in the SF Bay Area.
  
  During my year, we partnered with engineering
  professors to build microservices for the platform supporting Berkeley's new Data Science major. We built add-ons to Jupyter Notebook and microservices for autoscaling the
  cluster used by engineering services`,
  'title': 'bg-blue-400',
}

export const RESUME_BLURBS = [AFFIRM_BLURB, TWITCH_BLURB, ZYNGA_BLURB, BLUEPRINT_BLUB];
