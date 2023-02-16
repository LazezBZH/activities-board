import "./Activity.css";

export default function Activity(activity) {
  let id = activity.activity.title;
  id = id.replace(/ /g, "");
  return (
    <div className="activity" id={id}>
      <div className="activity-txt">
        {/* <div className="activity-header"></div> */}
        <div className="activity-title">
          <h6>{activity.activity.title}</h6>{" "}
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
                  <p className="activity-details_current">
                    {activity.activity.timeframes[0].weekly[0].current}hrs
                  </p>
                  <p className="activity-details_previous">
                    Last Week -{" "}
                    {activity.activity.timeframes[0].weekly[0].previous}hrs
                  </p>
                </div>
              );
            case "monthly":
              return (
                <div className="activity-details">
                  <p className="activity-details_current">
                    {activity.activity.timeframes[0].monthly[0].current}hrs
                  </p>
                  <p className="activity-details_previous">
                    Last Month -{" "}
                    {activity.activity.timeframes[0].monthly[0].previous}hrs
                  </p>
                </div>
              );
            default:
              return (
                <div className="activity-details">
                  <p className="activity-details_current">
                    {activity.activity.timeframes[0].daily[0].current}hrs
                  </p>
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
