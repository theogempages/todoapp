

export default function FilterTodo({
  dataFilter
}: {
  dataFilter: (val: string) => void
}) {
    const handleFiltering = (e: any) => {
      // console.log(e.target.value)
      dataFilter(e.target.value);
    }
    return (
        <div className="w-full mb-4">
          <div>
            <select
              className="w-[100px] md:w-[150px] p-1 rounded border border-[#BDBDBD] outline-[#006BED]"
              name="filter"
              id=""
              onChange={handleFiltering}
            >
              <option value="all">All Todo</option>
              <option value="completed">Completed</option>
              <option value="progress">Progress</option>
            </select>
              <div className="relative mr-6">
                <label
                    className="pointer-events-nonemax-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
                    >Search
                </label>
                <input
                    type="text" value=""
                    className="peer block min-h-[auto] rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="titleInput"
                    placeholder="Title todo" />
              </div>
          </div>
        </div>
    )
}