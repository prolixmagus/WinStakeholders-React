import LandingImg from "./images/landing.png";

import Person1 from "./images/individual-7.svg";
import Person2 from "./images/individual-6.svg";
import Person3 from "./images/individual-8.png";

import ArticlesImage from "./images/articles.svg";
import PodcastImage from "./images/podcasts.svg";
import PresentationsImage from "./images/presentations.svg";
import BooksImage from "./images/books.svg";
import TestimonialHeart from "./images/testimonial-heart.png";
import TestimonialStar from "./images/testimonial-star.png";
import TestimonialThumb from "./images/testimonial-thumb-up.png";

import NumOne from "./images/num-1.svg";
import NumTwo from "./images/num-2.svg";
import NumThree from "./images/num-3.svg";
import NumFour from "./images/num-4.svg";
import NumFive from "./images/num-5.svg";
import NumSix from "./images/num-6.svg";
import NumSeven from "./images/num-7.svg";
import NumEight from "./images/num-8.svg";

// ////////////////////////////////////
// // LANDING PAGE and STARTING ///////
// ////////////////////////////////////

export const LANDING = [
    {
        src: LandingImg,
        alt: "How to Win Stakeholders and Influence Decisions Program",
    },
];

export const STARTING_DATE = [
    {
        date: "February 10",
    },
];

// ////////////////////////
// // INTRO STATEMENT /////
// ////////////////////////

export const INTRO_STATEMENT = [
    {
        id: 0,
        span: "Because of the program…",
        desc: "I got unlimited access to users for deep UX research when, before, nobody would let them near any users or customers.",
        src: Person1,
        alt: "Searching in book (with magnifying glass)",
    },
    {
        id: 1,
        span: "Halfway through the program…",
        desc: "I was called to run executive-level visioning workshops, and the executives were excited to adopt a UX perspective on the organization's strategy.",
        src: Person2,
        alt: "Chess piece with road map",
    },
    {
        id: 2,
        span: "After graduating from the program…",
        desc: "I'm now regularly collaborating with Product Managers who never used to give me the time of day, let alone give UX any consideration.",
        src: Person3,
        alt: "Man pushing knight chess piece.",
    },
];

// ////////////////////////
// // INTRO STATEMENT /////
// ////////////////////////

export const ARTICLES_AND_PODCASTS = [
    {
        id: 0,
        desc: "You’ve skimmed hundreds of articles.",
        src: ArticlesImage,
        alt: "three pages with writing",
    },
    {
        id: 1,
        desc: "You’ve listened to dozens of podcasts.",
        src: PodcastImage,
        alt: "cellphone displaying a microphone",
    },
    {
        id: 2,
        desc: "You’ve watched the leadership conference presentations.",
        src: PresentationsImage,
        alt: "a projector screen with a loudspeaker",
    },
    {
        id: 3,
        desc: "You’ve read so many books.",
        src: BooksImage,
        alt: "an open book",
    },
];

// ////////////////////////////
// // THE EIGHT PILLARS ///////
// ////////////////////////////

export const EIGHT_PILLARS = [
    {
        pillar: 1,
        src: NumOne,
        title: "Become the UX leader your org is seeking.",
        desc: "You’re no longer asking for permission. You are influencing positive change throughout your organization with the backing and support of your team.",
        alt: "Number One",
    },
    {
        pillar: 2,
        src: NumTwo,
        title: "Establish UX outcomes & visions.",
        desc: "You and your stakeholders are finally on the same page. You have conversations, not disagreements around which efforts will best improve your products and services.",
        alt: "Number Two",
    },
    {
        pillar: 3,
        src: NumThree,
        title: "Build strong connection skills.",
        desc: "You no longer feel like you’re selling the team on the importance of UX. You’re having meaningfulconversations that influence product ideas and create natural buy-in for your initiatives.",
        alt: "Number Three",
    },
    {
        pillar: 4,
        src: NumFour,
        title: "Navigate product & development politics.",
        desc: "You no longer feel like you’re fighting your organization. You’ve uncovered common ground and you and other team leads have identified opportunities where you can work together.",
        alt: "Number Four",
    },
    {
        pillar: 5,
        src: NumFive,
        title: "Explore the dynamics of organizational power and influence.",
        desc: "Others in your organization see UX as a powerful positive force. They’re requesting the influence and expertise of UX on their projects and teams.",
        alt: "Number Five",
    },
    {
        pillar: 6,
        src: NumSix,
        title: "Identifying persuasive UX metrics.",
        desc: "You’re connected to your organization’s most essential objectives and you’ve demonstrated how UX achieves those key business objectives.",
        alt: "Number Six",
    },
    {
        pillar: 7,
        src: NumSeven,
        title: "Growing a practice of servant leadership.",
        desc: "Others in the organization come to you and see you as their champion. Not only highlighting you as a leader but also championing your agendas and priorities.",
        alt: "Number Seven",
    },
    {
        pillar: 8,
        src: NumEight,
        title: "Pinpoint user needs through strong UX research.",
        desc: "You’ve created a solid base of evidence that strengthens the importance of your initiatives. Others now come to you and see research as a way to strengthen their initiatives too.",
        alt: "Number Eight",
    },
];

// ///////////////////////////////
// // PAYMENT PLAN SECTION ///////
// ///////////////////////////////

export const PAYMENT_PLAN = [
    {
        // SOLO UX LEADER PRICE
        previousPrice: "$2,697",
        oneTimePrice: "1,697",
        enrollLink:
            "https://centercentre.spiffy.co/checkout/winstakeholders-individual-special",
    },
    {
        // Team of 2 or More PRICE
        previousPrice: "$2,697",
        oneTimePrice: "$1,497",
        enrollLink:
            "https://centercentre.spiffy.co/checkout/winstakeholders-team-prepaid-special",
    },
];

// /////////////////////////
// // TESTIMONIAL SECTION //
// /////////////////////////

export const TESTIMONIES = [
    {
        id: 0,
        title: "J.D., A Senior Digital UX Leader in a B2C Software",
        desc: "I picked up invaluable tips for reframing my mindset when collaborating with my partners. I discovered whom to influence and measure my impact and outcomes.",
        img: TestimonialHeart,
    },
    {
        id: 1,
        title: "S.P., UX Designer and Researcher in Insurance Solutions",
        desc: "This program gave me the tools and advice I need to be a better listener, ask better questions in meetings, and get better results in conversations with my stakeholders.",
        img: TestimonialStar,
    },
    {
        id: 2,
        title: "C.M., Senior UX Designer in Digital Media Software",
        desc: "This program transformed my discussions with my team. I now stop negative assumptions and see the full picture of what my team is working on. Allowing for better connections and support.",
        img: TestimonialHeart,
    },
    {
        id: 3,
        title: "J.C., UX Design Manager at a B2C Home service",
        desc: "This program taught me that success is a result of the positive change you make in the world. The focus on servant leadership and the actionable pillars helped me to practice climbing a ladder to achieve real-life wins.",
        img: TestimonialThumb,
    },
];

// ///////////////////////////////
// // TESTIMONIAL VIDEO SECTION //
// ///////////////////////////////

export const TESTIMONIAL_VIDEO = [
    {
        link: "https://player.vimeo.com/video/814643928?badge=0&autopause=0&player_id=0&app_id=58479",
        gradName: "Jacquelyn Candelas",
    },
];

// ////////////////////
// // FOOTER SECTION //
// ////////////////////

export const FUTURE_LIST = [
    {
        text: "A future where your work is improving the lives of your customers and users.",
    },
    {
        text: "A future where you don’t have to battle just to do your job.",
    },
    {
        text: "A future where you’re working to your full potential.",
    },
];

export const FOOTER = [
    {
        address1: "791 Turnpike Street, Unit 4",
        address2: "North Andover, MA 01845",
        phoneNumber: "+1 978-327-5561",
        year: "2024",
        contactUs: "https://www.centercentre.com/contact",
        privacyNotice: "https://www.centercentre.com/privacy-notice/",
    },
];

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
