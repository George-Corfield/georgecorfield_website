import React from "react";

export type ProjectProps = {
    title: string;
    image: string;
    GitLink?: string;
    WebLink?: string;
    description: string;
}

export const projects: Record<string, ProjectProps> = {
    Gol : {
        title: 'Conway\'s Game of Life',
        image: 'gol',
        GitLink: 'https://github.com/George-Corfield/Game_Of_Life',
        description: 'Game of Life implemented in Golang in both a concurrent and a distributed implementation using AWS nodes',
    },
    SY : {
        title: 'Scotland Yard',
        image: 'SY',
        GitLink: 'https://github.com/George-Corfield/coursework_SY',
        description: 'Scotland Yard boardgame implemented using Java for Computer Systems A coursework',
    },
    SYAI : {
        title: 'Scotland Yard with AI implementation',
        image: 'SYAI',
        GitLink: 'https://github.com/George-Corfield/CW-AI',
        description: 'Scotland Yard boardgame with an AI extension for Mr X. Recieved a score of 80%',
    },
    PhysSim : {
        title: 'Physics Simulator',
        image: 'PhysSim',
        GitLink: 'https://github.com/George-Corfield/physicsSim',
        description: 'A simple physics simulator implemented in Java to use for a ball dropper game',
    },
    DisTC : {
        title: 'Distributed Toolchain Integration',
        image: 'DisTC',
        GitLink: 'https://github.com/George-Corfield/Distributed-Toolchain-Integration',
        description: 'My Software Engineering project, an interface used by Engineers to create projects, parts and input data, allowing them to create optimisations for toolchain results.',
    },
    TW : {
        title: 'Therapist Self-Promotion Website',
        image: 'TW',
        GitLink: 'https://github.com/George-Corfield/therapy_website',
        description: 'A react based website created free-lance for a local therapist for self promotion to clients',
    },
    website : {
        title: 'Personal Website',
        image: 'TW',
        GitLink: 'https://github.com/George-Corfield/georgecorfield_website',
        description: 'A react based website and the website you are currently using!',
    },
    
}