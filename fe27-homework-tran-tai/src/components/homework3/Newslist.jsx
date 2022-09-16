import Newscomponent from "./Newscomponent";
import images from "./images/images1.jpg";

const newslist = [
  {
    title:
      "Arsenal's Premier jhdjagdhLeague clash with Man City postponed as UEFA rearranges PSV Europa League tie for October 20",
    images: images,
    developer: "SkySports",
    description:
      "Arsenal vs PSV set for Thursday October 20, UEFA confirms; Premier League has agreed to reschedule Arsenal's clash with Man City, which was set for Wednesday October 19; A new date for the Arsenal vs Man City will be announced 'in due course'",
  },
  {
    title:
      "Arsenal's Premier League clash with Man City postponed as UEFA rearranges PSV Europa League tie for October 20",
    images: images,
    developer: "SkySports",
    description:
      "Arsenal vs PSV set for Thursday October 20, UEFA confirms; Premier League has agreed to reschedule Arsenal's clash with Man City, which was set for Wednesday October 19; A new date for the Arsenal vs Man City will be announced 'in due course'",
  },
  {
    title:
      "Arsenal's Premier League clash with Man City postponed as UEFA rearranges PSV Europa League tie for October 20",
    images: images,
    developer: "SkySports",
    description:
      "Arsenal vs PSV set for Thursday October 20, UEFA confirms; Premier League has agreed to reschedule Arsenal's clash with Man City, which was set for Wednesday October 19; A new date for the Arsenal vs Man City will be announced 'in due course'",
  },
  {
    title:
      "Arsenal's Premier League clash with Man City postponed as UEFA rearranges PSV Europa League tie for October 20",
    images: images,
    developer: "SkySports",
    description:
      "Arsenal vs PSV set for Thursday October 20, UEFA confirms; Premier League has agreed to reschedule Arsenal's clash with Man City, which was set for Wednesday October 19; A new date for the Arsenal vs Man City will be announced 'in due course'",
  },
];

const Newslist = () => {
  return (
    <div className="travel-list">
      {newslist.map((item, key) => {
        return (
          <Newscomponent
            key={key}
            id={key + 1}
            images={item.images}
            title={item.title}
            developer={item.developer}
            description={item.description}
          ></Newscomponent>
        );
      })}
    </div>
  );
};

export default Newslist;
