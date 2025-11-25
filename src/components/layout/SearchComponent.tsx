import { useState } from "preact/hooks"

export const SearchComponent = () => {

    const [result, setResults] = useState([])

    const [filteredSearch, setFilteredSearch] = useState([])


    const onShowModal = async () => {
        (document.getElementById('searchModal') as any).showModal()
        const request = await fetch('/api/search.json')
        const response = await request.json()
        setResults(response);
    }

    const onInputSearch = (e: any) => {
        const input: string = e.target.value.toLowerCase() || ''
        if (input.length >= 3) {
            const filtered = result.filter((element: any) => {
                return element.title.toLowerCase().includes(input) ||
                    element.description.toLowerCase().includes(input) ||
                    element.slug.toLowerCase().includes(input) ||
                    element.topic.toLowerCase().includes(input)
            })
            setFilteredSearch(filtered)
        } else {
            setFilteredSearch([])
        }
    }

    const showResults = () => {
        if (filteredSearch.length > 0) {
            return filteredSearch.map((e: any) => {
                return (
                    <li className="list-row hover:bg-gray-300/50">
                        <a href={e.slug}>
                            <div><img className="size-10 rounded-box" src={e.thumbnail} alt="No logo" /></div>
                            <div>
                                <div>{e.title}</div>
                                <div className="text-xs uppercase font-semibold opacity-60">{e.description}</div>
                            </div>
                        </a>
                    </li>

                )
            })
        }
        return <></>
    }


    return (
        <section>

            <button className="bg-gray-900/60 backdrop-blur flex items-center gap-4 justify-center px-2 py-1 md:size-12 size-10 rounded-full cursor-pointer" onClick={() => onShowModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            <dialog id="searchModal" className="modal">
                <div className="modal-box bg-gray-900/60 backdrop-blur">
                    <label class="input rounded-2xl w-full">
                        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                stroke-width="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" name="q" class="grow" placeholder="Search" onInput={($event) => onInputSearch($event)} />
                    </label>
                    <ul className="list  rounded-box shadow-md max-h-96 overflow-y-scroll">

                        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Search results</li>

                        {showResults()}
                    </ul>
                    <div className="modal-action">
                        <form method="dialog" >
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </section>
    )
}
