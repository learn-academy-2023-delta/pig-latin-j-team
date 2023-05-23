import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    "apple through queen squeal fry fluent"
  )
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u" ||
          vowel === "A" ||
          vowel === "E" ||
          vowel === "I" ||
          vowel === "O" ||
          vowel === "U" 
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
      if(eachWord[0]=== vowelsArray[0]){
        eachWord+="way"
        }
       else if(vowelsArray[0]=== "u"||vowelsArray[0]=== "U"){
         eachWord = eachWord.split("")
         let indexOfU = eachWord.indexOf("u")
         let indexOfCapitalU = eachWord.indexOf("U")
         if(indexOfU >indexOfCapitalU && indexOfCapitalU !== -1 || indexOfU == -1){
          indexOfU = indexOfCapitalU
          
        }
      console.log (eachWord, "index of u is", indexOfU)
         if(eachWord[indexOfU - 1] === "q"||eachWord[indexOfU - 1] === "Q") {  // selects the index of the letter in front of th eindex containing "u"  is a 'Q'
          eachWord.slice(0,indexOfU + 1)
          let ruleQU = eachWord.slice(0,indexOfU + 1)
         eachWord = eachWord.filter((value, index) => index > indexOfU)
         eachWord = eachWord.concat(ruleQU).join("")+"ay"
        
        } else {
          let ruleOtherU = eachWord.slice(0,indexOfU)
          eachWord = eachWord.filter((value, index) => index >= indexOfU)
          eachWord = eachWord.concat(ruleOtherU).join("")+"ay"

        }
         // make array of word
         //push first consonant to end arrayed word
         //push 'way' to end of arrayed word
         // make string
         //return the new string
         //.slice() up to the index of 'u'+ 'ay' push end therefore is translated to pigLatin
       }
       else if (vowelsArray.length === 0){
        let indexOfY = eachWord.indexOf("y")
        let indexOfCapitalY = eachWord.indexOf("Y")
        let myY = "y"
        if(indexOfY >indexOfCapitalY && indexOfCapitalY !== -1 || indexOfY == -1){
          indexOfY = indexOfCapitalY
          myY = "Y"
        }
        
        eachWord = myY + eachWord.slice(0, indexOfY) + "ay"
       }else {
        let indexOfVowel = eachWord.indexOf(vowelsArray[0])

        let ruleCons = eachWord.slice(0, indexOfVowel) 
        eachWord = eachWord.split('').filter((value, index) => index>=indexOfVowel)
        eachWord = eachWord.concat(ruleCons).join("")+"ay"
       }


      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    // console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App
