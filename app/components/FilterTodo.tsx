

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
        <div className="w-full">
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
          </div>
        </div>
    )
}