import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

function Events() {
  const router = useRouter();
  console.log(router);
  const events = getAllEvents();

  const handleSearch = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventSearch onSearch={handleSearch} />
      <EventList data={events} />;
    </>
  );
}

export default Events;
