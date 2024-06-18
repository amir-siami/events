import { useRef } from "react";
import Button from "../ui/Button";

const EventSearch = ({ onSearch }) => {
  const yearRef = useRef();
  const monthRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;

    onSearch(selectedYear, selectedMonth);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center justify-center p-4 w-[90%] mx-auto my-2 max-w-[40rem] bg-gray-100 rounded-md "
    >
      <div className="flex flex-col md:flex-row w-full gap-2">
        <div className="flex space-x-[1rem] justify-center items-center md:w-[80%]">
          <label
            htmlFor="year"
            className="block text-sm font-bold text-gray-700"
          >
            Year
          </label>
          <select
            id="year"
            ref={yearRef}
            className="block w-full p-2 text-sm border text-black border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 md:w-full"
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="flex space-x-[1rem] items-center justify-center md:w-[80%]">
          <label
            htmlFor="month"
            className="block text-sm font-bold text-gray-700"
          >
            Month
          </label>
          <select
            id="month"
            ref={monthRef}
            className="block w-full p-2 text-sm border text-black border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 md:w-full"
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button
        type="submit"
        classes="px-4 py-2 ml-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 md:w-[22%]"
      >
        Find Events
      </Button>
    </form>
  );
};

export default EventSearch;
