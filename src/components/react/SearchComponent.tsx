import { useState } from "react";
import SearchIcon from "../../assets/svg/SearchIcon.svg";
import type { IPostSearch } from "@/interfaces/IPostSEarch";
import CloseIcon from "@/assets/svg/Close.svg";
/**
 * 1. Show button that turn on the modal
 * 2. Open modal with:
 *  2.1 Button to close modal and reset input field
 *  2.2 Input field to search
 *  2.3 Show results
 * 3. On type something to search
 * 4. Show search the results
 * v
 */
const SearchComponent = () => {
  /**
   * On load component set variables relative to language:
   */

  let RootPath = "";

  if (typeof window !== "undefined") {
    RootPath = window.location.origin + "/";
    if (window.location.href.includes("/es")) {
      RootPath += "es/";
    }
  }
  const Postlink = RootPath + "post/";
  const Endpoint = RootPath + "search.json";

  const [posts, setPosts] = useState<IPostSearch[]>([]);
  const [query, setQuery] = useState<string>("");


  /**
   * 1. Show button that turn on the modal
   * 2. Open modal
   * Get Posts from Endpoint 
   */
  const onClickButtonSearch = async () => {
    const response = await fetch(Endpoint);
    const data = await response.json();
    setPosts(data);
    
  };

   /**
   * 3. On type something to search
   * @param event
   * 
   * Save wrote text in Search input in query variable
   */
  const onChangeInputSearch = (event: any) =>{
    const input = event.target.value.toLowerCase();    
    setQuery(input)
  }

   /**
   * 4. Show search the results
   * 
   *  A) Filter the posts and find the term wrote in Search input
   *  B) Search the results in links to the post
   */
  const getSearchResults = () =>{
    if(query.length > 0 ){
      const results = posts.filter((element: IPostSearch) => {
        return (
          element.title.toLowerCase().includes(query) ||
          element.description.toLowerCase().includes(query) ||
          element.slug.toLowerCase().includes(query)
        );
      });
      return results.map((e: IPostSearch)=>{
        return (
          <a href={Postlink + e.slug} className="border-b-2 border-b-slate-300 mb-2 text-white">
              <h4>{e.title}</h4>
              <p>{e.description}</p>
          </a>
        )
      })
    }
    return (<></>)
  }


  /**
   * 5. Close Modal and reset the input search
   * 
   *  Reset all
   */

  const onClickButtonClose = () =>{
    setQuery("")
    setPosts([])
  }



  return (
    <>
      <button
        type="button"
        className="block"
        data-hs-overlay="#search-modal"
        onClick={onClickButtonSearch}
      >
        <img src={SearchIcon.src} alt="Search" />
      </button>

      <div
        id="search-modal"
        className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none"
      >
        <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="flex justify-end items-center py-3 px-4 border-b dark:border-neutral-700">
              <button
                type="button"
                className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                data-hs-overlay="#search-modal"
                onClick={onClickButtonClose}
              >
                <img src={CloseIcon.src} alt="close" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <div className="relative p-4 border-b border-gray-200 dark:border-neutral-700">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                    <img
                      src={SearchIcon.src}
                      alt="search"
                      className="flex-shrink-0 size-4 text-gray-400 dark:text-white/60"
                    />
                  </div>
                  <input
                    className="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    type="search"
                    placeholder="Search"
                    onChange={onChangeInputSearch}
                  />
                </div>
              </div>

              <div className="rounded-b-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 py-4">
                {getSearchResults()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
