import "./Activity.css";

export default function Activity(activity) {
  let id = activity.activity.title;
  id = id.replace(/ /g, "");
  return (
    <div className="activity" id={id}>
      <div className="activity-txt">
        <div className="activity-title">
          <h3>{activity.activity.title}</h3>{" "}
          <div className="activity-points">
            <button>.</button>
            <button>.</button>
            <button>.</button>
          </div>
        </div>
        {(() => {
          switch (activity.choice) {
            case "weekly":
              return (
                <div className="activity-details">
                  <h4 className="activity-details_current">
                    {activity.activity.timeframes[0].weekly[0].current}hrs
                  </h4>
                  <p className="activity-details_previous">
                    Last Week -{" "}
                    {activity.activity.timeframes[0].weekly[0].previous}hrs
                  </p>
                </div>
              );
            case "monthly":
              return (
                <div className="activity-details">
                  <h4 className="activity-details_current">
                    {activity.activity.timeframes[0].monthly[0].current}hrs
                  </h4>
                  <p className="activity-details_previous">
                    Last Month -{" "}
                    {activity.activity.timeframes[0].monthly[0].previous}hrs
                  </p>
                </div>
              );
            default:
              return (
                <div className="activity-details">
                  <h4 className="activity-details_current">
                    {activity.activity.timeframes[0].daily[0].current}hrs
                  </h4>
                  <p className="activity-details_previous">
                    Yesterday -{" "}
                    {activity.activity.timeframes[0].daily[0].previous}hrs
                  </p>
                </div>
              );
          }
        })()}
      </div>
    </div>
  );
}
