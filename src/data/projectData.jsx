export const projectData = [
    {
        id: 1,
        slug: "dungeon-adventure-RPG",
        title: "Dungeon Adventure RPG",
        description: "An optimized game app created with python with an add-on Pygame.",
        longDescription: ` 
            The dungeon game was created with Python to control the movements of the character. The purpose of the game
            is to explore around the area, figthing monsters and collecting loot.
        `,
        problem: "I wanted make the character move around the screen using the keyboards, but I don't know what to start.",
        solution: "I looked up online for tutorials and found it on youtube. I followed the instructions step-by-step; unforuntately it stopped at Part 5",
        improvment: "I would work more on the creating the background, the enemies and objectives",
        image: "/images/dungeon.jpg",
        gitHubLink: "https://github.com/Izaiah566/Python_RPG",
        liveDemo: ""
    },

    {
        id: 2,
        slug: "8-ball-app",
        title: "8ball App",
        description: "A fully stacked website using React.",
        longDescription: ` 
            The magic 8-ball answers the question you asked it with a yes or no. It features the ball
            in the middle of the page with the white space in the middle of the screen with the blank space
            at the bottom. In the input space, the user may ask any question, but it will not always give them
            the asnwers they wanted.
        `,
        problem: "While creating the website, I wanted to have the ball to shake while asking questions. But when I pressed the button, it doesn't shake before giving me the answer.",
        solution: "I need to make sure to set the shaking state to true and then to false in the setTimeout statement.",
        improvment: "I could add an ",
        image: "/images/8ball.jpg",
        gitHubLink: "https://github.com/Izaiah566/React-Magic-8ball",
        liveDemo: "https://magic-8ball-pgsoo0tem-izaiah-harrisons-projects.vercel.app"
    },

    {
        id: 3,
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
        improvment: "I should revisit the concepts to learn how to filter the other data. Maybe I would work on displaying information whether it is cancelled or not.",
        image: "/images/airlines.jpg",
        gitHubLink: "https://github.com/Izaiah566/react-airlines",
        liveDemo: "https://airlines-site.vercel.app/"
    },

    {
        id: 4,
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
        solution: "I looked for starter layouts and mockup database to spare me the effort to create the website from scratch",
        improvment: "I would had enhancement to the project revisiting the supabase and experiment with it more.",
        image: "/images/marketplace.png",
        gitHubLink: "https://github.com/Izaiah566/final-project-izaiah-store",
        liveDemo: "https://markethub-react-git-main-izaiah-harrisons-projects.vercel.app"
        
    },

    {
        id: 5,
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