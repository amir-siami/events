import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function FilteredEventPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) return <p className="cnter">Loading...</p>;

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const year = +filterYear;
  const month = +filterMonth;

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month > 12 ||
    month < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="text-center">
            Invalid filter. Please adjust your values!
          </p>
        </ErrorAlert>
        <div class="text-center">
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const filteredEvents = getFilteredEvents({
    year,
    month,
  });

  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">No events found for the chosen filter!</p>
        </ErrorAlert>
        <div class="text-center">
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </Fragment>
    );

  const date = new Date(year, month - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList data={filteredEvents} />
    </div>
  );
}

export default FilteredEventPage;
