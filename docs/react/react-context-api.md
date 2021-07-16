---
title: React Context API
---

Alright, so what is Context? React docs will give you the definition:

"Context provides a way to pass data through the component tree without having to pass props down manually at every level.“

Awesome, so in essence just another way to pass props.

### Introduction:

When we think of data in javascript we think Objects. So a simple object would be something like this:

```jsx
const movieCharacters = {
  starwarsCharacter: "obi-wan",
};
```

Now traditionally passing data as props to a component would go something like:

```jsx
<CustomComponent starwarsCharacters={movieCharacters.starwarsCharacter} />
```

and thats a simple way of passing data down the component tree, but does get a little much the more levels of components you have. Context is used to just take that annoyance out of passing props down and to make cleaner more maintainable code.

When we talk about Objects in javascript we have this concept of ‘referencing’ data or keys on thee object. So for example thee dot operator movieCharacters.starwars is referencing the starwars value on the movieCharacters object. Super basic principle right, well Context is no different. Its just an Object that it defined at a higher level, and referenced at any point at a lower level in the component tree.

So lets use the movieCharacters in Context.

Some things that are used:

`React.createContext`

`Context.Provider`

`React.useContext`

so to start we use the createContext api, (this in our code base is often typed and defined in its own ts file and imported into the parent component where we mount the context provider) it would look a little something like:

```jsx
export type MovieCharacters = {
  starwarsCharacter: string,
};

const defaultMovieContext: MovieCharacters = {
  starwarsCharacter: "",
};

export const MovieCharactersContext = createContext(defaultMovieContext);
```

so here we are defining type and initial values of our Context Object and using react to create a reference to that object.

Now for this all to work we have to have two more things, a Provider and a Consumer. Lets start with the Provider, in our parent component (most commonly you will see this in page level components)

```jsx
import { MovieCharactersContext } from "./MovieCharactersContext";

const MyParentComponent: React.FC = () => {
  const initialStarWarsValue = "obi-wan";
  return (
    <MovieCharactersContext.Provider
      value={{ starwarsCharacter: initialStarWarsValue }}
    >
      <MyCardComponent />
    </MovieCharactersContext.Provider>
  );
};
```

so here we mount the Provider and give it some initial values if we want to. (these values can def be state managed, with useState or useReducer, but to keep it simple just using const)

Cool so we now have Context in our example, lets take a look at how we can reference our context object in the child component tree

for example if our MyCardComponent.tsx looks something like:

```jsx
import { MyChildComponent } from "./MovieCharactersContext";

const MyCardComponent: React.FC = () => {
  return <MyChildComponent />;
};
```

you could reference context here but lets go another level down to see that you can reference it at any level lower than the context provider.

MyChildComponent.tsx

```jsx
import React, { useContext } from "react";
import { MovieCharactersContext } from "./MovieCharactersContext";

const MyChildComponent: React.FC = () => {
  const { starwarsCharacter } = useContext(MovieCharactersContext);

  return <span>{`movie: starwars, character: ${starwarsCharacter}`}</span>;
};
```

so here we are doing a couple things

importing the context ( this is like the name of the variable, the way react knows what context to reference )

we are using useContext hook to reference Context values here (could also use a [React context Consumer](https://reactjs.org/docs/context.html#contextconsumer) - use is very similar to how you may expect to use a form )

and thats it, destructure or reference your inner context values from the return of useContext and use them how you need to in your child component.

### Conclusion:

OK so thats it, pretty simple! Trade off here is a little more setup in exchange for the headache and management of props. I think this is an excellent way to avoid propcalipses and make your code more clean and maintainable if you have to manage alot of props and state.

Hope this helps, and is a good start point for your journey into using React Context !

---

sources & docs / further reading:

[React Context Docs](https://reactjs.org/docs/context.html)
