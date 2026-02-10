export const projectData = [

    {
        id: 1,
        slug: "8-ball-app",
        title: "8ball App",
        description: "A fully stacked website using React.",
        longDescription: ` 
            The magic 8-ball answers the question you asked it with a yes or no. It features the ball
            in the middle of the page with the white space in the middle of the screen with the blank space
            at the bottom. In the input space, the user may ask any question, but it will not always give them
            the asnwers they wanted.
        `,
        problem: `
            While creating the website, I wanted to have the ball to shake while asking questions. 
            But when I pressed the button, it doesn't shake before giving me the answer.`,
        solution: "I need to make sure to set the shaking state to true and then to false in the setTimeout statement.",
        improvment: "I could add an 8 as a default number. I also want to add the effect that makes the ball shiny.",
        image: "/images/8ball.jpg",
        gitHubLink: "https://github.com/Izaiah566/magic-8ball",
        liveDemo: "https://magic-8-ball-beryl.vercel.app/"
    },

    {
        id: 2,
        slug: "airlines-app",
        title: "Airlines App",
        description: "A Javascript utilized website upgraded with React components.",
        longDescription: ` 
            The website formerely uses plain-JavaScript to search for data on each flight. The website
            have a form element on the home page which filters the necessary elements the user needs 
            to fillout.
        `,
        problem: "The problem I am having with this website is filtering the information about the flights.",
        solution: `I used the techniques from JavaScript by filtering the different kinds of airlines to get the result. 
            I used the same technique when remaking it into React.`
        ,
        improvment: `I should revisit the concepts to learn how to filter the other data. 
        Maybe I would work on displaying information whether it is cancelled or not.`,
        image: "/images/airlines.jpg",
        gitHubLink: "https://github.com/Izaiah566/airlines-site",
        liveDemo: "https://airlines-website-three.vercel.app/"
    },

    {
        id: 3,
        slug: "marketplace-community-app",
        title: "Marketplace Community App",
        description: "A full-stack community marketplace using Supabase + FastAPI.",
        longDescription: `
            This project is a full-stack application that allows users to buy, sell,
            and trade goods within a community. Features include authentication, 
            user profiles, listing creation, and messaging.
        `,
        problem: `While working on this project, 
        I focused creating the design of it to make it look professional. 
        Sometimes I distract myself from doing backend programming while trying make it look interesting.
        `,
        solution: "I looked for starter layouts and mockup database to spare me the effort to create the website from scratch.",
        improvment: "I would had enhancement to the project revisiting the supabase and experiment with it more.",
        image: "/images/marketplace.png",
        gitHubLink: "https://github.com/Izaiah566/final-project-izaiah-store",
        liveDemo: "https://markethub-site-j08xovlo9-izaiah-harrisons-projects.vercel.app/"
        
    },

    {
        id: 4,
        slug: "portfolio-website",
        title: "Portfolio Website",
        description: "My fully responsive portfolio using React + CSS Modules.",
        longDescription: ` 
            This portfolio tells about what I am, what skills I possess, what experiences I have, 
            and what career I am looking for. It lists the projects that are either completed, in-progress, or 
            no longer working on.
        `,
        problem: "I only got started on the portfolio and the first thing I am having with is making the portfolio professional.",
        solution: "I looked up some templates of what my portfolio needs to look like and I managed to make it look enticing.",
        improvment: "There is no improvement I could think of.",
        image: "/images/portfolio.jpg",
        gitHubLink: "https://github.com/Izaiah566/portfolio-site",
        liveDemo: ""
    }
];