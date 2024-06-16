import { useEffect, useState } from "react";
/**
 * 
 * @returns Button dark mode switcher
 * 
 *  @OnLoadComponent (UseEffect)
 *  if user has saved in local storage a preference set the preference
 *  if user has not preference, check if system has darkmode
 *  if user has not dark mode, toggle twice the dark mode for set in true and then in false the preference
 *  if user has dark mode, only execute once the toggle
 * 
 */
const ButtonDarkMode = () => {
  // Dark mode status
  const [darkMode, setDarkMode] = useState<boolean>(false);


  /**
   * Dark mode toggler function
   */
  const onClickButtonToggleDarkMode = () => {
    
    // change = oposite status fo darkmode
    const change = !darkMode

    // Remove dark mode by default in DOM
    document.documentElement.classList.remove("dark");
    
    // if switch to dark mode
    if (change) {
      // Add dark mode by default in DOM
      document.documentElement.classList.add("dark");
    }
    
    // Save current change status in Darkmode control for show the icon and in localhost
    setDarkMode(change)
    localStorage.setItem("DarkMode", change.toString());
  };

  // Set darkmode by default
  useEffect(() => {
    
    // If have a preference for previous access, set the preference
    if (localStorage.getItem("DarkMode") !== null){
      // if has dark mode set darkmode
      localStorage.getItem("DarkMode") === "true" ? onClickButtonToggleDarkMode() : setDarkMode(false);
    }else{
      const HasDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if(!HasDarkMode){
        onClickButtonToggleDarkMode()
      }
      onClickButtonToggleDarkMode()
    }


    
  },[])
  

  // Dark mdoe button toggler / switchser
  return (
    <button type="button" onClick={onClickButtonToggleDarkMode} className="">
      {darkMode ? "🌙" : "🌞"}
      </button>
  );
}

export default ButtonDarkMode