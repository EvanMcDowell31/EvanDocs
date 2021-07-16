(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(104)),c={title:"React Context API"},s={unversionedId:"react/react-context-api",id:"react/react-context-api",isDocsHomePage:!1,title:"React Context API",description:"Alright, so what is Context? React docs will give you the definition:",source:"@site/docs/react/react-context-api.md",sourceDirName:"react",slug:"/react/react-context-api",permalink:"/EvanDocs/docs/react/react-context-api",editUrl:"https://github.com/EvanMcDowell31/EvanDocs/edit/main/docs/react/react-context-api.md",version:"current",frontMatter:{title:"React Context API"},sidebar:"docs",previous:{title:"Welcome",permalink:"/EvanDocs/docs/intro"}},i=[{value:"Introduction:",id:"introduction",children:[]},{value:"Conclusion:",id:"conclusion",children:[]}],l={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Alright, so what is Context? React docs will give you the definition:"),Object(r.b)("p",null,'"Context provides a way to pass data through the component tree without having to pass props down manually at every level.\u201c'),Object(r.b)("p",null,"Awesome, so in essence just another way to pass props."),Object(r.b)("h3",{id:"introduction"},"Introduction:"),Object(r.b)("p",null,"When we think of data in javascript we think Objects. So a simple object would be something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'const movieCharacters = {\n  starwarsCharacter: "obi-wan",\n};\n')),Object(r.b)("p",null,"Now traditionally passing data as props to a component would go something like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<CustomComponent starwarsCharacters={movieCharacters.starwarsCharacter} />\n")),Object(r.b)("p",null,"and thats a simple way of passing data down the component tree, but does get a little much the more levels of components you have. Context is used to just take that annoyance out of passing props down and to make cleaner more maintainable code."),Object(r.b)("p",null,"When we talk about Objects in javascript we have this concept of \u2018referencing\u2019 data or keys on thee object. So for example thee dot operator movieCharacters.starwars is referencing the starwars value on the movieCharacters object. Super basic principle right, well Context is no different. Its just an Object that it defined at a higher level, and referenced at any point at a lower level in the component tree."),Object(r.b)("p",null,"So lets use the movieCharacters in Context."),Object(r.b)("p",null,"Some things that are used:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"React.createContext")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Context.Provider")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"React.useContext")),Object(r.b)("p",null,"so to start we use the createContext api, (this in our code base is often typed and defined in its own ts file and imported into the parent component where we mount the context provider) it would look a little something like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'export type MovieCharacters = {\n  starwarsCharacter: string,\n};\n\nconst defaultMovieContext: MovieCharacters = {\n  starwarsCharacter: "",\n};\n\nexport const MovieCharactersContext = createContext(defaultMovieContext);\n')),Object(r.b)("p",null,"so here we are defining type and initial values of our Context Object and using react to create a reference to that object."),Object(r.b)("p",null,"Now for this all to work we have to have two more things, a Provider and a Consumer. Lets start with the Provider, in our parent component (most commonly you will see this in page level components)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'import { MovieCharactersContext } from "./MovieCharactersContext";\n\nconst MyParentComponent: React.FC = () => {\n  const initialStarWarsValue = "obi-wan";\n  return (\n    <MovieCharactersContext.Provider\n      value={{ starwarsCharacter: initialStarWarsValue }}\n    >\n      <MyCardComponent />\n    </MovieCharactersContext.Provider>\n  );\n};\n')),Object(r.b)("p",null,"so here we mount the Provider and give it some initial values if we want to. (these values can def be state managed, with useState or useReducer, but to keep it simple just using const)"),Object(r.b)("p",null,"Cool so we now have Context in our example, lets take a look at how we can reference our context object in the child component tree"),Object(r.b)("p",null,"for example if our MyCardComponent.tsx looks something like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'import { MyChildComponent } from "./MovieCharactersContext";\n\nconst MyCardComponent: React.FC = () => {\n  return <MyChildComponent />;\n};\n')),Object(r.b)("p",null,"you could reference context here but lets go another level down to see that you can reference it at any level lower than the context provider."),Object(r.b)("p",null,"MyChildComponent.tsx"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'import React, { useContext } from "react";\nimport { MovieCharactersContext } from "./MovieCharactersContext";\n\nconst MyChildComponent: React.FC = () => {\n  const { starwarsCharacter } = useContext(MovieCharactersContext);\n\n  return <span>{`movie: starwars, character: ${starwarsCharacter}`}</span>;\n};\n')),Object(r.b)("p",null,"so here we are doing a couple things"),Object(r.b)("p",null,"importing the context ( this is like the name of the variable, the way react knows what context to reference )"),Object(r.b)("p",null,"we are using useContext hook to reference Context values here (could also use a ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#contextconsumer"},"React context Consumer")," - use is very similar to how you may expect to use a form )"),Object(r.b)("p",null,"and thats it, destructure or reference your inner context values from the return of useContext and use them how you need to in your child component."),Object(r.b)("h3",{id:"conclusion"},"Conclusion:"),Object(r.b)("p",null,"OK so thats it, pretty simple! Trade off here is a little more setup in exchange for the headache and management of props. I think this is an excellent way to avoid propcalipses and make your code more clean and maintainable if you have to manage alot of props and state."),Object(r.b)("p",null,"Hope this helps, and is a good start point for your journey into using React Context !"),Object(r.b)("hr",null),Object(r.b)("p",null,"sources & docs / further reading:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React Context Docs")))}p.isMDXComponent=!0}}]);