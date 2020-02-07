function useState(initValue) {}
function useEffect(effectCallback) {}
function persistForm() {}
function updateTitle() {}

/*
So how does React know which state corresponds to which useState call? The answer is that React
relies on the order in which Hooks are called.
*/

// ------------
// First render
// ------------
useState('Mary');       // 1. Initialize the name state variable with 'Mary'
useEffect(persistForm);         // 2. Add an effect for persisting the form
useState('Poppins');    // 3. Initialize the surname state variable with 'Poppins'
useEffect(updateTitle);         // 4. Add an effect for updating the title

// -------------
// Second render
// -------------
useState('Mary');       // 1. Read the name state variable (argument is ignored)
useEffect(persistForm);         // 2. Replace the effect for persisting the form
useState('Poppins');    // 3. Read the surname state variable (argument is ignored)
useEffect(updateTitle);         // 4. Replace the effect for updating the title