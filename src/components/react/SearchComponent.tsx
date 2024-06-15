import { useEffect, useRef, useState } from "react";
import SearchIcon from "@/assets/svg/SearchIcon.svg";
import CloseIcon from "@/assets/svg/Close.svg";
import type { IPostSearch } from "@/interfaces/IPostSearch";


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
  // Text of search input
  const [InputSearch, setInputSearch] = useState("");
  // Posts list to filter
  const [Posts, setPosts] = useState<IPostSearch[]>([]);
  // Modal reference for open / close it
  const ModalReference = useRef<HTMLDialogElement>(null);

  const onClickButtonOpenModal = async () => {
    const response = await fetch("/search.json");
    const data = await response.json();
    setPosts(data);
    ModalReference.current!.open = true;
  };

  const onClickButtonCloseModal = () => {
    setPosts([]);
    setInputSearch("");
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

  const onChangeInputSearch = (event: string) => setInputSearch(event);

  const SearchResultVisualizer = () => {
    const input = InputSearch.toLowerCase();
    if (input.length > 0) {
      const results = Posts.filter((element: IPostSearch) => {
        return (
          element.title.toLowerCase().includes(input) ||
          element.description.toLowerCase().includes(input) ||
          element.slug.toLowerCase().includes(input)
        );
      });
      return results.map((post: IPostSearch) => {
        return (
          <article className="border-b-2 border-white pb-4 flex gap-4">
            <a
              href={`/blog/post/${post.slug}/`}
              className="bg-white p-2 rounded-xl"
            >
              <img
                src={
                  post.thumbnail
                    ? post.thumbnail
                    : `/svg_icons/${post.topic}.svg`
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
      });
    }
    return <p>Search input is empty type something for locate a post.</p>;
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
              autoFocus
              value={InputSearch}
              onChange={($event) => onChangeInputSearch($event.target.value)}
            />
          </div>
          {/* RESULTS VISUALIZER */}
          <div className="flex flex-col gap-4 glassmorph h-auto max-h-96 mx-auto overflow-y-auto w-10/12 md:w-6/12 z-50">
            {SearchResultVisualizer()}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SearchComponent;
