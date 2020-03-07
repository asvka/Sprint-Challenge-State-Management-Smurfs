1. What problem does the context API help solve?

    Helps with the incessant prop drilling that plagues code.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are payloads of information, reducers take data and reduce them to one source, a store is a database of app data.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is the global state, component is local. It would be good to use Application state is useful for data in the store, immutable data.


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
    
    At first, I thought I really liked redux and still do-- but I LOVE the simplicity of Context API! I love how smooth and dry it makes my codes. :D 
