import { useEffect, useRef, useState } from "react";
import SearchIcon from "@/assets/svg/SearchIcon.svg";
import CloseIcon from "@/assets/svg/Close.svg";

/**
 * Necessary elements:
 * - @HTML Button for open modal
 * - - @onClick O
 *        Open modal
 *        Get Posts
 * - @HTML Dialog: Modal for Show search stuff
 * - - @HTML Button for close modal
 *       @event onPress ESC
 * - - - @onClick
 *          Reset Variables
 *          Close modal
 * - - @HTML Input search
 *      @onChange filter in a Query variable the Posts
 * - - @HTML List: search visualizer
 *      @Content Query results
 *
 */

const SearchComponent = () => {
  // Posts list to filter
  const [Posts, setPosts] = useState([]);
  const [results, setResults] = useState([]);
  // Modal reference for open / close it
  const ModalReference = useRef<HTMLDialogElement>(null);
  //For set focus on open modal button
  const InputSearchReference = useRef<HTMLInputElement>(null);

  const onClickButtonOpenModal = async () => {
    const response = await fetch("/search.json");
    const data = await response.json();
    setPosts(data);
    ModalReference.current!.open = true;
    InputSearchReference.current!.focus();
  };

  const onClickButtonCloseModal = () => {
    setPosts([]);
    InputSearchReference.current!.value = "";
    ModalReference.current!.removeAttribute("open");
  };

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "Escape") {
        onClickButtonCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const onChangeSearchInput = () => {
    setResults([]);
    const input = InputSearchReference.current!.value.toLowerCase();
    if(input.length > 0){
      const SearchResults = Posts.filter((element: any) => {
        return (
          element.title.toLowerCase().includes(input) ||
          element.description.toLowerCase().includes(input) ||
          element.slug.toLowerCase().includes(input) ||
          element.topic.toLowerCase().includes(input)
        );
      });
      setResults(SearchResults);
    }
  };
  return (
    <>
      {/* OPEN BUTTON */}
      <button type="button" onClick={onClickButtonOpenModal}>
        <img src={SearchIcon.src} alt="Search" />
      </button>
      {/* DIALOG OF SEARCH WITH SEARCH INPUT AND VISUALIZER */}
      <dialog ref={ModalReference} className="group">
        <div className="fixed bg-indigo-900 flex flex-col gap-4 h-dvh items-center justify-center left-0 top-0 w-full z-40">
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={onClickButtonCloseModal}
            className="absolute top-8 right-8"
          >
            <img src={CloseIcon.src} alt="Close" className="w-12" />
          </button>
          {/* SEARCH INPUT LAYOUT AND SEARCH INPUT */}
          <div className="border-b-2 border-b-black glassmorph flex gap-4 items-center  py-2 w-10/12 md:w-6/12">
            <label htmlFor="search-input">
              <img src={SearchIcon.src} alt="Search" />
            </label>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-nonefocus:appearance-none focus:ring-0 focus:ring-offset-0 outline-none p-2 placeholder:text-white/80 text-xl w-full "
              id="search-input"
              ref={InputSearchReference}
              onChange={onChangeSearchInput}
            />
          </div>
          {/* RESULTS VISUALIZER */}
          <div className="flex flex-col gap-4 glassmorph h-auto md:max-h-96 mx-auto overflow-y-auto w-10/12 md:w-6/12 z-50">
            {results.length > 0 ? (
              results.map((post: any) => {
                return (
                  <article className="border-b-2 border-white pb-4 flex gap-4">
                    <a
                      href={`/blog/post/${post.slug}/`}
                      className="bg-white p-2 rounded-xl h-24"
                    >
                      <img
                        src={
                          post.thumbnail
                            ? post.thumbnail
                            : `/svg_topics/${post.topic}.svg`
                        }
                        alt={post.title}
                        className="w-20 h-20"
                      />
                    </a>
                    <section className="flex flex-col w-full">
                      <div className="flex gap-4 w-full">
                        <a href={`/blog/post/${post.slug}`} className="w-full">
                          <h2 className="mb-0 w-full">{post.title}</h2>
                        </a>
                      </div>
                      <p>{post.description}</p>
                    </section>
                  </article>
                );
              })
            ) : (
              <p>Search input is empty type something for locate a post.</p>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SearchComponent;
