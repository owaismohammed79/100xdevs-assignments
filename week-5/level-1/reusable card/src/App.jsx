import './App.css'
import Card from './Card'//Yaha pe kai baar mene {} ke andar enclose karke components ko problem karvaya he

function App() {
  return (
    <>
      <form action="/">
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" placeholder="Enter your name"/>
        <br /><br />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" placeholder="Enter your email"/>
        <br /><br />

        <label htmlFor="socials">Socials URL: </label>
        <input type="url" name="socials" placeholder="Enter your profile url"/>
        <br /><br />
        <label htmlFor="interest">Interests: </label>
        <input type="text" name="interest" placeholder="Enter your interests"/>
        <br /><br />
        <button type='submit' id = 'formsubmit'>Submit</button>
      </form>
      <Card />
    </>
  )
}

export default App
