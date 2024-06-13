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
 *
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
  const onCheckSearchCheckbox = async (event: any) => {
    console.log(event.target.value);
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
  const onChangeInputSearch = (event: any) => {
    const input = event.target.value.toLowerCase();
    setQuery(input);
  };

  /**
   * 4. Show search the results
   *
   *  A) Filter the posts and find the term wrote in Search input
   *  B) Search the results in links to the post
   */
  const getSearchResults = () => {
    if (query.length > 0) {
      const results = posts.filter((element: IPostSearch) => {
        return (
          element.title.toLowerCase().includes(query) ||
          element.description.toLowerCase().includes(query) ||
          element.slug.toLowerCase().includes(query)
        );
      });
      return results.map((e: IPostSearch) => {
        return (
          <a
            href={Postlink + e.slug}
            className="border-b-2 border-b-slate-300 mb-4"
          >
            <h4 className="text-white mb-1">{e.title}</h4>
            <p className="text-sky-500">{e.description}</p>
          </a>
        );
      });
    }
    return <></>;
  };

  /**
   * 5. Close Modal and reset the input search
   *
   *  Reset all
   */

  const onClickButtonClose = () => {
    setQuery("");
    setPosts([]);
  };

  return (
    <>
      <label htmlFor="search-open">
        <img src={SearchIcon.src} alt="Search" />
      </label>
      <input
        type="checkbox"
        className="hidden peer"
        id="search-open"
        onChange={($event) => onCheckSearchCheckbox($event)}
      />
      <div className="absolute bg-gradient-to-b from-blue-950 to-indigo-900 flex-col gap-4 h-dvh hidden items-center justify-center left-0 transition-opacity duration-200 opacity-0 peer-checked:flex peer-checked:opacity-90  top-0 w-full z-10">
        <label htmlFor="search-open" className="absolute top-8 right-8">
          <img src={CloseIcon.src} alt="Search" className="w-12" />
        </label>
        <div className="border-b-2 border-b-white flex gap-4 items-center py-2 w-10/12 md:w-6/12">
          <label htmlFor="search-input">
            <img src={SearchIcon.src} alt="Search" />
          </label>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-xl w-full focus:appearance-none focus:ring-0 focus:ring-offset-0 border-none p-2"
            id="search-input"
            autoFocus
            onChange={onChangeInputSearch}
          />
        </div>
        <div className=" overflow-y-auto h-3/4 w-10/12">
          {getSearchResults()}
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
