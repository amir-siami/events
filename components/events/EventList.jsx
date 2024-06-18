import EventItem from "./EventItem";
import classes from "./EventList.module.css";

function EventList({ data }) {
  return (
    <ul className={classes.list}>
      {data.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
        />
      ))}
    </ul>
  );
}

export default EventList;
