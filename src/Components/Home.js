import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <div >
      <Navbar />
      <h1>Home</h1>
      <div style={{display: "flex", alignItems: "center"}}>
      <div class="card text-bg-light mb-3" style={{maxWidth: "38rem", display: "flex", alignItems: "center", marginLeft: "40rem"}}>
  <div class="card-header"><h2>Index of Contents</h2></div>
  <div class="card-body">
    <ol type="1">
    <h5 class="card-title">Learn React </h5>
   <li> <ul>
      <li> Basic React </li>
      <li>JSX</li>
      <li>Hooks and Props</li>
      <li>Life Cycle methods</li>
      <li>Rendering array of Object </li>
      <li>Fetch API </li>
    </ul> </li>
    <li>
      <ul>
        <li><h5>React Routing</h5></li>
        <li>BrowserRouter</li>
        <li>Public Routing</li>
        <li>Protected Routing</li>
      </ul>
    </li>
    </ol>
    <p class="card-text">What Are We Building?
In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.

You can see what we’ll be building here: Final Result. If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry! The goal of this tutorial is to help you understand React and its syntax.

We recommend that you check out the tic-tac-toe game before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial. Our next step is to set you up so that you can start building the game.

</p>
  </div>
</div>
    </div>
    </div>
  );
};
